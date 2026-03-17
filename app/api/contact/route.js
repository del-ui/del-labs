// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, company, message } = data;

    console.log("Incoming data:", data); // 👈 debug

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 👇 verify connection FIRST
    await transporter.verify();
    console.log("SMTP server ready");

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company}
Message: ${message}
      `,
    });

    return new Response(JSON.stringify({ message: "Sent successfully" }), { status: 200 });

  } catch (error) {
    console.error("FULL ERROR:", error); // 👈 THIS is what we need
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}