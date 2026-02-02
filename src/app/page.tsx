'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

/* =============================================================================
   ANIMATION CONFIGURATIONS
   Using GPU-accelerated transforms for 60fps performance
   ============================================================================= */

const heroTextVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const heroLineVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

/* =============================================================================
   DATA
   ============================================================================= */

const metrics = [
  {
    value: '25+',
    label: 'Years of Excellence',
    description: 'Delivering infrastructure since 1998',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: '500+',
    label: 'Projects Delivered',
    description: 'Across Eastern India',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    value: '₹2000Cr+',
    label: 'Project Value',
    description: 'Total infrastructure delivered',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: '200+',
    label: 'Expert Engineers',
    description: 'Specialized technical team',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const leadership = [
  {
    name: 'Sourabh Bhaumik',
    role: 'Managing Director',
    description: 'Visionary leader with 20+ years in infrastructure development, driving UDS towards excellence in civil engineering and smart building solutions.',
  },
  {
    name: 'Tamal Chatterjee',
    role: 'Director - Operations',
    description: 'Operations expert ensuring seamless project delivery across all verticals, from conception to commissioning.',
  },
];

const services = [
  {
    title: 'Civil Infrastructure',
    description: 'Roads, bridges, flyovers, and urban development projects built to international standards.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Building Management Systems',
    description: 'Intelligent automation for HVAC, lighting, security, and energy optimization.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'MEP Solutions',
    description: 'Complete mechanical, electrical, and plumbing engineering for modern facilities.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

/* =============================================================================
   HERO IMAGE PLACEHOLDER COMPONENT
   ============================================================================= */

function HeroImagePlaceholder() {
  return (
    /*
     * ==========================================================================
     * HERO IMAGE PLACEHOLDER
     * ==========================================================================
     *
     * AI IMAGE GENERATION PROMPT:
     * "Cinematic shot of a massive concrete bridge construction in Kolkata at
     * golden hour, hyper-realistic, 8k, engineering focus, drone view,
     * confident atmosphere."
     *
     * Image Requirements:
     * - Aspect Ratio: 16:9 (1920x1080 minimum)
     * - Format: WebP with JPEG fallback
     * - File size: < 200KB optimized
     * - Alt text: "UDS Infrastructure bridge construction project in Kolkata"
     *
     * Replace this placeholder with:
     * <Image
     *   src="/images/hero-bridge-construction.webp"
     *   alt="UDS Infrastructure bridge construction project in Kolkata"
     *   fill
     *   priority
     *   className="object-cover"
     * />
     * ==========================================================================
     */
    <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
      {/* Animated gradient overlay for visual interest */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-gradient-to-r from-secondary-500/20 via-transparent to-primary-600/20"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradient-shift 15s ease infinite',
          }}
        />
      </div>

      {/* Engineering grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Placeholder visual - geometric shapes suggesting construction */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute top-1/4 right-1/4 w-96 h-96 border border-white/20 rotate-45"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
          className="absolute bottom-1/4 left-1/3 w-64 h-64 border border-secondary-500/30 rotate-12"
        />
      </div>
    </div>
  );
}

/* =============================================================================
   MAIN COMPONENT
   ============================================================================= */

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <>
      {/* =====================================================================
          HERO SECTION
          Full-screen immersive experience with parallax
          ===================================================================== */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden"
      >
        {/* Background with parallax effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
          }}
        >
          <HeroImagePlaceholder />
        </motion.div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/60 via-primary-900/40 to-primary-950/80" />

        {/* Vignette effect */}
        <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.5)]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Pre-headline badge */}
            <motion.div
              variants={heroLineVariants}
              className="flex justify-center"
            >
              <span className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse" />
                  <span className="text-secondary-400 font-semibold text-sm uppercase tracking-wider">
                    Ultimate Group Company
                  </span>
                </span>
                <span className="w-px h-4 bg-white/20" />
                <span className="text-white/70 text-sm">
                  Est. 1998
                </span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={heroLineVariants}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight"
            >
              Building the Future
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 via-secondary-500 to-secondary-600">
                of Bengal
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={heroLineVariants}
              className="font-display text-xl sm:text-2xl md:text-3xl text-white/90 font-light tracking-wide"
            >
              Precision Infrastructure & Smart Management
            </motion.p>

            {/* Description */}
            <motion.p
              variants={heroLineVariants}
              className="max-w-2xl mx-auto text-lg text-primary-200/90 leading-relaxed"
            >
              From iconic bridges to intelligent buildings, UDS Infrastructure
              delivers engineering excellence that shapes skylines and transforms
              communities across Eastern India.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={heroLineVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg rounded-xl shadow-2xl shadow-secondary-500/25 hover:shadow-secondary-500/40 transition-all duration-500 transform hover:-translate-y-1"
              >
                Explore Our Projects
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg rounded-xl border border-white/20 hover:border-white/40 transition-all duration-500"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Request Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-white/50 text-xs uppercase tracking-[0.3em] font-medium">
              Discover More
            </span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center pt-3"
            >
              <motion.div
                className="w-1.5 h-3 bg-white/70 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* =====================================================================
          ABOUT SECTION - BENTO GRID
          Ultimate Group heritage and leadership
          ===================================================================== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-20"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
              The Ultimate Group
              <span className="text-secondary-500"> Legacy</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-neutral-600 leading-relaxed">
              For over two decades, UDS Infrastructure has been at the forefront of
              Bengal&apos;s infrastructure revolution, delivering projects that stand as
              testaments to engineering excellence and unwavering commitment to quality.
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Metrics Cards - First Row */}
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-neutral-50 hover:bg-primary-800 rounded-2xl p-6 lg:p-8 transition-all duration-500 cursor-default"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center text-primary-600 group-hover:text-secondary-400 transition-all duration-500">
                    {metric.icon}
                  </div>
                </div>
                <div className="font-display text-4xl lg:text-5xl font-bold text-primary-800 group-hover:text-white mb-2 transition-colors duration-500">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-primary-700 group-hover:text-white mb-1 transition-colors duration-500">
                  {metric.label}
                </div>
                <div className="text-sm text-neutral-500 group-hover:text-primary-200 transition-colors duration-500">
                  {metric.description}
                </div>
              </motion.div>
            ))}

            {/* Leadership Card - Spans 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-2 bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl p-8 lg:p-10 text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wider">Leadership</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {leadership.map((leader) => (
                  <div key={leader.name} className="space-y-2">
                    <h4 className="font-display text-2xl font-bold text-white">
                      {leader.name}
                    </h4>
                    <p className="text-secondary-400 font-semibold text-sm uppercase tracking-wider">
                      {leader.role}
                    </p>
                    <p className="text-primary-200 text-sm leading-relaxed">
                      {leader.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Heritage Card - Spans 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="md:col-span-2 bg-neutral-50 rounded-2xl p-8 lg:p-10 relative overflow-hidden"
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary-800 uppercase tracking-wider">Our Heritage</h3>
                </div>

                <p className="text-neutral-600 leading-relaxed mb-6">
                  As a proud member of the Ultimate Group, UDS Infrastructure carries forward
                  a legacy of trust, innovation, and excellence. From our headquarters in
                  Kolkata, we have expanded our footprint across Eastern India, delivering
                  projects that combine engineering precision with sustainable practices.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-primary-700 shadow-sm">
                    ISO 9001:2015
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-primary-700 shadow-sm">
                    ISO 14001:2015
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-primary-700 shadow-sm">
                    ISO 45001:2018
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SERVICES SECTION
          ===================================================================== */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
              Our Expertise
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary-800 mb-4">
              Comprehensive Infrastructure
              <span className="text-secondary-500"> Solutions</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              End-to-end engineering services that meet international standards
              and exceed client expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:border-secondary-200 overflow-hidden"
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary-50 group-hover:bg-white/20 rounded-2xl flex items-center justify-center text-primary-700 group-hover:text-secondary-400 transition-all duration-500 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary-800 group-hover:text-white mb-4 transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 group-hover:text-primary-200 mb-6 leading-relaxed transition-colors duration-500">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 text-secondary-600 group-hover:text-secondary-400 font-semibold transition-all duration-300"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          CTA SECTION
          ===================================================================== */}
      <section className="py-24 lg:py-32 bg-primary-800 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Build Something
              <span className="text-secondary-500"> Extraordinary?</span>
            </h2>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              Partner with Bengal&apos;s leading infrastructure company. Our team of
              expert engineers is ready to transform your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary-500 hover:bg-secondary-600 text-white font-bold text-lg rounded-xl shadow-2xl shadow-secondary-500/30 hover:shadow-secondary-500/50 transition-all duration-500 transform hover:-translate-y-1"
              >
                Start Your Project
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent hover:bg-white/10 text-white font-bold text-lg rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-500"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
