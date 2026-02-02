'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type FormType = 'general' | 'project';

interface GeneralInquiryData {
  type: 'general';
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ProjectBriefData {
  type: 'project';
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  estimatedBudget: string;
  projectBrief: string;
}

type FormData = GeneralInquiryData | ProjectBriefData;

interface SendEmailResult {
  success: boolean;
  message: string;
}

export async function sendEmail(formData: FormData): Promise<SendEmailResult> {
  try {
    const isProjectBrief = formData.type === 'project';

    // Determine subject line
    const subject = isProjectBrief
      ? `Project Brief Submission: ${(formData as ProjectBriefData).company}`
      : `New UDS Website Inquiry: ${formData.name}`;

    // Build HTML email content
    const htmlContent = isProjectBrief
      ? buildProjectBriefEmail(formData as ProjectBriefData)
      : buildGeneralInquiryEmail(formData as GeneralInquiryData);

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
      message: isProjectBrief
        ? 'Your project brief has been submitted. Our team will review and contact you shortly.'
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

function buildGeneralInquiryEmail(data: GeneralInquiryData): string {
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
        <div style="background: linear-gradient(135deg, #0B2341 0%, #1E4F7D 100%); padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">New Website Inquiry</h1>
          <p style="color: #F97316; margin: 10px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">General Contact Form</p>
        </div>

        <!-- Content -->
        <div style="padding: 30px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e4e4e7;">
                <strong style="color: #0B2341; display: block; margin-bottom: 4px;">Name</strong>
                <span style="color: #3f3f46;">${escapeHtml(data.name)}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e4e4e7;">
                <strong style="color: #0B2341; display: block; margin-bottom: 4px;">Email</strong>
                <a href="mailto:${escapeHtml(data.email)}" style="color: #F97316; text-decoration: none;">${escapeHtml(data.email)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e4e4e7;">
                <strong style="color: #0B2341; display: block; margin-bottom: 4px;">Phone</strong>
                <a href="tel:${escapeHtml(data.phone)}" style="color: #F97316; text-decoration: none;">${escapeHtml(data.phone)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0;">
                <strong style="color: #0B2341; display: block; margin-bottom: 4px;">Message</strong>
                <p style="color: #3f3f46; margin: 0; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
              </td>
            </tr>
          </table>
        </div>

        <!-- Footer -->
        <div style="background-color: #f4f4f5; padding: 20px; text-align: center;">
          <p style="color: #71717a; margin: 0; font-size: 12px;">
            This email was sent from the UDS Infrastructure website contact form.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function buildProjectBriefEmail(data: ProjectBriefData): string {
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
        <div style="background: linear-gradient(135deg, #F97316 0%, #EA580C 100%); padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">Project Brief Submission</h1>
          <p style="color: #ffffff; opacity: 0.9; margin: 10px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">${escapeHtml(data.projectType)}</p>
        </div>

        <!-- Content -->
        <div style="padding: 30px;">
          <!-- Contact Details -->
          <div style="background-color: #f9fafb; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #0B2341; margin: 0 0 15px 0; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0;">
                  <strong style="color: #0B2341;">Name:</strong>
                  <span style="color: #3f3f46; margin-left: 8px;">${escapeHtml(data.name)}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0;">
                  <strong style="color: #0B2341;">Company:</strong>
                  <span style="color: #3f3f46; margin-left: 8px;">${escapeHtml(data.company)}</span>
                </td>
              </tr>
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
            </table>
          </div>

          <!-- Project Details -->
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

          <!-- Project Brief -->
          <div>
            <h3 style="color: #0B2341; margin: 0 0 15px 0; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">Project Brief</h3>
            <div style="background-color: #f9fafb; border-left: 4px solid #F97316; padding: 15px; border-radius: 0 8px 8px 0;">
              <p style="color: #3f3f46; margin: 0; line-height: 1.8; white-space: pre-wrap;">${escapeHtml(data.projectBrief)}</p>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #0B2341; padding: 20px; text-align: center;">
          <p style="color: #ffffff; opacity: 0.7; margin: 0; font-size: 12px;">
            This project brief was submitted through the UDS Infrastructure website.
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
