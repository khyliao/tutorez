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
    const payments = [];

    action.type = "payment";
    action.date = new Date().toLocaleDateString("uk-UA");
    action.id = Date.now();
    action.price = user.price;

    if (user) {
      if (Array.isArray(user.payments)) {
        payments.push(...user.payments);
      }
    }

    payments.push(action);

    await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}/users/${login}/payments.json`,
      {
        method: "PUT",
        body: JSON.stringify(payments),
        headers: { "Content-Type": "application/json" },
      }
    );

    return NextResponse.json(action, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
};
