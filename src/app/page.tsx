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
   CAPABILITIES DATA
   Focus on what we CAN do, not what we've done
   ============================================================================= */

const capabilities = [
  {
    id: 'civil',
    title: 'Civil Infrastructure',
    tagline: 'Heavy Engineering Capability',
    description: 'Capable of executing large-scale highway networks, bridges, flyovers, and urban infrastructure projects with structural precision.',
    features: [
      'Bridge & Flyover Construction',
      'Highway & Road Networks',
      'Foundation Engineering',
      'Structural Analysis & Design',
    ],
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'bms',
    title: 'Building Management Systems',
    tagline: 'Intelligent Automation',
    description: 'Specialized teams ready to integrate HVAC, lighting, access control, and fire safety into unified smart building platforms.',
    features: [
      'HVAC Automation & Control',
      'Energy Management Systems',
      'Access & Security Integration',
      'Central Command Centers',
    ],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'mep',
    title: 'MEP Engineering',
    tagline: 'Critical Systems Expertise',
    description: 'Specialized teams ready for high-voltage electrical distribution, industrial HVAC, plumbing networks, and fire suppression systems.',
    features: [
      'HT/LT Electrical Systems',
      'Industrial HVAC Solutions',
      'Plumbing & Fire Fighting',
      'BIM Coordination',
    ],
    color: 'from-emerald-500 to-teal-600',
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
          CAPABILITIES SECTION
          What we CAN do (not what we've done)
          ===================================================================== */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14 lg:mb-20"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
              Our Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-5">
              Engineering
              <span className="text-secondary-500"> Expertise</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-neutral-600 leading-relaxed">
              Specialized teams ready to deliver across Civil Infrastructure,
              Building Automation, and MEP Systems.
            </p>
          </motion.div>

          {/* Capabilities Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${cap.color}`} />

                <div className="p-6 lg:p-8">
                  {/* Tagline */}
                  <span className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r ${cap.color} text-white mb-4`}>
                    {cap.tagline}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-primary-800 mb-3">
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {cap.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6">
                    {cap.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-neutral-700">
                        <svg className={`w-5 h-5 flex-shrink-0 bg-gradient-to-r ${cap.color} rounded-full p-1 text-white`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={`/services/${cap.id}`}
                    className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${cap.color} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300`}
                  >
                    Learn More
                    <svg className="w-4 h-4 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
