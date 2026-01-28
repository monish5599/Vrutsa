import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

/* ================= EMAIL SETUP ================= */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ================= TEST ROUTE ================= */
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

/* ================= FORM SUBMIT ================= */
app.post("/submit", async (req, res) => {
  try {
    const {
      type,
      fullName,
      phone,
      email,
      country,
      category,
      timeline,
      message,
      companyName,
      industry,
      budget,
    } = req.body;

    // basic validation
    if (!type || !fullName || !email) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    /* ===== SAVE TO DATABASE ===== */
    const saved = await prisma.contact.create({
      data: {
        type,
        fullName,
        phone: phone || null,
        email,
        country: country || null,
        category: category || null,
        timeline: timeline || null,
        message: message || null,
        companyName: companyName || null,
        industry: industry || null,
        budget: budget || null,
      },
    });

    /* ===== EMAIL TO ADMIN ===== */
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "📩 New Contact Form Submission",
      text: `
Type: ${type}
Name: ${fullName}
Email: ${email}
Phone: ${phone || "-"}
Country: ${country || "-"}
Category: ${category || "-"}
Timeline: ${timeline || "-"}
Company: ${companyName || "-"}
Industry: ${industry || "-"}
Budget: ${budget || "-"}
Message: ${message || "-"}
`,
    });

    /* ===== EMAIL TO USER ===== */
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "✅ We received your request",
      text: `
Hi ${fullName},

Thanks for contacting us.
We have received your request and our team will get back to you shortly.

Regards,
Team
`,
    });

    res.json({
      success: true,
      message: "Form submitted successfully ✅",
      data: saved,
    });
  } catch (error) {
    console.error("Submit error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/* ================= ADMIN VIEW ================= */
app.get("/admin/contacts", async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
