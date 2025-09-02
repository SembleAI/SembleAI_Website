import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { from_name, last_name, reply_to, company, subject, message } = req.body;

    // Validate required fields
    if (!from_name || !last_name || !reply_to || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email using your verified domain
    const emailData = {
      from: 'SembleAI Contact Form <founders@sembleai.com>', // Using your verified domain
      subject: `${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            ${subject}
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4F46E5; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${from_name} ${last_name}</p>
            <p><strong>Email:</strong> <a href="mailto:${reply_to}">${reply_to}</a></p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background: white; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
      reply_to: reply_to,
    };

    // Send to founders email (will reach both you and your co-founder)
    const result = await resend.emails.send({
      ...emailData,
      to: 'founders@sembleai.com'
    });

    if (result.error) {
      console.error('Resend API error:', result.error);
      return res.status(400).json({ 
        error: 'Failed to send email', 
        details: result.error.message || result.error 
      });
    }

    console.log('Email sent successfully:', result);
    res.status(200).json({ 
      message: 'Email sent successfully', 
      id: result.data?.id 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send email', 
      details: error.message 
    });
  }
}