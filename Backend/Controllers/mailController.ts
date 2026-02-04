import dotenv from "dotenv"
dotenv.config()

import { Resend } from "resend"
import { Request, Response } from "express"

const resend = new Resend(process.env.RESEND_API_KEY as string)

type SendEmailParams = {
  name: string
  email: string
  subject: string
  message: string
}

export const sendEmail = async (
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<void> => {
  await resend.emails.send({
    from: "NeuroDocs <onboarding@resend.dev>",
    to: process.env.TO_EMAIL as string,
    subject: "New message from NeuroDocs",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Support Request</title>
  <style>
    body {
      background-color: #0b0b0b;
      font-family: Arial, Helvetica, sans-serif;
      color: #e5e5e5;
      padding: 30px;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background: #111111;
      border: 1px solid #262626;
      border-radius: 12px;
      padding: 24px;
    }
    h2 {
      color: #ffffff;
      margin-bottom: 12px;
    }
    p {
      color: #b5b5b5;
      line-height: 1.6;
      font-size: 14px;
    }
    .label {
      color: #8a8a8a;
      font-size: 13px;
      margin-top: 16px;
    }
    .value {
      color: #ffffff;
      margin-top: 4px;
      font-size: 14px;
    }
    .footer {
      margin-top: 24px;
      font-size: 12px;
      color: #777777;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>New Support Request</h2>
    <p>A new support request has been submitted through the NeuroDocs Help Center.</p>

    <div class="label">Name</div>
    <div class="value">${name}</div>

    <div class="label">Email</div>
    <div class="value">${email}</div>

    <div class="label">Subject</div>
    <div class="value">${subject}</div>

    <div class="label">Message</div>
    <div class="value">${message}</div>

    <div class="footer">
      NeuroDocs Support System
    </div>
  </div>
</body>
</html>
`
  })
}

export const sendMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, email, subject, message } = req.body as SendEmailParams

  try {
    await sendEmail(name, email, subject, message)
    res.json({
      success: true,
      message: "Sent Successfully"
    })
  } catch (error) {
    const err = error as Error
    console.log(err.message)
    res.json({
      success: false,
      message: "Failed"
    })
  }
}
