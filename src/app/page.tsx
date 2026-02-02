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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
    },
  }),
};

/* =============================================================================
   DATA - "WHY US" BENTO GRID
   Only truthful, capability-focused content
   ============================================================================= */

const whyUsCards = [
  {
    id: 'heritage',
    title: '16+ Years',
    subtitle: 'Group Heritage',
    description: 'Backed by Ultimate Group—a name synonymous with trust, quality, and engineering excellence in Eastern India.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    accent: 'bg-primary-800',
    iconBg: 'bg-primary-100 text-primary-700',
  },
  {
    id: 'fleet',
    title: 'Modern Fleet',
    subtitle: 'Latest Equipment',
    description: 'Access to state-of-the-art construction machinery, excavators, and specialized equipment for projects of any scale.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    accent: 'bg-secondary-500',
    iconBg: 'bg-secondary-100 text-secondary-700',
  },
  {
    id: 'standards',
    title: 'ISO Certified',
    subtitle: 'Quality & Safety',
    description: 'Rigorous adherence to ISO 9001, ISO 14001, and ISO 45001 standards ensuring quality, environmental responsibility, and workplace safety.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    accent: 'bg-emerald-600',
    iconBg: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 'local',
    title: 'Kolkata HQ',
    subtitle: 'Local Expertise',
    description: 'Deep understanding of Bengal&apos;s terrain, regulations, and requirements. On-ground teams ready to mobilize across Eastern India.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    accent: 'bg-cyan-600',
    iconBg: 'bg-cyan-100 text-cyan-700',
  },
];

/* =============================================================================
   CAPABILITIES DATA - SERVICE DESCRIPTIONS
   Prospective language: "We design", "We execute" (not retrospective)
   ============================================================================= */

const serviceCapabilities = [
  /*
   * ==========================================================================
   * CIVIL INFRASTRUCTURE
   * ==========================================================================
   *
   * AI IMAGE GENERATION PROMPT:
   * "Drone view of a construction site foundation layout, sunrise, blueprint
   * overlay, hyper-realistic, professional engineering photography, 8k."
   *
   * Image Requirements:
   * - Aspect Ratio: 16:9 (800x450 minimum)
   * - Format: WebP with JPEG fallback
   * - Alt text: "Aerial view of civil construction foundation - UDS Infrastructure"
   * ==========================================================================
   */
  {
    id: 'civil',
    headline: 'Heavy Civil Engineering',
    subtitle: 'Structural Excellence',
    description: 'Deploying advanced structural techniques for bridges, highways, and commercial foundations. We bring precision to concrete and steel.',
    extendedDescription: 'Our civil engineering teams execute complex infrastructure projects with rigorous adherence to IRC, IS, and AASHTO specifications. We design foundations that endure, structures that inspire.',
    capabilities: [
      'Bridge & Flyover Construction',
      'Highway & Road Networks',
      'Commercial Foundations',
      'Structural Analysis & Design',
      'Geotechnical Engineering',
      'Quality Assurance & Testing',
    ],
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-500',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  /*
   * ==========================================================================
   * BUILDING MANAGEMENT SYSTEMS (BMS)
   * ==========================================================================
   *
   * AI IMAGE GENERATION PROMPT:
   * "Modern server room with blue cabling and digital interface overlay showing
   * building analytics, depth of field, futuristic, clean engineering aesthetic."
   *
   * Image Requirements:
   * - Aspect Ratio: 16:9 (800x450 minimum)
   * - Format: WebP with JPEG fallback
   * - Alt text: "Smart building management system interface - UDS Infrastructure"
   * ==========================================================================
   */
  {
    id: 'bms',
    headline: 'Integrated Smart Infrastructures',
    subtitle: 'Intelligent Automation',
    description: 'Future-ready automation for modern facilities. From fire safety integration to HVAC control, we design intelligence into buildings.',
    extendedDescription: 'We architect unified building automation platforms using BACnet, Modbus, and KNX protocols. Our systems deliver real-time analytics, predictive maintenance, and seamless subsystem integration.',
    capabilities: [
      'HVAC Automation & Optimization',
      'Fire Safety Integration',
      'Access Control Systems',
      'Energy Management & Analytics',
      'Lighting Control Systems',
      'Central Command Centers',
    ],
    color: 'from-cyan-500 to-blue-600',
    bgColor: 'bg-cyan-500',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  /*
   * ==========================================================================
   * MEP SOLUTIONS
   * ==========================================================================
   *
   * AI IMAGE GENERATION PROMPT:
   * "Close up of industrial piping and electrical conduit, clean engineering
   * photography, depth of field, organized mechanical room, professional."
   *
   * Image Requirements:
   * - Aspect Ratio: 16:9 (800x450 minimum)
   * - Format: WebP with JPEG fallback
   * - Alt text: "Industrial MEP systems installation - UDS Infrastructure"
   * ==========================================================================
   */
  {
    id: 'mep',
    headline: 'Mechanical, Electrical & Plumbing',
    subtitle: 'Critical Systems',
    description: 'The nervous system of your infrastructure. Comprehensive MEP contracting for industrial and residential high-rises.',
    extendedDescription: 'We execute end-to-end MEP installations following ASHRAE, NFPA, and NBC guidelines. Our teams coordinate through BIM to eliminate conflicts and ensure systems perform at design specifications.',
    capabilities: [
      'HT/LT Electrical Distribution',
      'Industrial HVAC Systems',
      'Plumbing & Drainage Networks',
      'Fire Fighting & Suppression',
      'DG & UPS Backup Systems',
      'BIM Coordination',
    ],
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-500',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

/* =============================================================================
   HERO BACKGROUND COMPONENT
   Blueprint/Architectural style for "Work in Progress" feel
   ============================================================================= */

function HeroBackground() {
  return (
    /*
     * ==========================================================================
     * HERO VISUAL - BLUEPRINT / WORK IN PROGRESS STYLE
     * ==========================================================================
     *
     * AI IMAGE GENERATION PROMPT:
     * "Architectural blueprint with white lines on deep navy background,
     * showing bridge structural plans, engineering schematic style,
     * minimal, professional, 8k resolution."
     *
     * Image Requirements:
     * - Aspect Ratio: 16:9 (1920x1080 minimum)
     * - Format: WebP with JPEG fallback
     * - Alt text: "Engineering blueprint - UDS Infrastructure"
     * ==========================================================================
     */
    <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
      {/* Blueprint grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Subtle architectural lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05]"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Bridge structure suggestion */}
        <line x1="200" y1="700" x2="600" y2="400" stroke="white" strokeWidth="2" />
        <line x1="600" y1="400" x2="1000" y2="400" stroke="white" strokeWidth="2" />
        <line x1="1000" y1="400" x2="1400" y2="700" stroke="white" strokeWidth="2" />
        <line x1="200" y1="700" x2="1400" y2="700" stroke="white" strokeWidth="2" />

        {/* Support lines */}
        <line x1="400" y1="700" x2="500" y2="450" stroke="white" strokeWidth="1" strokeDasharray="8,4" />
        <line x1="800" y1="700" x2="800" y2="400" stroke="white" strokeWidth="1" strokeDasharray="8,4" />
        <line x1="1200" y1="700" x2="1100" y2="450" stroke="white" strokeWidth="1" strokeDasharray="8,4" />

        {/* Dimension markers */}
        <circle cx="200" cy="700" r="6" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="600" cy="400" r="6" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="1000" cy="400" r="6" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="1400" cy="700" r="6" fill="none" stroke="white" strokeWidth="1" />
      </svg>

      {/* Animated accent elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 right-1/4 w-80 h-80 border border-secondary-500/30 rounded-lg rotate-12"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-1/3 left-1/4 w-64 h-64 border border-white/20 rotate-45"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/40 via-transparent to-primary-950/60" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
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
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  return (
    <>
      {/* =====================================================================
          HERO SECTION - VISIONARY
          Selling the vision, not the portfolio
          ===================================================================== */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      >
        {/* Background with parallax */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
          }}
        >
          <HeroBackground />
        </motion.div>

        {/* Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.4)]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 sm:space-y-8"
          >
            {/* Pre-headline badge */}
            <motion.div
              variants={heroLineVariants}
              className="flex justify-center"
            >
              <span className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse" />
                  <span className="text-secondary-400 font-semibold text-sm uppercase tracking-wider">
                    A unit of Ultimate Group
                  </span>
                </span>
                <span className="hidden sm:block w-px h-4 bg-white/20" />
                <span className="hidden sm:block text-white/60 text-sm">
                  16+ Years of Trust
                </span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={heroLineVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight"
            >
              Engineering the Future
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 via-secondary-500 to-secondary-600">
                of Bengal
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={heroLineVariants}
              className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-primary-100/90 leading-relaxed font-light"
            >
              Backed by 16+ years of Ultimate Group legacy, UDS Infrastructure
              is the new standard in Civil Engineering & Building Management Systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={heroLineVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg rounded-xl shadow-2xl shadow-secondary-500/25 hover:shadow-secondary-500/40 transition-all duration-500 transform hover:-translate-y-1"
              >
                Partner With Us
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
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg rounded-xl border border-white/20 hover:border-white/40 transition-all duration-500"
              >
                Learn About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/40 text-xs uppercase tracking-[0.25em] font-medium">
              Discover
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            >
              <motion.div
                className="w-1 h-2 bg-white/60 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================================
          "WHY US" SECTION - BENTO GRID
          Truthful, capability-focused cards
          ===================================================================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14 lg:mb-20"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
              Why Partner With Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-5">
              New Energy,
              <span className="text-secondary-500"> Proven Foundation</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-neutral-600 leading-relaxed">
              UDS Infrastructure combines the agility of a modern startup with
              the stability and trust of Ultimate Group&apos;s 16+ year legacy.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {whyUsCards.map((card, index) => (
              <motion.div
                key={card.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="group relative bg-neutral-50 hover:bg-primary-800 rounded-2xl p-6 lg:p-8 transition-all duration-500 cursor-default overflow-hidden"
              >
                {/* Accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`w-14 h-14 ${card.iconBg} group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:text-white`}>
                  {card.icon}
                </div>

                {/* Title */}
                <div className="font-display text-3xl lg:text-4xl font-bold text-primary-800 group-hover:text-white mb-1 transition-colors duration-500">
                  {card.title}
                </div>
                <div className="text-sm font-semibold text-secondary-500 group-hover:text-secondary-400 uppercase tracking-wider mb-3 transition-colors duration-500">
                  {card.subtitle}
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-600 group-hover:text-primary-200 leading-relaxed transition-colors duration-500">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          OUR CAPABILITIES SECTION
          Service Descriptions with premium visuals
          ===================================================================== */}
      <section className="py-24 lg:py-32 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-24"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
              Our Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-800 mb-6">
              Three Pillars of
              <span className="text-secondary-500"> Excellence</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg lg:text-xl text-neutral-600 leading-relaxed">
              We execute across Civil Infrastructure, Building Automation, and MEP Systems—
              each discipline mastered to deliver integrated solutions for complex projects.
            </p>
          </motion.div>

          {/* Service Cards - Premium Layout */}
          <div className="space-y-20 lg:space-y-32">
            {serviceCapabilities.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                  {/* Image Placeholder */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                      {/* Gradient Background with Pattern */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color}`}>
                        {/* Grid overlay */}
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: `
                              linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
                            `,
                            backgroundSize: '30px 30px',
                          }}
                        />

                        {/* Service-specific visual elements */}
                        {service.id === 'civil' && (
                          <div className="absolute inset-0">
                            {/* Bridge/structure suggestion */}
                            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
                              <line x1="50" y1="250" x2="150" y2="100" stroke="white" strokeWidth="3" />
                              <line x1="150" y1="100" x2="250" y2="100" stroke="white" strokeWidth="3" />
                              <line x1="250" y1="100" x2="350" y2="250" stroke="white" strokeWidth="3" />
                              <line x1="50" y1="250" x2="350" y2="250" stroke="white" strokeWidth="3" />
                              <circle cx="150" cy="100" r="8" fill="none" stroke="white" strokeWidth="2" />
                              <circle cx="250" cy="100" r="8" fill="none" stroke="white" strokeWidth="2" />
                            </svg>
                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
                          </div>
                        )}

                        {service.id === 'bms' && (
                          <div className="absolute inset-0">
                            {/* Dashboard/circuit pattern */}
                            <div className="absolute inset-8 border border-white/30 rounded-lg">
                              <div className="absolute top-4 left-4 right-4 h-3 bg-white/20 rounded" />
                              <div className="absolute top-12 left-4 w-1/3 h-20 bg-white/10 rounded" />
                              <div className="absolute top-12 right-4 w-1/2 h-20 bg-white/10 rounded" />
                              <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                                {[...Array(4)].map((_, i) => (
                                  <div key={i} className="flex-1 h-12 bg-white/15 rounded" />
                                ))}
                              </div>
                            </div>
                            {/* Pulsing nodes */}
                            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/40 rounded-full animate-pulse" />
                            <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                          </div>
                        )}

                        {service.id === 'mep' && (
                          <div className="absolute inset-0 overflow-hidden">
                            {/* Pipe/conduit pattern */}
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute h-4 bg-white/20 rounded-full"
                                style={{
                                  top: `${20 + i * 18}%`,
                                  left: i % 2 === 0 ? '8%' : '12%',
                                  right: i % 2 === 0 ? '15%' : '8%',
                                }}
                              />
                            ))}
                            {/* Junction box */}
                            <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-white/30 rounded-lg flex items-center justify-center">
                              <div className="w-10 h-10 bg-white/20 rounded" />
                            </div>
                            {/* Lightning bolt accent */}
                            <svg className="absolute bottom-8 left-8 w-12 h-12 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Icon Badge */}
                      <div className="absolute top-6 left-6 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center text-primary-800">
                        {service.icon}
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    </div>

                    {/* Decorative blur element */}
                    <div className={`absolute -z-10 w-full h-full rounded-2xl bg-gradient-to-br ${service.color} opacity-20 blur-3xl -top-4 ${index % 2 === 1 ? '-right-4' : '-left-4'}`} />
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Subtitle */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${service.color}`} />
                      <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                        {service.subtitle}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-6 leading-tight">
                      {service.headline}
                    </h3>

                    {/* Description */}
                    <p className="text-xl text-neutral-700 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-neutral-500 leading-relaxed mb-8">
                      {service.extendedDescription}
                    </p>

                    {/* Capabilities Grid */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                      {service.capabilities.map((capability) => (
                        <div
                          key={capability}
                          className="flex items-center gap-3 text-sm text-neutral-700"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                          {capability}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/services/${service.id}`}
                      className={`group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5`}
                    >
                      Explore {service.headline.split(' ')[0]} Services
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
      <section className="py-20 lg:py-28 bg-primary-800 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Ready to Build Something
              <span className="text-secondary-500"> Extraordinary?</span>
            </h2>
            <p className="text-lg sm:text-xl text-primary-200 max-w-2xl mx-auto mb-8 leading-relaxed">
              Let&apos;s discuss your next infrastructure project. Our engineering
              team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-bold text-lg rounded-xl shadow-2xl shadow-secondary-500/30 hover:shadow-secondary-500/50 transition-all duration-500 transform hover:-translate-y-1"
              >
                Start a Conversation
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
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold text-lg rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-500"
              >
                About Ultimate Group
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
