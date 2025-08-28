// /api/send-email.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only POST
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  try {
    // Your client sends: firstName, lastName, email, company, subject, message
    const { firstName, lastName, email, company, subject, message } = req.body || {};

    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({ ok: false, error: 'Missing required fields.' });
    }

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height:1.6">
        <h2>New website contact</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <hr/>
        <pre style="white-space:pre-wrap">${message}</pre>
      </div>
    `;

    const result = await resend.emails.send({
      from: 'Semble AI Contact Form <founders@sembleai.com>', // must be a verified domain in Resend
      to: 'founders@sembleai.com',
      subject: `New Contact: ${subject}`,
      html,
      reply_to: email, // Resend supports snake_case reply_to
    });

    if (result?.error) {
      console.error('Resend error:', result.error);
      return res.status(502).json({ ok: false, error: 'Email provider error.' });
    }

    return res.status(200).json({ ok: true, id: result?.data?.id });
  } catch (err) {
    console.error('send-email API error:', err);
    return res.status(500).json({ ok: false, error: 'Internal Server Error' });
  }
}
