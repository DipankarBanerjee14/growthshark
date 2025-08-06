/* global process */
import formidable from "formidable";
import fs from "fs";
import nodemailer from "nodemailer";

// Disable default body parser for formidable
export const config = {
    api: {
        bodyParser: false,
    },
};

// Create reusable transporter using SMTP (Gmail)
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USERNAME, // your Gmail
        pass: process.env.EMAIL_PASSWORD, // app password
    },
});

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Only POST method is allowed" });
    }

    const form = formidable({ multiples: false });

    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error("Form parsing error:", err);
            return res.status(500).json({ error: "Failed to process form data" });
        }

        const { name, email, countryCode, whatsapp } = fields;
        const resume = files.resume;

        if (!name || !email || !countryCode || !whatsapp || !resume) {
            return res.status(400).json({ error: "All fields are required" });
        }

        try {
            const resumePath = resume.filepath;
            const resumeName = resume.originalFilename;

            // Compose email
            const mailOptions = {
                from: `"Job Application" <${process.env.EMAIL_USERNAME}>`,
                to: "banerjeedip761@gmail.com",
                subject: `New Job Application from ${name}`,
                html: `
          <h3>New Application Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>WhatsApp:</strong> ${countryCode}${whatsapp}</p>
        `,
                attachments: [
                    {
                        filename: resumeName,
                        path: resumePath,
                    },
                ],
            };

            await transporter.sendMail(mailOptions);
            console.log("✅ Email sent successfully");

            // Remove the resume file after sending
            fs.unlink(resumePath, () => { });

            return res.status(200).json({ message: "Application submitted and emailed!" });
        } catch (error) {
            console.error("❌ Email error:", error);
            return res.status(500).json({ error: "Failed to send email" });
        }
    });
}
