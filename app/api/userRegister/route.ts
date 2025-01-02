import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export async function PUT(req: NextRequest) {
  try {
    const user = await req.json();

    if (!user?.login || !user?.password) {
      return NextResponse.json(
        { error: "Login and password fields are required." },
        { status: 400 }
      );
    }

    const userUrl = `${process.env.NEXT_PUBLIC_DATABASE_URL}/users/${user.login}.json`;
    const existingUserResponse = await fetch(userUrl);

    if (existingUserResponse.ok) {
      const existingUser = await existingUserResponse.json();
      if (existingUser) {
        return NextResponse.json(
          { error: "User already exists." },
          { status: 400 }
        );
      }
    } else {
      throw new Error("Failed to check existing user.");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);

    const newUser = {
      ...user,
      id: uuidv4(),
      status: "active",
      password: hashedPassword,
    };

    const saveResponse = await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}/users/${user.login}.json`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      }
    );

    if (!saveResponse.ok) {
      throw new Error("Failed to save user to the database.");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to register user." },
      { status: 500 }
    );
  }
}
