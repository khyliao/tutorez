import { getStudentsByTutor } from "@firebase/student/student";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const tutor = req.nextUrl.searchParams.get("tutor") || "";

  try {
    const res = await getStudentsByTutor(tutor);

    return NextResponse.json(res, { status: 200 });
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      { error: e || "An unknown error occurred." },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const studentLogin = req.nextUrl.searchParams.get("student") || "";
    const studentInfo = await req.json();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}/users/${studentLogin}.json`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentInfo.body),
      }
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      { error: e || "An unknown error occurred." },
      { status: 500 }
    );
  }
}
