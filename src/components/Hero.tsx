'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/* =============================================================================
   INTERACTIVE HERO SECTION
   Blueprint grid with mouse-tracking spotlight effect
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

// Pre-generate particle positions to avoid Math.random in render
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
  { x: 50, y: 90, scale: 0.7, duration: 15, delay: 1.2 },
  { x: 5, y: 40, scale: 0.6, duration: 13, delay: 4.5 },
  { x: 95, y: 25, scale: 0.8, duration: 10, delay: 2.2 },
  { x: 35, y: 5, scale: 0.55, duration: 16, delay: 0.3 },
  { x: 75, y: 75, scale: 0.9, duration: 12, delay: 3.8 },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Mouse position with spring physics for smooth movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transform mouse position to spotlight gradient
  const spotlightBackground = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(600px circle at ${x}px ${y}px, rgba(249, 115, 22, 0.15), transparent 40%)`
  );

  // Grid glow effect
  const gridGlow = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(400px circle at ${x}px ${y}px, rgba(6, 182, 212, 0.08), transparent 50%)`
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
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
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-primary-950"
    >
      {/* ===== NAVBAR VISIBILITY GRADIENT (TOP) ===== */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-20 pointer-events-none" />

      {/* ===== BASE BACKGROUND ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-[#0a1628] to-primary-900" />

      {/* ===== ANIMATED GRID PATTERN ===== */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* ===== CIRCUIT LINES SVG ===== */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Horizontal data lines */}
        <line x1="0" y1="200" x2="400" y2="200" stroke="cyan" strokeWidth="1" />
        <line x1="500" y1="200" x2="800" y2="200" stroke="cyan" strokeWidth="1" strokeDasharray="10,5" />
        <line x1="1200" y1="300" x2="1920" y2="300" stroke="cyan" strokeWidth="1" />

        {/* Vertical data lines */}
        <line x1="300" y1="0" x2="300" y2="400" stroke="cyan" strokeWidth="1" strokeDasharray="5,10" />
        <line x1="1600" y1="200" x2="1600" y2="800" stroke="cyan" strokeWidth="1" />

        {/* Engineering structure - bridge silhouette */}
        <path
          d="M100,800 L300,500 L600,450 L900,420 L1200,450 L1500,500 L1700,800"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeDasharray="15,8"
        />
        <line x1="300" y1="500" x2="300" y2="800" stroke="white" strokeWidth="1" />
        <line x1="600" y1="450" x2="600" y2="800" stroke="white" strokeWidth="1" />
        <line x1="900" y1="420" x2="900" y2="800" stroke="white" strokeWidth="1" />
        <line x1="1200" y1="450" x2="1200" y2="800" stroke="white" strokeWidth="1" />
        <line x1="1500" y1="500" x2="1500" y2="800" stroke="white" strokeWidth="1" />

        {/* Circuit nodes */}
        <circle cx="300" cy="200" r="4" fill="cyan" />
        <circle cx="800" cy="200" r="4" fill="cyan" />
        <circle cx="1600" cy="300" r="4" fill="cyan" />
        <circle cx="300" cy="500" r="5" fill="none" stroke="white" strokeWidth="1.5" />
        <circle cx="900" cy="420" r="5" fill="none" stroke="white" strokeWidth="1.5" />
        <circle cx="1500" cy="500" r="5" fill="none" stroke="white" strokeWidth="1.5" />

        {/* Measurement annotations */}
        <text x="580" y="410" fill="rgba(255,255,255,0.3)" fontSize="12" fontFamily="monospace">A-01</text>
        <text x="1180" y="440" fill="rgba(255,255,255,0.3)" fontSize="12" fontFamily="monospace">B-02</text>
      </svg>

      {/* ===== MOUSE SPOTLIGHT EFFECT ===== */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: spotlightBackground,
          opacity: isHovering ? 1 : 0,
        }}
      />

      {/* ===== GRID GLOW EFFECT ===== */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: gridGlow,
          opacity: isHovering ? 1 : 0,
        }}
      />

      {/* ===== FLOATING PARTICLES ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLE_POSITIONS.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            initial={{
              scale: particle.scale,
              opacity: 0,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
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

      {/* ===== DECORATIVE ELEMENTS ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 right-[15%] w-72 h-72 border border-cyan-500/20 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute bottom-1/4 left-[10%] w-96 h-96 border border-secondary-500/20 rotate-45"
      />

      {/* ===== CORNER ACCENTS ===== */}
      <div className="absolute top-20 left-8 w-20 h-20 border-l-2 border-t-2 border-cyan-500/20" />
      <div className="absolute top-20 right-8 w-20 h-20 border-r-2 border-t-2 border-cyan-500/20" />
      <div className="absolute bottom-20 left-8 w-20 h-20 border-l-2 border-b-2 border-cyan-500/20" />
      <div className="absolute bottom-20 right-8 w-20 h-20 border-r-2 border-b-2 border-cyan-500/20" />

      {/* ===== VIGNETTE ===== */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.6)]" />

      {/* ===== BOTTOM FADE TO WHITE ===== */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />

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
            <span className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-500"></span>
                </span>
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
              of India
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={heroLineVariants}
            className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-primary-100/90 leading-relaxed font-light"
          >
            <span className="text-cyan-400">Precision Civil Construction.</span>
            {' '}
            <span className="text-white/80">Intelligent BMS.</span>
            {' '}
            <span className="text-secondary-400">Advanced Electrical Grids.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={heroLineVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            {/* Primary CTA with pulsing glow */}
            <Link
              href="/services"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg rounded-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              {/* Pulsing glow effect */}
              <span className="absolute inset-0 rounded-xl bg-secondary-500 animate-pulse opacity-50 blur-lg group-hover:opacity-70 transition-opacity" />
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
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-semibold text-lg rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-500"
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
              className="w-1 h-2 bg-cyan-500/80 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
