import { NextRequest, NextResponse } from "next/server";

interface Lesson {
  date: string;
  type: string;
  paid: boolean;
  tutorReview: number;
  duration: number;
  isHomeworkCompleted: boolean;
  id: number;
  comment: string;
}

export const PUT = async (req: NextRequest) => {
  try {
    const { pathname } = req.nextUrl;
    const login = pathname.split("/").pop();
    const { id: lessonIdToDelete, duration } = await req.json();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}/users/${login}.json`
    );

    const user = await res.json();
    const lessons = user.lessons.filter(
      (lesson: Lesson) => lesson.id !== lessonIdToDelete
    );

    user.lessons = lessons;
    user.balance += duration;

    await fetch(`${process.env.NEXT_PUBLIC_DATABASE_URL}/users/${login}.json`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
};
