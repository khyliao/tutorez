import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const login = req.nextUrl.searchParams.get("login");

  try {
    const userUrl = `${process.env.NEXT_PUBLIC_DATABASE_URL}/users/${login}.json`;
    const res = await fetch(userUrl);

    return NextResponse.json(res, { status: 200 });
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      { error: e || "An unknown error occurred." },
      { status: 500 }
    );
  }
}
