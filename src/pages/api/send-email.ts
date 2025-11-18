import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, phone, date } = req.body;

  try {
    await resend.emails.send({
      from: 'AVI SANITARY Projects <avikhawlader2002@gmail.com>',
      to: [
        'avikhawlader2002@gmail.com',           // ← Your email
        'avikhawlader123@gmail.com',        // ← Manager's email
      ],
      subject: `New Booking: ${name} - ${date}`,
      html: `
        <h2>New Design Consultation Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <br>
        <p>Call them to confirm the slot!</p>
        <p>— AVI SANITARY Projects</p>
      `,
    });

    // Optional: Auto-reply to customer
    await resend.emails.send({
      from: 'AVI SANITARY Projects <avikhawlader2002@gmail.com>',
      to: `${phone}@example.com`, // Dummy — we'll use WhatsApp fallback
      subject: 'Your Appointment is Booked!',
      html: `Hi ${name},<br><br>Thank you! Your consultation is booked for <strong>${date}</strong>.<br>We will call you soon to confirm.<br><br>Team AVI SANITARY Projects`,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
}
