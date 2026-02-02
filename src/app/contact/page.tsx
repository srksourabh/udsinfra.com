'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { sendEmail } from '../actions/sendEmail';

type FormType = 'general' | 'project';

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
  const [formType, setFormType] = useState<FormType>('general');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // General Inquiry form state
  const [generalForm, setGeneralForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Project Brief form state
  const [projectForm, setProjectForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    estimatedBudget: '',
    projectBrief: '',
  });

  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    const result = await sendEmail({
      type: 'general',
      ...generalForm,
    });

    setSubmitResult(result);
    setIsSubmitting(false);

    if (result.success) {
      setGeneralForm({ name: '', email: '', phone: '', message: '' });
    }
  };

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    const result = await sendEmail({
      type: 'project',
      ...projectForm,
    });

    setSubmitResult(result);
    setIsSubmitting(false);

    if (result.success) {
      setProjectForm({
        name: '',
        company: '',
        email: '',
        phone: '',
        projectType: '',
        estimatedBudget: '',
        projectBrief: '',
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
            {/* Tab Toggle */}
            <div className="flex border-b border-neutral-200">
              <button
                onClick={() => {
                  setFormType('general');
                  setSubmitResult(null);
                }}
                className={`flex-1 py-4 px-6 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  formType === 'general'
                    ? 'bg-primary-800 text-white'
                    : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  General Inquiry
                </span>
              </button>
              <button
                onClick={() => {
                  setFormType('project');
                  setSubmitResult(null);
                }}
                className={`flex-1 py-4 px-6 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  formType === 'project'
                    ? 'bg-secondary-500 text-white'
                    : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Submit Project Brief
                </span>
              </button>
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

              {/* General Inquiry Form */}
              {formType === 'general' && (
                <motion.form
                  key="general"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleGeneralSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="general-name" className="block text-sm font-semibold text-primary-800 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="general-name"
                        required
                        value={generalForm.name}
                        onChange={(e) => setGeneralForm({ ...generalForm, name: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-0 transition-colors text-neutral-800 placeholder:text-neutral-400"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="general-email" className="block text-sm font-semibold text-primary-800 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="general-email"
                        required
                        value={generalForm.email}
                        onChange={(e) => setGeneralForm({ ...generalForm, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-0 transition-colors text-neutral-800 placeholder:text-neutral-400"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="general-phone" className="block text-sm font-semibold text-primary-800 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="general-phone"
                      required
                      value={generalForm.phone}
                      onChange={(e) => setGeneralForm({ ...generalForm, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-0 transition-colors text-neutral-800 placeholder:text-neutral-400"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="general-message" className="block text-sm font-semibold text-primary-800 mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="general-message"
                      required
                      rows={5}
                      value={generalForm.message}
                      onChange={(e) => setGeneralForm({ ...generalForm, message: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-0 transition-colors text-neutral-800 placeholder:text-neutral-400 resize-none"
                      placeholder="Tell us about your inquiry..."
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
                </motion.form>
              )}

              {/* Project Brief Form */}
              {formType === 'project' && (
                <motion.form
                  key="project"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleProjectSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="project-name" className="block text-sm font-semibold text-primary-800 mb-2">
                        Contact Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="project-name"
                        required
                        value={projectForm.name}
                        onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-secondary-500 focus:ring-0 transition-colors text-neutral-800 placeholder:text-neutral-400"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="project-company" className="block text-sm font-semibold text-primary-800 mb-2">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="project-company"
                        required
                        value={projectForm.company}
                        onChange={(e) => setProjectForm({ ...projectForm, company: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-secondary-500 focus:ring-0 transition-colors text-neutral-800 placeholder:text-neutral-400"
                        placeholder="ABC Developers Pvt Ltd"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label htmlFor="project-email" className="block text-sm font-semibold text-primary-800 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="project-email"
                        required
                        value={projectForm.email}
                        onChange={(e) => setProjectForm({ ...projectForm, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-secondary-500 focus:ring-0 transition-colors text-neutral-800 placeholder:text-neutral-400"
                        placeholder="john@company.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="project-phone" className="block text-sm font-semibold text-primary-800 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="project-phone"
                        required
                        value={projectForm.phone}
                        onChange={(e) => setProjectForm({ ...projectForm, phone: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-secondary-500 focus:ring-0 transition-colors text-neutral-800 placeholder:text-neutral-400"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Project Type */}
                    <div>
                      <label htmlFor="project-type" className="block text-sm font-semibold text-primary-800 mb-2">
                        Project Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="project-type"
                        required
                        value={projectForm.projectType}
                        onChange={(e) => setProjectForm({ ...projectForm, projectType: e.target.value })}
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

                    {/* Budget */}
                    <div>
                      <label htmlFor="project-budget" className="block text-sm font-semibold text-primary-800 mb-2">
                        Estimated Budget <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="project-budget"
                        required
                        value={projectForm.estimatedBudget}
                        onChange={(e) => setProjectForm({ ...projectForm, estimatedBudget: e.target.value })}
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
                  </div>

                  {/* Project Brief */}
                  <div>
                    <label htmlFor="project-brief" className="block text-sm font-semibold text-primary-800 mb-2">
                      Detailed Project Brief <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="project-brief"
                      required
                      rows={6}
                      value={projectForm.projectBrief}
                      onChange={(e) => setProjectForm({ ...projectForm, projectBrief: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-secondary-500 focus:ring-0 transition-colors text-neutral-800 placeholder:text-neutral-400 resize-none"
                      placeholder="Describe your project requirements, timeline, location, and any specific technical specifications..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-secondary-500 hover:bg-secondary-600 disabled:bg-secondary-300 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting Brief...
                      </>
                    ) : (
                      <>
                        Submit Project Brief
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md border border-neutral-200"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary-800 mb-2">Visit Us</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                EC73, Rajdanga Main Road<br />
                Kolkata 700107, India
              </p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-md border border-neutral-200"
            >
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary-800 mb-2">Email Us</h3>
              <a href="mailto:info@udsinfra.com" className="text-secondary-600 hover:text-secondary-700 text-sm font-medium">
                info@udsinfra.com
              </a>
            </motion.div>

            {/* Parent Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md border border-neutral-200"
            >
              <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary-800 mb-2">Parent Company</h3>
              <a
                href="https://www.ultimatesolutions.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-600 hover:text-secondary-700 text-sm font-medium inline-flex items-center gap-1"
              >
                Ultimate Group
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
