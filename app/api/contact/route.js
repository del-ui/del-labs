import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, company, message } = await req.json();

    // 👉 SEND TO GOOGLE SHEETS
    await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({ name, email, company, message }),
    });

    // 👉 EMAIL SETUP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to YOU
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "🚀 New DEL-LABS Lead",
      html: `
        <h2>New Client Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // Auto reply
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "DEL-LABS - Request Received",
      html: `
        <h3>Hello ${name},</h3>
        <p>We’ve received your request. We’ll contact you soon.</p>
        <p>— DEL-LABS</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}