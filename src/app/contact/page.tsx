'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { sendEmail } from '../actions/sendEmail';

const inquiryTypes = [
  'General Inquiry',
  'Project Quote Request',
  'Service Information',
  'Partnership Opportunity',
];

const projectTypes = [
  'Civil Construction',
  'Infrastructure',
  'Building Management Systems (BMS)',
  'Fire Safety & Suppression',
  'CCTV & Surveillance',
  'Access Control',
  'Multiple Services',
];

const budgetRanges = [
  'Under ₹50 Lakhs',
  '₹50 Lakhs - ₹2 Crores',
  '₹2 Crores - ₹10 Crores',
  '₹10 Crores - ₹50 Crores',
  'Above ₹50 Crores',
  'To Be Discussed',
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    projectType: '',
    estimatedBudget: '',
    message: '',
  });

  const showProjectFields = formData.inquiryType === 'Project Quote Request';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    const result = await sendEmail({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company || undefined,
      inquiryType: formData.inquiryType as 'General Inquiry' | 'Project Quote Request' | 'Service Information' | 'Partnership Opportunity',
      projectType: formData.projectType || undefined,
      estimatedBudget: formData.estimatedBudget || undefined,
      message: formData.message,
    });

    setSubmitResult(result);
    setIsSubmitting(false);

    if (result.success) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        projectType: '',
        estimatedBudget: '',
        message: '',
      });
    }
  };

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-secondary-400 text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let&apos;s Build
              <span className="text-secondary-500"> Together</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-primary-100/80 leading-relaxed">
              Whether you have a project in mind or just want to explore possibilities,
              our engineering team is ready to discuss your infrastructure needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-200"
          >
            {/* Form Header */}
            <div className="bg-gradient-to-r from-primary-800 to-primary-900 p-6 text-center">
              <h2 className="text-2xl font-display font-bold text-white mb-2">
                Contact Us
              </h2>
              <p className="text-primary-100 text-sm">
                Fill out the form below and we&apos;ll get back to you shortly
              </p>
            </div>

            {/* Form Content */}
            <div className="p-8 lg:p-10">
              {/* Success/Error Message */}
              {submitResult && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg border ${
                    submitResult.success
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                      : 'bg-red-50 border-red-200 text-red-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {submitResult.success ? (
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <p className="font-medium">{submitResult.message}</p>
                  </div>
                </motion.div>
              )}

              {/* Unified Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-primary-800 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-0 transition-colors text-neutral-800 placeholder:text-neutral-400"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-primary-800 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-0 transition-colors text-neutral-800 placeholder:text-neutral-400"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                {/* Row 2: Phone and Company */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-primary-800 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-0 transition-colors text-neutral-800 placeholder:text-neutral-400"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-primary-800 mb-2">
                      Company Name <span className="text-neutral-500 text-xs">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-0 transition-colors text-neutral-800 placeholder:text-neutral-400"
                      placeholder="ABC Developers Pvt Ltd"
                    />
                  </div>
                </div>

                {/* Row 3: Inquiry Type */}
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-primary-800 mb-2">
                    Inquiry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-0 transition-colors text-neutral-800 bg-white"
                  >
                    <option value="">Select inquiry type</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 4: Project Type and Budget (Conditional) */}
                {showProjectFields && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold text-primary-800 mb-2">
                        Project Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="projectType"
                        required={showProjectFields}
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-secondary-500 focus:ring-0 transition-colors text-neutral-800 bg-white"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="estimatedBudget" className="block text-sm font-semibold text-primary-800 mb-2">
                        Estimated Budget <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="estimatedBudget"
                        required={showProjectFields}
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-secondary-500 focus:ring-0 transition-colors text-neutral-800 bg-white"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* Row 5: Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary-800 mb-2">
                    Your Message / Project Brief <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-0 transition-colors text-neutral-800 placeholder:text-neutral-400 resize-none"
                    placeholder="Tell us about your inquiry or project requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary-800 hover:bg-primary-900 disabled:bg-primary-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info and Map */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Contact Information Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-neutral-200"
            >
              <h3 className="text-2xl font-display font-bold text-primary-800 mb-6">
                Visit Our Office
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Address</p>
                    <p className="text-lg text-neutral-800 font-medium leading-relaxed">
                      EC73, Rajdanga Main Road<br />
                      Kolkata 700107<br />
                      West Bengal, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+913340007520" className="text-lg text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                      +91 33 4000 7520
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:info@udsinfra.com" className="text-lg text-secondary-600 hover:text-secondary-700 font-medium transition-colors">
                      info@udsinfra.com
                    </a>
                  </div>
                </div>

                {/* Parent Company */}
                <div className="flex items-start gap-4 pt-4 border-t border-neutral-200">
                  <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Parent Company</p>
                    <a
                      href="https://www.ultimatesolutions.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-secondary-600 hover:text-secondary-700 font-medium inline-flex items-center gap-2 transition-colors"
                    >
                      Ultimate Group
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <p className="text-sm text-neutral-600 mt-1">16+ years of excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200 h-[500px] md:h-auto"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.1571234567890!2d88.40134!3d22.51306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMwJzQ3LjAiTiA4OMKwMjQnMDQuOCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="UDS Infrastructure Office Location - EC73 Rajdanga Main Road, Kolkata"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
