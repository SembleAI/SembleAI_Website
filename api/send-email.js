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

    // Send email to both cofounders (individual emails for better deliverability)
    const emailData = {
      from: 'Cadence Contact Form <onboarding@resend.dev>', // Using Resend's verified domain temporarily
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New Contact Form Submission
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
          
          <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              This email was sent from the Cadence website contact form.
              Reply directly to this email to respond to ${from_name}.
            </p>
          </div>
        </div>
      `,
      reply_to: reply_to,
    };

    // Send to both email addresses individually for better deliverability
    const recipients = ['founders@cadence-systems.com'];
    const emailPromises = recipients.map(email => 
      resend.emails.send({
        ...emailData,
        to: email
      })
    );

    const results = await Promise.all(emailPromises);
    
    console.log('Emails sent successfully:', results);
    res.status(200).json({ 
      message: 'Emails sent successfully', 
      results: results.map(r => ({ id: r.data?.id, error: r.error }))
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
