/* global process */


import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Only POST method is allowed" });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Setup transport (use Gmail App Password)
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL_USERNAME,     // e.g., your Gmail address
            pass: process.env.EMAIL_PASSWORD,     // Gmail App password
        },
    });

    try {
        await transporter.sendMail({
            from: `"Contact Form" <${process.env.EMAIL_USERNAME}>`,
            to: "banerjeedip761@gmail.com",
            subject: `New message from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error("❌ Error sending email:", error);
        return res.status(500).json({ error: "Failed to send message" });
    }
}
