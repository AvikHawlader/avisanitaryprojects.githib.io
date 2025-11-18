// api/send-sms.ts
import type { HandlerEvent } from '@netlify/functions';

export const handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, phone, date } = JSON.parse(event.body || '{}');

  const authkey = process.env.MSG91_AUTHKEY!;
  const sender = "AVISAN"; // ← Your approved Sender ID

  // Change these two numbers
  const ownerNumber = "9330014377";     // ← Your number
  const managerNumber = "8017614312"; // ← Manager's number

  const teamMessage = encodeURIComponent(
    `NEW BOOKING!\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nCall now!`
  );

  const customerMessage = encodeURIComponent(
    `Hi ${name}! Your consultation is booked for ${date}. We'll call you soon. Thank you! - AVI SANITARY Projects`
  );

  try {
    // SMS to Owner
    await fetch(`https://api.msg91.com/api/v5/flow/?template_id=YOUR_TEMPLATE_ID&sender=${sender}&mobiles=${ownerNumber}&VAR1=${name}&VAR2=${phone}&VAR3=${date}&authkey=${authkey}`, { method: "POST" });

    // SMS to Manager
    await fetch(`https://api.msg91.com/api/v5/flow/?template_id=YOUR_TEMPLATE_ID&sender=${sender}&mobiles=${managerNumber}&VAR1=${name}&VAR2=${phone}&VAR3=${date}&authkey=${authkey}`, { method: "POST" });

    // SMS to Customer
    await fetch(`https://api.msg91.com/api/v5/flow/?template_id=YOUR_TEMPLATE_ID&sender=${sender}&mobiles=${phone}&message=${customerMessage}&authkey=${authkey}`, { method: "POST" });

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: "SMS failed" }) };
  }
};
