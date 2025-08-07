import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Create a transporter using Gmail SMTP
    // Note: In production, you should use environment variables for email credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER ,
        pass: process.env.EMAIL_PASS ,
      },
    })

    // Email to the company
    const mailOptions = {
      from: email,
      to: "metringceo22@gmail.com",
      subject: `METRING Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0b304d, #1d5b8a); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">METRING</h1>
            <p style="color: #afcbe3; margin: 5px 0 0 0;">New Contact Form Submission</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #0b304d; margin-bottom: 20px;">Contact Details</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #5c99c5;">
              <p><strong style="color: #0b304d;">Name:</strong> ${name}</p>
              <p><strong style="color: #0b304d;">Email:</strong> ${email}</p>
              <p><strong style="color: #0b304d;">Subject:</strong> ${subject}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #1d5b8a;">
              <h3 style="color: #0b304d; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #333;">${message}</p>
            </div>
          </div>
          
          <div style="background: #0b304d; padding: 20px; text-align: center;">
            <p style="color: #afcbe3; margin: 0; font-size: 14px;">
              This message was sent through the METRING website contact form.
            </p>
          </div>
        </div>
      `,
    }

    // Auto-reply to the sender
    const autoReplyOptions = {
      from: "metringceo22@gmail.com",
      to: email,
      subject: "Thank you for contacting METRING",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0b304d, #1d5b8a); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">METRING</h1>
            <p style="color: #afcbe3; margin: 5px 0 0 0;">Metropolitan Engineering and Technology Ring</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #0b304d;">Thank you for reaching out!</h2>
            
            <p style="color: #333; line-height: 1.6;">
              Dear ${name},
            </p>
            
            <p style="color: #333; line-height: 1.6;">
              Thank you for your interest in METRING. We have received your message regarding "${subject}" 
              and will get back to you as soon as possible.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #5c99c5;">
              <h3 style="color: #0b304d; margin-top: 0;">What happens next?</h3>
              <ul style="color: #333; line-height: 1.6;">
                <li>Our team will review your inquiry within 24 hours</li>
                <li>We'll respond with detailed information or schedule a consultation</li>
                <li>For urgent matters, feel free to call us at 07066624089</li>
              </ul>
            </div>
            
            <p style="color: #333; line-height: 1.6;">
              Best regards,<br>
              <strong style="color: #0b304d;">Asadu Godswill Chijioke</strong><br>
              Founder, METRING<br>
              <a href="mailto:godswillasadu@gmail.com" style="color: #5c99c5;">godswillasadu@gmail.com</a>
            </p>
          </div>
          
          <div style="background: #0b304d; padding: 20px; text-align: center;">
            <p style="color: #afcbe3; margin: 0; font-size: 14px;">
              Advancing Nigerian engineering and technology through AI-powered solutions.
            </p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(autoReplyOptions)

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
