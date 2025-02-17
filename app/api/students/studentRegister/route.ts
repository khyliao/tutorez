import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { generatePassword } from "@/lib/generatePassword";

export async function PUT(req: NextRequest) {
  try {
    const user = await req.json();
    const generatedPassword = generatePassword();

    const userUrl = `${process.env.NEXT_PUBLIC_DATABASE_URL}/users/${user.login}.json`;
    const existingUserResponse = await fetch(userUrl);

    if (existingUserResponse.ok) {
      const existingUser = await existingUserResponse.json();

      if (existingUser) {
        return NextResponse.json("Користувач з таким логіном вже існує", {
          status: 400,
        });
      }
    } else {
      throw new Error("Failed to check existing user.");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(generatedPassword, saltRounds);

    const newUser = {
      ...user,
      price: +user.price,
      id: uuidv4(),
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

    return NextResponse.json(
      { login: user.login, password: generatedPassword },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to register user." },
      { status: 500 }
    );
  }
}
