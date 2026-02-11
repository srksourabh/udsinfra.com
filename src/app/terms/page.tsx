import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | UDS Infrastructure',
  description: 'Terms and conditions for using the UDS Infrastructure website and services.',
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-600 via-secondary-500 to-secondary-400 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Terms of Use
            </h1>
            <p className="text-xl text-orange-50 mb-4">
              Effective Date: February 11, 2026
            </p>
            <p className="text-lg text-orange-100">
              Please read these terms carefully before using our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {/* Acceptance of Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Welcome to UDS Infrastructure Private Limited (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using our website{' '}
                <Link href="/" className="text-secondary-500 hover:text-secondary-600 underline">
                  udsinfra.com
                </Link>
                {' '}(the &quot;Website&quot;), you agree to be bound by these Terms of Use (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our Website.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-4">
                We reserve the right to modify these Terms at any time. Your continued use of the Website following any changes constitutes your acceptance of the revised Terms. The &quot;Effective Date&quot; at the top of this page indicates when these Terms were last updated.
              </p>
            </div>

            {/* Company Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                2. Company Information
              </h2>
              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <p className="text-neutral-800 font-semibold mb-2">Legal Name</p>
                <p className="text-neutral-700 mb-4">UDS Infrastructure Private Limited</p>

                <p className="text-neutral-800 font-semibold mb-2">Parent Company</p>
                <p className="text-neutral-700 mb-4">
                  A unit of{' '}
                  <a
                    href="https://ultimatesolutions.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-500 hover:text-secondary-600 underline"
                  >
                    Ultimate Group
                  </a>
                  {' '}(16+ years of excellence)
                </p>

                <p className="text-neutral-800 font-semibold mb-2">Registered Address</p>
                <p className="text-neutral-700">EC73, Rajdanga Main Road</p>
                <p className="text-neutral-700">Kolkata 700107, West Bengal, India</p>

                <p className="text-neutral-800 font-semibold mb-2 mt-4">Contact Information</p>
                <p className="text-neutral-700">
                  Email:{' '}
                  <a href="mailto:info@udsinfra.com" className="text-secondary-500 hover:text-secondary-600 underline">
                    info@udsinfra.com
                  </a>
                </p>
                <p className="text-neutral-700">
                  Phone: <a href="tel:+913340007520" className="text-secondary-500 hover:text-secondary-600">+91 33 4000 7520</a>
                </p>
              </div>
            </div>

            {/* Services Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                3. Services Overview
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                UDS Infrastructure provides comprehensive infrastructure and facility solutions across 14 specialized service verticals:
              </p>
              <div className="grid md:grid-cols-2 gap-3 mt-4">
                <ul className="list-disc pl-6 text-neutral-700 space-y-1">
                  <li>Building Management Systems (BMS)</li>
                  <li>Civil Infrastructure</li>
                  <li>Electrical Transmission & Distribution</li>
                  <li>Fire Protection Engineering</li>
                  <li>CCTV & Surveillance Systems</li>
                  <li>Access Control Systems</li>
                  <li>Mechanical Erection & T&C</li>
                </ul>
                <ul className="list-disc pl-6 text-neutral-700 space-y-1">
                  <li>MEP (HVAC-AMC)</li>
                  <li>Instrumentation & Control</li>
                  <li>Fleet Management & Logistics</li>
                  <li>Construction Equipment Rentals</li>
                  <li>Medical Equipment Services</li>
                  <li>Facility Management</li>
                  <li>Pest Control Services</li>
                </ul>
              </div>
              <p className="text-neutral-700 leading-relaxed mt-4">
                <strong>Important:</strong> This Website is informational in nature. The information provided on the Website does not constitute a binding contract or quotation. Actual service contracts, terms, pricing, and deliverables will be established through separate written agreements.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                4. Intellectual Property
              </h2>

              <h3 className="text-2xl font-semibold text-primary-700 mb-3 mt-6">
                4.1 Copyright & Ownership
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                All content on this Website, including but not limited to text, graphics, logos, images, videos, software, and compilation, is the exclusive property of UDS Infrastructure Pvt. Ltd., Ultimate Group, or their licensors and is protected by Indian and international copyright laws.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-3">
                <strong>Copyright © 2024-2026 UDS Infrastructure Private Limited. All rights reserved.</strong>
              </p>

              <h3 className="text-2xl font-semibold text-primary-700 mb-3 mt-6">
                4.2 Trademarks
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                &quot;UDS Infrastructure,&quot; &quot;Ultimate Group,&quot; and related logos are trademarks of UDS Infrastructure Pvt. Ltd. and Ultimate Group. Third-party product names, company names, and logos mentioned on this Website are the trademarks or registered trademarks of their respective owners.
              </p>

              <h3 className="text-2xl font-semibold text-primary-700 mb-3 mt-6">
                4.3 Usage Restrictions
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                You may not:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mt-3">
                <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Website without express written permission</li>
                <li>Modify, create derivative works, or reverse engineer any Website content</li>
                <li>Remove or alter any copyright, trademark, or proprietary notices</li>
                <li>Use our trademarks or branding without prior written consent</li>
              </ul>
            </div>

            {/* Use of Website */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                5. Use of Website
              </h2>

              <h3 className="text-2xl font-semibold text-primary-700 mb-3 mt-6">
                5.1 Permitted Uses
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                You may use the Website for lawful purposes, including:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mt-3">
                <li>Browsing and viewing content for personal or business evaluation</li>
                <li>Submitting contact forms and inquiries</li>
                <li>Requesting service information and quotations</li>
                <li>Downloading publicly available materials for legitimate business purposes</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary-700 mb-3 mt-6">
                5.2 Prohibited Activities
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mt-3">
                <li>Use automated systems (bots, scrapers, crawlers) to access or collect data from the Website</li>
                <li>Attempt to gain unauthorized access to our systems, servers, or networks</li>
                <li>Transmit viruses, malware, or other malicious code</li>
                <li>Engage in any activity that disrupts or interferes with the Website&apos;s functionality</li>
                <li>Impersonate any person or entity, or falsely state or misrepresent your affiliation</li>
                <li>Collect or harvest personal information of other users</li>
                <li>Use the Website for any unlawful purpose or in violation of these Terms</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary-700 mb-3 mt-6">
                5.3 Accuracy of Information
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                You represent and warrant that all information you provide through contact forms is accurate, current, and complete. Providing false or misleading information may result in termination of service or legal action.
              </p>
            </div>

            {/* Contact Forms & Communications */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                6. Contact Forms & Communications
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Submission of a contact form or inquiry through our Website:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mt-3">
                <li><strong>Does NOT constitute a binding contract</strong> between you and UDS Infrastructure</li>
                <li>Represents a request for information or quotation only</li>
                <li>Does not guarantee a response within a specific timeframe</li>
                <li>Grants us permission to contact you via email or phone regarding your inquiry</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mt-4">
                We reserve the right to decline any inquiry or business opportunity at our sole discretion.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                7. Limitation of Liability
              </h2>

              <h3 className="text-2xl font-semibold text-primary-700 mb-3 mt-6">
                7.1 No Warranty
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                THIS WEBSITE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-3">
                We do not warrant that:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mt-3">
                <li>The Website will be available at all times or free from errors</li>
                <li>Defects will be corrected promptly</li>
                <li>The Website is free from viruses or other harmful components</li>
                <li>Information on the Website is complete, accurate, or current</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary-700 mb-3 mt-6">
                7.2 Limitation of Damages
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, UDS INFRASTRUCTURE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mt-3">
                <li>Your access to or use of (or inability to access or use) the Website</li>
                <li>Any conduct or content of any third party on the Website</li>
                <li>Any content obtained from the Website</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary-700 mb-3 mt-6">
                7.3 Information Accuracy Disclaimer
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Technical specifications, service descriptions, and other information on the Website are subject to change without notice. While we strive for accuracy, we do not guarantee that all information is current, complete, or error-free.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                8. Indemnification
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless UDS Infrastructure Private Limited, Ultimate Group, their affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including attorney&apos;s fees) arising from:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2 mt-3">
                <li>Your use of the Website</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights, including intellectual property rights</li>
                <li>Any false or misleading information you provide</li>
              </ul>
            </div>

            {/* Governing Law & Jurisdiction */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                9. Governing Law & Jurisdiction
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-4">
                Any legal action or proceeding arising out of or related to these Terms or the Website shall be instituted exclusively in the courts of Kolkata, West Bengal, India. You consent to the personal jurisdiction of such courts and waive any objection to venue.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                10. Dispute Resolution
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                In the event of any dispute, controversy, or claim arising out of or relating to these Terms or the Website, the parties agree to:
              </p>
              <ol className="list-decimal pl-6 text-neutral-700 space-y-3 mt-3">
                <li>
                  <strong>Negotiation:</strong> First attempt to resolve the dispute through good-faith negotiation
                </li>
                <li>
                  <strong>Mediation:</strong> If negotiation fails, engage in mediation before a mutually agreed-upon mediator
                </li>
                <li>
                  <strong>Arbitration:</strong> If mediation is unsuccessful, the dispute shall be resolved through binding arbitration in Kolkata, India, in accordance with the Arbitration and Conciliation Act, 1996
                </li>
              </ol>
              <p className="text-neutral-700 leading-relaxed mt-4">
                The arbitration shall be conducted in English, and the arbitrator&apos;s decision shall be final and binding.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                11. Severability
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it enforceable, or if that is not possible, severed from these Terms. The remaining provisions shall continue in full force and effect.
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                12. Entire Agreement
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                These Terms, together with our{' '}
                <Link href="/privacy-policy" className="text-secondary-500 hover:text-secondary-600 underline">
                  Privacy Policy
                </Link>
                , constitute the entire agreement between you and UDS Infrastructure regarding the use of the Website and supersede any prior agreements, understandings, or representations.
              </p>
            </div>

            {/* Contact for Legal Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                13. Contact for Legal Questions
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="bg-neutral-50 p-6 rounded-lg mt-4 border border-neutral-200">
                <p className="text-neutral-800 font-semibold mb-2">Legal Department</p>
                <p className="text-neutral-700">UDS Infrastructure Private Limited</p>
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

            {/* Acknowledgment */}
            <div className="mb-12 bg-secondary-50 p-6 rounded-lg border-l-4 border-secondary-500">
              <h2 className="text-2xl font-display font-bold text-primary-800 mb-3">
                Acknowledgment
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                BY USING THIS WEBSITE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF USE.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
