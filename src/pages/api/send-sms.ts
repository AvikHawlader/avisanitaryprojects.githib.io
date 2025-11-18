import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, phone, date } = req.body;

  // CHANGE THESE 10-DIGIT NUMBERS
  const ownerNumber   = "9330014377";     // Your number
  const managerNumber = "8017614312";     // Manager number

  const authkey = process.env.MSG91_AUTHKEY;  // Your MSG91 auth key
  const sender  = "AVISAN";                   // Your approved sender ID

  const messageToTeam = encodeURIComponent(
    `NEW BOOKING!\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nConfirm ASAP!`
  );

  const messageToCustomer = encodeURIComponent(
    `Hi ${name}!\nYour consultation is booked for ${date}.\nWe'll call you soon.\nThank you!\nAVI SANITARY Projects`
  );

  try {
    // SMS to Owner
    await fetch(`https://api.msg91.com/api/v5/flow/?template_id=YOUR_TEMPLATE_ID&sender=${sender}&mobiles=${ownerNumber}&VAR1=${name}&VAR2=${phone}&VAR3=${date}&authkey=${authkey}`, { method: "POST" });

    // SMS to Manager
    await fetch(`https://api.msg91.com/api/v5/flow/?template_id=YOUR_TEMPLATE_ID&sender=${sender}&mobiles=${managerNumber}&VAR1=${name}&VAR2=${phone}&VAR3=${date}&authkey=${authkey}`, { method: "POST" });

    // SMS to Customer
    await fetch(`https://api.msg91.com/api/v5/flow/?template_id=YOUR_TEMPLATE_ID&sender=${sender}&mobiles=${phone}&authkey=${authkey}&message=${messageToCustomer}`, { method: "POST" });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "SMS failed" });
  }
}
