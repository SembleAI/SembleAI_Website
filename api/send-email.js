import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, company, subject, message } = req.body || {};

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({ 
        ok: false, 
        error: 'Missing required fields: firstName, lastName, email, subject, message' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ ok: false, error: 'Invalid email format' });
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return res.status(500).json({ ok: false, error: 'Email service not configured' });
    }

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height:1.6; max-width: 600px;">
        <h2 style="color: #333; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Website Contact</h2>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          <p><strong>Subject:</strong> ${subject}</p>
        </div>
        <div style="background: white; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Message:</h3>
          <div style="white-space: pre-wrap; color: #555;">${message}</div>
        </div>
        <div style="font-size: 12px; color: #666; margin-top: 30px;">
          Sent from Semble AI contact form
        </div>
      </div>
    `;

    const result = await resend.emails.send({
      from: 'Semble AI Contact <noreply@sembleai.com>',
      to: 'ethan@sembleai.com',
      subject: `[SembleAI.com] ${subject}`,
      html,
      reply_to: email,
    });

    if (result?.error) {
      console.error('Resend API error:', result.error);
      return res.status(500).json({ ok: false, error: 'Failed to send email' });
    }

    console.log('Email sent successfully:', result?.data?.id);
    return res.status(200).json({ ok: true, id: result?.data?.id });

  } catch (err) {
    console.error('Email handler error:', err);
    return res.status(500).json({ 
      ok: false, 
      error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error' 
    });
  }
}