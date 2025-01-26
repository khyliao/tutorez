import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const login = req.nextUrl.searchParams.get("login");

    if (!login) {
      return NextResponse.json(
        { error: "Логін обовʼязковий" },
        { status: 400 }
      );
    }

    console.log(login);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}/users/${login}.json`,
      {
        method: "DELETE",
      }
    );

    return NextResponse.json(
      { message: `Користувач ${login} видалений` },
      { status: 200 }
    );
  } catch (e) {
    console.error("Помилка видалення користувача:", e);
    return NextResponse.json(
      { error: "Помилка видалення користувача" },
      { status: 500 }
    );
    console.error(e);
  }
}
