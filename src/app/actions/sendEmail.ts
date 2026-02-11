'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface UnifiedFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  inquiryType: 'General Inquiry' | 'Project Quote Request' | 'Service Information' | 'Partnership Opportunity';
  projectType?: string;
  estimatedBudget?: string;
  message: string;
}

interface SendEmailResult {
  success: boolean;
  message: string;
}

export async function sendEmail(formData: UnifiedFormData): Promise<SendEmailResult> {
  try {
    const isProjectQuote = formData.inquiryType === 'Project Quote Request';

    // Determine subject line
    const subject = isProjectQuote
      ? `Project Quote Request: ${formData.company || formData.name}`
      : `New Website Inquiry (${formData.inquiryType}): ${formData.name}`;

    // Build HTML email content
    const htmlContent = buildUnifiedEmail(formData);

    const { error } = await resend.emails.send({
      from: 'UDS Infrastructure <noreply@udsinfra.com>',
      to: ['info@udsinfra.com'],
      cc: ['sourabh.bhaumik@ultimatesolutions.in'],
      replyTo: formData.email,
      subject,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        success: false,
        message: 'Failed to send email. Please try again later.',
      };
    }

    return {
      success: true,
      message: isProjectQuote
        ? 'Your project quote request has been submitted. Our team will review and contact you shortly.'
        : 'Thank you for your inquiry. We will get back to you soon.',
    };
  } catch (error) {
    console.error('Email send error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}

function buildUnifiedEmail(data: UnifiedFormData): string {
  const isProjectQuote = data.inquiryType === 'Project Quote Request';
  const headerGradient = isProjectQuote
    ? 'background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);'
    : 'background: linear-gradient(135deg, #0B2341 0%, #1E4F7D 100%);';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5; margin: 0; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <!-- Header -->
        <div style="${headerGradient} padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">New Website ${data.inquiryType}</h1>
          <p style="color: ${isProjectQuote ? '#ffffff' : '#F97316'}; ${isProjectQuote ? 'opacity: 0.9;' : ''} margin: 10px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">${escapeHtml(data.inquiryType)}</p>
        </div>

        <!-- Content -->
        <div style="padding: 30px;">
          <!-- Contact Details -->
          <div style="background-color: #f9fafb; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #0B2341; margin: 0 0 15px 0; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0;">
                  <strong style="color: #0B2341;">Name:</strong>
                  <span style="color: #3f3f46; margin-left: 8px;">${escapeHtml(data.name)}</span>
                </td>
              </tr>
              ${data.company ? `
              <tr>
                <td style="padding: 8px 0;">
                  <strong style="color: #0B2341;">Company:</strong>
                  <span style="color: #3f3f46; margin-left: 8px;">${escapeHtml(data.company)}</span>
                </td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0;">
                  <strong style="color: #0B2341;">Email:</strong>
                  <a href="mailto:${escapeHtml(data.email)}" style="color: #F97316; text-decoration: none; margin-left: 8px;">${escapeHtml(data.email)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0;">
                  <strong style="color: #0B2341;">Phone:</strong>
                  <a href="tel:${escapeHtml(data.phone)}" style="color: #F97316; text-decoration: none; margin-left: 8px;">${escapeHtml(data.phone)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0;">
                  <strong style="color: #0B2341;">Inquiry Type:</strong>
                  <span style="color: #3f3f46; margin-left: 8px;">${escapeHtml(data.inquiryType)}</span>
                </td>
              </tr>
            </table>
          </div>

          <!-- Project Details (conditional) -->
          ${data.projectType && data.estimatedBudget ? `
          <div style="background-color: #fef3c7; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #0B2341; margin: 0 0 15px 0; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">Project Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0;">
                  <strong style="color: #0B2341;">Project Type:</strong>
                  <span style="color: #3f3f46; margin-left: 8px;">${escapeHtml(data.projectType)}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0;">
                  <strong style="color: #0B2341;">Estimated Budget:</strong>
                  <span style="color: #3f3f46; margin-left: 8px;">${escapeHtml(data.estimatedBudget)}</span>
                </td>
              </tr>
            </table>
          </div>
          ` : ''}

          <!-- Message -->
          <div>
            <h3 style="color: #0B2341; margin: 0 0 15px 0; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">Message</h3>
            <div style="background-color: #f9fafb; border-left: 4px solid #F97316; padding: 15px; border-radius: 0 8px 8px 0;">
              <p style="color: #3f3f46; margin: 0; line-height: 1.8; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: ${isProjectQuote ? '#0B2341' : '#f4f4f5'}; padding: 20px; text-align: center;">
          <p style="color: ${isProjectQuote ? '#ffffff' : '#71717a'}; ${isProjectQuote ? 'opacity: 0.7;' : ''} margin: 0; font-size: 12px;">
            This ${data.inquiryType.toLowerCase()} was submitted through the UDS Infrastructure website contact form.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
