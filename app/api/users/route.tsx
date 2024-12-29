import { getUsersByRole } from "@firebase/user/user";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const role = req.nextUrl.searchParams.get("role") || "allRoles";

  try {
    const res = await getUsersByRole(role);
    console.log(res);

    return NextResponse.json(res, { status: 200 });
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      { error: e || "An unknown error occurred." },
      { status: 500 }
    );
  }
}
