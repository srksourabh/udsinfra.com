'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/* =============================================================================
   INTERACTIVE BLUEPRINT HERO
   Technical Blue aesthetic with mouse-tracking spotlight
   ============================================================================= */

const heroTextVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
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

// Pre-generate particle positions
const PARTICLE_POSITIONS = [
  { x: 15, y: 20, scale: 0.7, duration: 12, delay: 0 },
  { x: 85, y: 10, scale: 0.5, duration: 15, delay: 1 },
  { x: 30, y: 80, scale: 0.8, duration: 11, delay: 2 },
  { x: 70, y: 60, scale: 0.6, duration: 14, delay: 0.5 },
  { x: 45, y: 35, scale: 0.9, duration: 13, delay: 3 },
  { x: 90, y: 45, scale: 0.55, duration: 16, delay: 1.5 },
  { x: 10, y: 70, scale: 0.75, duration: 10, delay: 4 },
  { x: 60, y: 15, scale: 0.65, duration: 12, delay: 2.5 },
  { x: 25, y: 55, scale: 0.85, duration: 14, delay: 0.8 },
  { x: 80, y: 85, scale: 0.5, duration: 11, delay: 3.5 },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Mouse position with spring physics
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transform for spotlight (Orange glow)
  const spotlightBackground = useTransform(
    [smoothX, smoothY],
    ([x, y]) => {
      const xPercent = (x as number) * 100;
      const yPercent = (y as number) * 100;
      return `radial-gradient(800px circle at ${xPercent}% ${yPercent}%, rgba(249, 115, 22, 0.2), transparent 50%)`;
    }
  );

  // Transform for grid reveal (Cyan glow)
  const gridReveal = useTransform(
    [smoothX, smoothY],
    ([x, y]) => {
      const xPercent = (x as number) * 100;
      const yPercent = (y as number) * 100;
      return `radial-gradient(600px circle at ${xPercent}% ${yPercent}%, rgba(6, 182, 212, 0.15), transparent 60%)`;
    }
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* ===== TECHNICAL BLUE BASE GRADIENT ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />

      {/* ===== SECONDARY BLUE DEPTH LAYER ===== */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-slate-800/30" />

      {/* ===== BLUEPRINT GRID PATTERN ===== */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* ===== FINER GRID OVERLAY ===== */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)
          `,
          backgroundSize: '15px 15px',
        }}
      />

      {/* ===== ENGINEERING SCHEMATIC SVG ===== */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.12]"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Horizontal circuit lines */}
        <line x1="0" y1="180" x2="450" y2="180" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="550" y1="180" x2="900" y2="180" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="12,6" />
        <line x1="1100" y1="280" x2="1920" y2="280" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="0" y1="750" x2="600" y2="750" stroke="#06b6d4" strokeWidth="1" strokeDasharray="8,4" />
        <line x1="1400" y1="850" x2="1920" y2="850" stroke="#06b6d4" strokeWidth="1" />

        {/* Vertical circuit lines */}
        <line x1="280" y1="0" x2="280" y2="450" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="6,12" />
        <line x1="1640" y1="180" x2="1640" y2="900" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="450" y1="600" x2="450" y2="1080" stroke="#06b6d4" strokeWidth="1" />

        {/* Engineering structure - Bridge outline */}
        <path
          d="M80,880 L250,580 L550,520 L900,480 L1250,520 L1550,580 L1720,880"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeDasharray="20,10"
        />
        {/* Bridge pillars */}
        <line x1="250" y1="580" x2="250" y2="880" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="550" y1="520" x2="550" y2="880" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="900" y1="480" x2="900" y2="880" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="1250" y1="520" x2="1250" y2="880" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="1550" y1="580" x2="1550" y2="880" stroke="#ffffff" strokeWidth="1.5" />

        {/* Circuit nodes */}
        <circle cx="280" cy="180" r="6" fill="#06b6d4" />
        <circle cx="900" cy="180" r="6" fill="#06b6d4" />
        <circle cx="1640" cy="280" r="6" fill="#06b6d4" />
        <circle cx="450" cy="750" r="5" fill="none" stroke="#06b6d4" strokeWidth="2" />
        <circle cx="1400" cy="850" r="5" fill="none" stroke="#06b6d4" strokeWidth="2" />

        {/* Structure nodes */}
        <circle cx="250" cy="580" r="8" fill="none" stroke="#ffffff" strokeWidth="2" />
        <circle cx="900" cy="480" r="10" fill="none" stroke="#ffffff" strokeWidth="2" />
        <circle cx="1550" cy="580" r="8" fill="none" stroke="#ffffff" strokeWidth="2" />

        {/* Blueprint annotations */}
        <text x="520" y="460" fill="rgba(255,255,255,0.4)" fontSize="14" fontFamily="monospace">SEC-A1</text>
        <text x="1220" y="500" fill="rgba(255,255,255,0.4)" fontSize="14" fontFamily="monospace">SEC-B2</text>
        <text x="870" y="440" fill="rgba(6,182,212,0.5)" fontSize="12" fontFamily="monospace">REF:001</text>
      </svg>

      {/* ===== MOUSE SPOTLIGHT (ORANGE) ===== */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          background: spotlightBackground,
          opacity: isHovering ? 1 : 0,
        }}
      />

      {/* ===== GRID REVEAL GLOW (CYAN) ===== */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          background: gridReveal,
          opacity: isHovering ? 1 : 0,
        }}
      />

      {/* ===== FLOATING PARTICLES ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLE_POSITIONS.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400/40 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            initial={{
              scale: particle.scale,
              opacity: 0,
            }}
            animate={{
              y: [0, -120],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* ===== DECORATIVE GEOMETRIC ELEMENTS ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 right-[12%] w-80 h-80 border-2 border-cyan-500/30 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute bottom-1/4 left-[8%] w-96 h-96 border-2 border-orange-500/20 rotate-45"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2, delay: 0.6 }}
        className="absolute top-[15%] left-[20%] w-48 h-48 border border-white/20 rotate-12"
      />

      {/* ===== CORNER BRACKETS ===== */}
      <div className="absolute top-24 left-8 w-24 h-24 border-l-2 border-t-2 border-cyan-500/30" />
      <div className="absolute top-24 right-8 w-24 h-24 border-r-2 border-t-2 border-cyan-500/30" />
      <div className="absolute bottom-24 left-8 w-24 h-24 border-l-2 border-b-2 border-cyan-500/30" />
      <div className="absolute bottom-24 right-8 w-24 h-24 border-r-2 border-b-2 border-cyan-500/30" />

      {/* ===== SUBTLE VIGNETTE ===== */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.4)]" />

      {/* ===== BOTTOM FADE TO WHITE ===== */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent" />

      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {/* Pre-headline badge */}
          <motion.div variants={heroLineVariants} className="flex justify-center">
            <span className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                </span>
                <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                  A unit of Ultimate Group
                </span>
              </span>
              <span className="hidden sm:block w-px h-5 bg-white/30" />
              <span className="hidden sm:block text-white/80 text-sm font-medium">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
              of India
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={heroLineVariants}
            className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-blue-100/90 leading-relaxed font-light"
          >
            <span className="text-cyan-400 font-medium">Precision Civil Construction.</span>
            {' '}
            <span className="text-white/90">Intelligent BMS.</span>
            {' '}
            <span className="text-orange-400 font-medium">Advanced Electrical Grids.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={heroLineVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            {/* Primary CTA */}
            <Link
              href="/services"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg rounded-xl transition-all duration-500 transform hover:-translate-y-1 shadow-xl shadow-orange-500/30"
            >
              <span className="absolute inset-0 rounded-xl bg-orange-500 animate-pulse opacity-40 blur-xl group-hover:opacity-60 transition-opacity" />
              <span className="relative flex items-center gap-3">
                Explore Capabilities
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold text-lg rounded-xl border border-white/30 hover:border-cyan-400/50 transition-all duration-500"
            >
              Partner With Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs uppercase tracking-[0.25em] font-medium">
            Discover
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
          >
            <motion.div
              className="w-1.5 h-2.5 bg-cyan-400 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
