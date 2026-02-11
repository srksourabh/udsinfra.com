import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | UDS Infrastructure',
  description: 'UDS Infrastructure privacy policy explaining how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-100 mb-4">
              Last Updated: February 11, 2026
            </p>
            <p className="text-lg text-primary-200">
              UDS Infrastructure Pvt. Ltd. is committed to protecting your privacy and personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                1. Introduction & Scope
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                UDS Infrastructure Private Limited (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a unit of Ultimate Group, operates the website{' '}
                <Link href="/" className="text-secondary-500 hover:text-secondary-600 underline">
                  udsinfra.com
                </Link>
                {' '}(the &quot;Website&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Website and submit information through our contact forms.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-4">
                This policy applies to all visitors, users, and others who access or use our Website. By using the Website, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-2xl font-semibold text-primary-700 mb-3 mt-6">
                2.1 Personal Information You Provide
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                When you submit an inquiry through our contact form, we collect the following personal information:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mt-3">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name (optional)</li>
                <li>Inquiry type and message content</li>
                <li>Project details, type, and estimated budget (for project quote requests)</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary-700 mb-3 mt-6">
                2.2 Automatically Collected Information
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                When you visit our Website, we may automatically collect certain technical information, including:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mt-3">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages visited and time spent on pages</li>
                <li>Device information</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mt-4">
                <em>Note:</em> We currently do not use cookies or tracking technologies. If this changes in the future, we will update this policy accordingly.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mt-3">
                <li><strong>Process Inquiries:</strong> To respond to your contact form submissions, questions, and service requests</li>
                <li><strong>Business Communications:</strong> To send project proposals, quotations, and service-related information</li>
                <li><strong>Service Delivery:</strong> To communicate about our 14 service verticals (Civil Infrastructure, BMS, Electrical T&D, Fire Protection, CCTV, Access Control, Mechanical Erection, MEP HVAC, Instrumentation & Control, Fleet Management, Equipment Rentals, Medical Equipment, Facility Management, and Pest Control)</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                <li><strong>Website Improvement:</strong> To analyze usage patterns and improve our Website functionality</li>
              </ul>
            </div>

            {/* Legal Basis */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                4. Legal Basis for Processing (GDPR & DPDP Act 2023)
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                We process your personal data based on the following legal grounds:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mt-3">
                <li><strong>Consent:</strong> By submitting a contact form, you provide explicit consent for us to process your personal information</li>
                <li><strong>Legitimate Business Interest:</strong> Processing is necessary for our legitimate interests in responding to business inquiries and providing requested services</li>
                <li><strong>Contract Fulfillment:</strong> Processing may be necessary for entering into or performing a contract with you</li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                5. Data Sharing & Third Parties
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>

              <h3 className="text-2xl font-semibold text-primary-700 mb-3 mt-6">
                5.1 Service Providers
              </h3>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mt-3">
                <li><strong>Email Service Provider (Resend):</strong> We use Resend API to deliver contact form submissions to our business email</li>
                <li><strong>Hosting Services:</strong> Our Website is hosted on infrastructure providers that may process your data</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary-700 mb-3 mt-6">
                5.2 Internal Sharing
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Contact form submissions are sent to:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mt-3">
                <li><strong>Primary:</strong> info@udsinfra.com</li>
                <li><strong>CC (for project briefs):</strong> Director at sourabh.bhaumik@ultimatesolutions.in</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary-700 mb-3 mt-6">
                5.3 Legal Requirements
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                We may disclose your information if required by law, court order, or governmental authority.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                6. Data Retention
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Email records are retained according to our business requirements and applicable regulations.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-4">
                You have the right to request deletion of your personal data at any time (subject to legal obligations).
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                7. Your Rights
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Under GDPR and the Digital Personal Data Protection Act 2023 (India), you have the following rights:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mt-3">
                <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request deletion of your personal data</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another organization</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent for data processing at any time</li>
                <li><strong>Right to Object:</strong> Object to processing of your personal data for specific purposes</li>
                <li><strong>Right to Restriction:</strong> Request restriction of processing under certain conditions</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:info@udsinfra.com" className="text-secondary-500 hover:text-secondary-600 underline">
                  info@udsinfra.com
                </a>
                .
              </p>
            </div>

            {/* Security Measures */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                8. Security Measures
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mt-3">
                <li>Industry-standard HTTPS encryption for all data transmission</li>
                <li>Secure server infrastructure with access controls</li>
                <li>Limited employee access to personal data on a need-to-know basis</li>
                <li>Regular security assessments and updates</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                9. International Data Transfers
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Your data is primarily processed in India. However, some of our service providers (such as email delivery services and hosting providers) may be located outside India. When we transfer data internationally, we ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                10. Contact Information
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-neutral-50 p-6 rounded-lg mt-4 border border-neutral-200">
                <p className="text-neutral-800 font-semibold mb-2">UDS Infrastructure Private Limited</p>
                <p className="text-neutral-700">EC73, Rajdanga Main Road</p>
                <p className="text-neutral-700">Kolkata 700107, West Bengal, India</p>
                <p className="text-neutral-700 mt-3">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@udsinfra.com" className="text-secondary-500 hover:text-secondary-600 underline">
                    info@udsinfra.com
                  </a>
                </p>
                <p className="text-neutral-700">
                  <strong>Phone:</strong> <a href="tel:+913340007520" className="text-secondary-500 hover:text-secondary-600">+91 33 4000 7520</a>
                </p>
              </div>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated policy on this page. We will update the &quot;Last Updated&quot; date at the top of this policy.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-4">
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                12. Governing Law
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                This Privacy Policy is governed by and construed in accordance with the laws of India. Any disputes relating to this policy shall be subject to the exclusive jurisdiction of the courts of Kolkata, West Bengal, India.
              </p>
            </div>

            {/* Consent */}
            <div className="mb-12 bg-secondary-50 p-6 rounded-lg border-l-4 border-secondary-500">
              <h2 className="text-2xl font-display font-bold text-primary-800 mb-3">
                Your Consent
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                By using our Website and submitting your personal information through our contact forms, you consent to the collection, use, and processing of your information as described in this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
