import { getStudentsByTutor } from "@firebase/student/student";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const tutor = req.nextUrl.searchParams.get("tutor") || "";

  try {
    const res = await getStudentsByTutor(tutor);
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
