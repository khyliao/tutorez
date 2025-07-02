import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}/payments.json`
    );
    const data = await res.json();

    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      { error: e || "An unknown error occurred." },
      { status: 500 }
    );
  }
}
