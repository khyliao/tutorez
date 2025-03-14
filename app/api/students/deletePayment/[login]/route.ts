import { NextRequest, NextResponse } from "next/server";
import { Payment } from "@/types/lessons";

export const PUT = async (req: NextRequest) => {
  try {
    const { pathname } = req.nextUrl;
    const login = pathname.split("/").pop();
    const { id: paymentIdToDelete, amount } = await req.json();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}/users/${login}.json`
    );

    const user = await res.json();
    const payments = user.payments.filter(
      (payment: Payment) => payment.id !== paymentIdToDelete
    );
    user.payments = payments;
    user.balance -= amount;

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
