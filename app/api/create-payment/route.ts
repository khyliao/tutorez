// app/api/create-payment/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { amount, description, totalLessonsToPay } = await req.json();
  console.log(amount, description, totalLessonsToPay);

  try {
    const invoicePayload = {
      amount: amount * 100,
      ccy: 980,
      redirectUrl: "https://tutorez.com.ua/platform/dashboard",
      webHookUrl: "https://tutorez.com.ua/api/payment-callback",
      validity: 3600,
      merchantPaymInfo: {
        reference: `payment-${Date.now()}`,
        destination: description,
        comment: description,
        basketOrder: [
          {
            name: "Оплата уроків",
            qty: totalLessonsToPay,
            sum: amount * 100,
            total: amount * 100,
            unit: "год.",
            code: `lesson-${Date.now()}`,
            discounts: [],
            tax: [],
          },
        ],
        discounts: [],
        customerEmails: [],
      },
    };

    const response = await fetch(
      "https://api.monobank.ua/api/merchant/invoice/create",
      {
        method: "POST",
        headers: {
          "X-Token": process.env.NEXT_PUBLIC_MONOBANK_TOKEN!,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(invoicePayload),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Monobank API error:", data);
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json({ pageUrl: data.pageUrl });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Failed to create payment" },
      { status: 500 }
    );
  }
}
