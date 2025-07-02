import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const reference = body.invoiceId || body.paymentInfo.tranId;
  const login = body.destination.split(".")[0];

  if (body.status !== "success") {
    return NextResponse.json({ error: "Still not" }, { status: 400 });
  }

  if (!reference) {
    return NextResponse.json(
      { error: "Missing reference ID" },
      { status: 400 }
    );
  }

  console.log(reference);

  const invoicePayload = {
    amount: body.amount,
    id: reference,
    price: body.amount,
  };

  try {
    const response = await fetch(
      `https://tutorez.com.ua/api/students/updatePaymentByAcquiring/${login}`,
      {
        method: "PUT",
        headers: {
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
