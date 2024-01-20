import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactInformation } from "@/app/data";

import ContactEmail from "@/emails/Contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, lastName, email, phoneNumber, message } =
    await request.json();

  try {
    const data = await resend.emails.send({
      from: contactInformation.botEmail,
      to: [contactInformation.email],
      subject: "CWS Contact Request",
      react: ContactEmail({
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
