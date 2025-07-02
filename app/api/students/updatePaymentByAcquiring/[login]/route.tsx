import { getCurrentDateAndTime } from "@/lib/utils/timeFormatter";
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
    const priceInUAH =
      typeof action.price === "number" ? action.price / 100 : 0;
    const lessonsQty = user.price ? priceInUAH / user.price : 0;

    const isExistedPaymentRes = await fetch(
      `https://tutorez.com.ua/api/students/checkPayment/${login}?actionId=${action.id}`
    );

    const isExistedPaymentData = await isExistedPaymentRes.json();

    if (isExistedPaymentData) {
      return NextResponse.json({ ok: true });
    }

    const newBalance = user.balance + lessonsQty;

    action.amount = lessonsQty || action.amount;
    action.type = "payment";
    action.date = getCurrentDateAndTime();
    if (!action.id) {
      action.id = Date.now();
    }
    action.price = priceInUAH;
    action.currentBalance = newBalance;

    if (user) {
      if (Array.isArray(user.payments)) {
        payments.push(...user.payments);
      }
    }

    payments.push(action);

    user.balance = newBalance;
    user.payments = payments;

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
