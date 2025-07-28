// app/api/contact/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
console.log("✅ API route loaded");
export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: "abrioandreac@gmail.com",
      subject: `${subject}`,
      replyTo: email,
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Subject:</b> ${subject}</p>
             <p><b>Message:</b><br/>${message}</p>`,
    });

    if (data.error) {
      console.error("Resend Error:", data.error);
      return NextResponse.json({ error: data.error }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
