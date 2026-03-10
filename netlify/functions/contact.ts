import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event: any) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const { name, email, subject, message } = JSON.parse(event.body || "{}");

  if (!name || !email || !subject || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: "All fields are required." }) };
  }

  try {
    await resend.emails.send({
      from: "Washly Contact <noreply@washly.ro>",
      to: "admin@washly.ro",
      replyTo: email,
      subject: `[Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to send message. Please try again later." }) };
  }
};
