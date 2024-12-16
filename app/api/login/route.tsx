import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

// export async function POST(req: NextRequest) {
//   const formData = await req.formData();

//   const login = formData.get("login") as string | null;
//   const password = formData.get("password") as string | null;

//   if (!login || !password) {
//     return NextResponse.json({ message: "Invalid fields" }, { status: 400 });
//   }

//   try {
//     return NextResponse.json({ message: "Success: email was sent" });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { message: "COULD NOT SEND MESSAGE" },
//       { status: 500 }
//     );
//   }
// }
