'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
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

/* =============================================================================
   DATA
   ============================================================================= */

const metrics = [
  {
    value: '16+',
    label: 'Years Group Heritage',
    description: 'Backed by Ultimate Group stability',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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

/* =============================================================================
   EXPERTISE DATA - BUSINESS ARTICLE STYLE
   Premium content rivaling Siemens/Honeywell presentation
   ============================================================================= */

const expertiseAreas = [
  /*
   * ==========================================================================
   * CIVIL INFRASTRUCTURE
   * ==========================================================================
   *
   * AI IMAGE GENERATION PROMPT:
   * "Low angle shot of steel girders and concrete pillars, construction site
   * in India, blue sky, safety gear, 8k resolution, architectural photography."
   *
   * Image Requirements:
   * - Aspect Ratio: 16:9 (800x450 minimum)
   * - Format: WebP with JPEG fallback
   * - Alt text: "Steel girders and concrete pillars at UDS construction site"
   * ==========================================================================
   */
  {
    id: 'civil',
    title: 'Civil Infrastructure',
    subtitle: 'Heavy Engineering & Structural Excellence',
    description: `Our Civil Infrastructure division delivers load-bearing structures engineered to withstand generations. From reinforced concrete bridges spanning the Hooghly to multi-lane flyovers reducing Kolkata's congestion, we apply rigorous structural analysis and material science to every project.`,
    longDescription: `Each structure undergoes finite element analysis (FEA) and adheres to IRC, IS, and AASHTO specifications. Our in-house geotechnical team ensures foundation integrity through comprehensive soil investigation and pile load testing protocols.`,
    stats: [
      { value: '150+', label: 'Bridges & Flyovers' },
      { value: '2,500km', label: 'Road Networks' },
      { value: '99.7%', label: 'Structural Compliance' },
    ],
    capabilities: [
      'Reinforced Concrete Structures',
      'Pre-stressed Bridge Girders',
      'Urban Flyover Systems',
      'Highway & Expressway Construction',
      'Foundation Engineering',
      'Quality Control & Testing',
    ],
    accentColor: 'from-amber-500 to-orange-600',
    bgPattern: 'civil',
  },
  /*
   * ==========================================================================
   * BUILDING MANAGEMENT SYSTEMS (BMS)
   * ==========================================================================
   *
   * AI IMAGE GENERATION PROMPT:
   * "Close up of a modern digital dashboard displaying building metrics, blue
   * glowing interface, depth of field, high tech style, server room background."
   *
   * Image Requirements:
   * - Aspect Ratio: 16:9 (800x450 minimum)
   * - Format: WebP with JPEG fallback
   * - Alt text: "Modern BMS digital dashboard interface"
   * ==========================================================================
   */
  {
    id: 'bms',
    title: 'Building Management Systems',
    subtitle: 'Intelligent Automation & Control',
    description: `Transform any structure into a responsive, intelligent environment. Our BMS solutions integrate HVAC optimization, lighting control, access management, and fire safety into a unified command interface—delivering measurable energy savings and operational efficiency.`,
    longDescription: `Leveraging BACnet, Modbus, and KNX protocols, we architect systems that communicate seamlessly across subsystems. Real-time analytics dashboards provide facility managers with actionable insights, predictive maintenance alerts, and compliance reporting.`,
    stats: [
      { value: '40%', label: 'Energy Reduction' },
      { value: '200+', label: 'Buildings Automated' },
      { value: '24/7', label: 'Remote Monitoring' },
    ],
    capabilities: [
      'HVAC Automation & Optimization',
      'Integrated Fire Alarm Systems',
      'CCTV & Access Control',
      'Energy Metering & Analytics',
      'Lighting Control Systems',
      'Central Command Centers',
    ],
    accentColor: 'from-cyan-500 to-blue-600',
    bgPattern: 'bms',
  },
  /*
   * ==========================================================================
   * MEP SERVICES
   * ==========================================================================
   *
   * AI IMAGE GENERATION PROMPT:
   * "Industrial mechanical pipes and electrical wiring organized neatly in a
   * clean server room, bright lighting, professional engineering photography."
   *
   * Image Requirements:
   * - Aspect Ratio: 16:9 (800x450 minimum)
   * - Format: WebP with JPEG fallback
   * - Alt text: "Organized mechanical and electrical systems installation"
   * ==========================================================================
   */
  {
    id: 'mep',
    title: 'MEP Engineering',
    subtitle: 'Mechanical, Electrical & Plumbing Systems',
    description: `The invisible backbone of modern facilities. Our MEP division designs and installs the critical systems that keep buildings operational—from high-voltage electrical distribution and industrial HVAC to sanitary networks and fire suppression infrastructure.`,
    longDescription: `Every installation follows ASHRAE, NFPA, and NBC guidelines with meticulous coordination through BIM clash detection. Our commissioning protocols ensure systems perform at design specifications from day one, with comprehensive O&M documentation for facility teams.`,
    stats: [
      { value: '5M+', label: 'Sq.ft. MEP Installed' },
      { value: '100%', label: 'Code Compliance' },
      { value: '15+', label: 'Industrial Facilities' },
    ],
    capabilities: [
      'HT/LT Electrical Distribution',
      'Industrial HVAC Systems',
      'Plumbing & Drainage Networks',
      'Fire Fighting & Suppression',
      'DG & UPS Backup Systems',
      'BIM Coordination & Clash Detection',
    ],
    accentColor: 'from-emerald-500 to-teal-600',
    bgPattern: 'mep',
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
                    A unit of Ultimate Group
                  </span>
                </span>
                <span className="w-px h-4 bg-white/20" />
                <span className="text-white/70 text-sm">
                  16+ Years Group Heritage
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
                of India
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
              New Energy,
              <span className="text-secondary-500"> Proven Foundation</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-neutral-600 leading-relaxed">
              UDS Infrastructure is a fresh venture backed by Ultimate Group&apos;s 16+ years
              of proven excellence. We combine startup agility with enterprise-grade
              engineering capabilities to deliver infrastructure projects across India.
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

            {/* Group Foundation Card - Spans 2 columns */}
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
                  <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary-800 uppercase tracking-wider">Built on Trust</h3>
                </div>

                <p className="text-neutral-600 leading-relaxed mb-6">
                  As a unit of the Ultimate Group, UDS Infrastructure combines fresh entrepreneurial
                  energy with 16+ years of established trust. Operating from Kolkata, we bring
                  modern, tech-forward approaches to civil infrastructure, BMS, and MEP—backed
                  by enterprise-grade processes and certifications.
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
          OUR EXPERTISE SECTION - BUSINESS ARTICLE STYLE
          Premium presentation rivaling Siemens/Honeywell
          ===================================================================== */}
      <section className="py-24 lg:py-32 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
              Core Verticals
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
              Our Engineering
              <span className="text-secondary-500"> Expertise</span>
            </h2>
            <p className="text-neutral-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Specialized engineering across Civil Infrastructure, Building Automation,
              and MEP Systems—each discipline delivered with precision and backed
              by Ultimate Group&apos;s proven methodology for complex projects.
            </p>
          </motion.div>

          {/* Expertise Cards - Business Article Style */}
          <div className="space-y-24">
            {expertiseAreas.map((expertise, index) => (
              <motion.article
                key={expertise.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`relative ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Placeholder Card */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
                      {/* Placeholder with gradient and pattern */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${expertise.accentColor}`}>
                        {/* Tech grid overlay for BMS */}
                        {expertise.id === 'bms' && (
                          <div className="absolute inset-0">
                            <div
                              className="absolute inset-0 opacity-20"
                              style={{
                                backgroundImage: `
                                  radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)
                                `,
                                backgroundSize: '24px 24px',
                              }}
                            />
                            {/* Simulated dashboard elements */}
                            <div className="absolute inset-8 border border-white/20 rounded-lg">
                              <div className="absolute top-4 left-4 right-4 h-2 bg-white/20 rounded" />
                              <div className="absolute top-10 left-4 w-1/3 h-24 bg-white/10 rounded" />
                              <div className="absolute top-10 right-4 w-1/2 h-24 bg-white/10 rounded" />
                              <div className="absolute bottom-4 left-4 right-4 h-16 bg-white/10 rounded flex items-center justify-around px-4">
                                {[...Array(5)].map((_, i) => (
                                  <div key={i} className="w-8 h-8 bg-white/20 rounded-full" />
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                        {/* Construction pattern for Civil */}
                        {expertise.id === 'civil' && (
                          <div className="absolute inset-0">
                            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                              <line x1="0" y1="100" x2="50" y2="0" stroke="white" strokeWidth="0.5" />
                              <line x1="30" y1="100" x2="80" y2="0" stroke="white" strokeWidth="0.5" />
                              <line x1="60" y1="100" x2="100" y2="20" stroke="white" strokeWidth="0.5" />
                              <rect x="20" y="60" width="60" height="40" fill="none" stroke="white" strokeWidth="0.5" />
                            </svg>
                            {/* Girder shapes */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
                          </div>
                        )}
                        {/* Pipe pattern for MEP */}
                        {expertise.id === 'mep' && (
                          <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute inset-0 opacity-20">
                              {[...Array(6)].map((_, i) => (
                                <div
                                  key={i}
                                  className="absolute h-3 bg-white/40 rounded-full"
                                  style={{
                                    top: `${15 + i * 15}%`,
                                    left: i % 2 === 0 ? '10%' : '5%',
                                    right: i % 2 === 0 ? '20%' : '15%',
                                  }}
                                />
                              ))}
                            </div>
                            {/* Electrical nodes */}
                            <div className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-white/30 rounded-lg flex items-center justify-center">
                              <div className="w-8 h-8 bg-white/20 rounded" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Floating badge */}
                      <div className="absolute top-6 left-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                        <span className="font-display font-bold text-primary-800 text-sm uppercase tracking-wider">
                          {expertise.id === 'civil' && 'Heavy Engineering'}
                          {expertise.id === 'bms' && 'Smart Technology'}
                          {expertise.id === 'mep' && 'Critical Systems'}
                        </span>
                      </div>

                      {/* Stats overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                        <div className="flex justify-between items-end">
                          {expertise.stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                              <div className="font-display text-2xl lg:text-3xl font-bold text-white">
                                {stat.value}
                              </div>
                              <div className="text-xs text-white/70 uppercase tracking-wider">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className={`absolute -z-10 w-full h-full rounded-2xl bg-gradient-to-br ${expertise.accentColor} opacity-20 blur-2xl -top-4 ${index % 2 === 1 ? '-right-4' : '-left-4'}`} />
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Vertical label */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${expertise.accentColor}`} />
                      <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                        {expertise.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-6 leading-tight">
                      {expertise.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                      {expertise.description}
                    </p>
                    <p className="text-neutral-500 leading-relaxed mb-8">
                      {expertise.longDescription}
                    </p>

                    {/* Capabilities Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {expertise.capabilities.map((capability) => (
                        <div
                          key={capability}
                          className="flex items-center gap-3 text-sm text-neutral-700"
                        >
                          <svg className={`w-5 h-5 flex-shrink-0 bg-gradient-to-r ${expertise.accentColor} rounded-full p-1 text-white`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {capability}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/services/${expertise.id}`}
                      className={`group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${expertise.accentColor} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5`}
                    >
                      Explore {expertise.title}
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
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
              Partner with India&apos;s leading infrastructure company. Our team of
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
