import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { pathname } = req.nextUrl;
    const login = pathname.split("/").pop();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}/users/${login}.json`
    );
    const data = await res.json();

    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(e, { status: 500 });
  }
}
