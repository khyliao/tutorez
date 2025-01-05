import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}/tutors.json`
    );

    if (!res.ok) {
      throw new Error("Failed to save user to database");
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (e) {
    console.error("Error:", e);

    return NextResponse.json({ error: "Failed to get tutors", status: 500 });
  }
}
