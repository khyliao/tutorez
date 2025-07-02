import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log(
    "💰 Payment callback from Monobank:",
    JSON.stringify(body, null, 2)
  );

  const reference = body.invoiceId || body.paymentInfo.tranId;
  const login = body.destination.split(".")[0];
  console.log("reference", reference);

  console.log(login);

  if (!reference) {
    return NextResponse.json(
      { error: "Missing reference ID" },
      { status: 400 }
    );
  }

  const invoicePayload = { amount: body.amount, id: reference };

  try {
    const response = await fetch(`/api/students/updatePayment/${login}`, {
      method: "POST",
      headers: {
        "X-Token": process.env.NEXT_PUBLIC_MONOBANK_TOKEN!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(invoicePayload),
    });

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
  // await updatePaymentStatus(reference, invoiceStatus); // TODO

  return NextResponse.json({ ok: true });
}
