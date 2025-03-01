import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest) => {
  try {
    const { pathname } = req.nextUrl;
    const login = pathname.split("/").pop();
    const action = await req.json();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}/users/${login}.json`
    );
    const user = await res.json();
    const lessons = [];

    action.type = "lesson";
    action.date = new Date().toLocaleDateString("uk-UA");
    action.isHomeworkCompleted = action.tutorReview >= 4;
    action.id = Date.now();
    action.price = user.price;

    if (user) {
      if (Array.isArray(user.lessons)) {
        lessons.push(...user.lessons);
      }
    }

    lessons.push(action);

    user.balance -= action.duration;
    user.lessons = lessons;

    await fetch(`${process.env.NEXT_PUBLIC_DATABASE_URL}/users/${login}.json`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });

    // await fetch(
    //   `${process.env.NEXT_PUBLIC_DATABASE_URL}/users/${login}/lessons.json`,
    //   {
    //     method: "PUT",
    //     body: JSON.stringify(lessons),
    //     headers: { "Content-Type": "application/json" },
    //   }
    // );

    return NextResponse.json(user, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
};
