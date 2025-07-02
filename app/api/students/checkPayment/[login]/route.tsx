import { getCurrentDateAndTime } from "@/lib/utils/timeFormatter";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { pathname, searchParams } = req.nextUrl;
    const login = pathname.split("/").pop();
    const actionId = searchParams.get("actionId");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}/users/${login}.json`
    );
    const user = await res.json();

    if (user.payments?.some(({ id }: { id: string }) => id === actionId)) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(false, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
};
