'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

/* =============================================================================
   SERVICES DATA - BMS-Level Deep Technical Content
   ============================================================================= */

const services = [
  {
    id: 'bms',
    headline: 'Intelligent Building Automation',
    subheadline: 'Integrating HVAC, Energy, and Security into one cognitive brain.',
    details: 'UDS transforms static structures into living environments. Our BMS solutions optimize energy consumption by up to 30% through predictive HVAC algorithms and smart lighting grids. Real-time dashboards provide facility managers with actionable insights, while automated fault detection prevents costly equipment failures before they occur.',
    image: '/images/services/bms.webp',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-cyan-500 to-blue-600',
    features: ['Predictive HVAC Control', 'Smart Lighting Grids', 'Energy Analytics Dashboard', 'Automated Fault Detection'],
  },
  {
    id: 'civil',
    headline: 'Heavy Civil Engineering',
    subheadline: "The structural backbone of West Bengal's development.",
    details: "We deploy the Ultimate Group's heavy machinery fleet for high-precision structural concrete and deep foundation work. Specializing in arterial road networks, bridges, and industrial reinforced concrete (RCC) frameworks. Our civil division handles projects from soil testing through final commissioning, ensuring structural integrity that stands for generations.",
    image: '/images/services/civil-construction.webp',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    gradient: 'from-slate-600 to-slate-800',
    features: ['Deep Foundation Work', 'RCC Frameworks', 'Bridge Construction', 'Road Networks'],
  },
  {
    id: 'electrical',
    headline: 'High-Voltage Power Grids',
    subheadline: 'End-to-end transmission lines and substation commissioning.',
    details: 'Bridging the gap between generation and consumption. We handle HT/LT overhead cable laying, transformer installation, and the deployment of IoT-enabled Smart Meters for modern urban grids. Our electrical division ensures uninterrupted power flow from 11kV substations to last-mile residential connections with zero compromise on safety standards.',
    image: '/images/services/electrical-transmission.png',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: 'from-yellow-500 to-amber-600',
    isNew: true,
    features: ['HT/LT Cable Networks', 'Substation Commissioning', 'Smart Metering (IoT)', 'Transformer Installation'],
  },
  {
    id: 'fire',
    headline: 'Advanced Life Safety Systems',
    subheadline: 'NBC-compliant suppression grids for high-risk zones.',
    details: 'Safety is an engineered guarantee. We design hydraulic hydrant networks and automated sprinkler systems that detect thermal anomalies instantly, ensuring rapid suppression without damaging assets. Every installation undergoes rigorous pressure testing and is certified compliant with National Building Code (NBC) and local fire authority requirements.',
    image: '/images/services/fire-safety-premium.png',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    gradient: 'from-red-500 to-red-700',
    features: ['Hydraulic Hydrant Networks', 'Automated Sprinklers', 'NBC Compliance', 'Thermal Detection'],
  },
  {
    id: 'cctv',
    headline: 'AI-Driven Perimeter Security',
    subheadline: 'Beyond recording—active threat detection and analytics.',
    details: 'Our IP-based surveillance networks utilize Edge AI to detect intrusions, recognize license plates, and alert command centers in real-time. Night-vision capable and cloud-redundant, these systems provide 24/7 situational awareness. Advanced video analytics transform passive cameras into active security assets that learn and adapt.',
    image: '/images/services/cctv-premium.png',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-violet-500 to-purple-700',
    features: ['Edge AI Analytics', 'License Plate Recognition', 'Night Vision Systems', 'Cloud Redundancy'],
  },
  {
    id: 'access',
    headline: 'Secure Entry Management',
    subheadline: 'Biometric and RFID integration for restricted environments.',
    details: 'We secure your critical data centers and command rooms. Our systems integrate seamlessly with HRMS for attendance tracking while strictly governing physical entry via retina or fingerprint logic. Multi-factor authentication, anti-passback protocols, and real-time audit trails ensure compliance with the strictest security frameworks.',
    image: '/images/services/access-control-premium.png',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-teal-600',
    features: ['Biometric Authentication', 'RFID Integration', 'HRMS Sync', 'Audit Trail Logging'],
  },
];

/* =============================================================================
   SERVICE SECTION COMPONENT - Alternating Layout
   ============================================================================= */

function ServiceSection({ service, index }: { service: typeof services[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`py-20 lg:py-28 ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {/* Gradient Fallback */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />

              {/* Image */}
              <Image
                src={service.image}
                alt={service.headline}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index < 2}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Icon Badge */}
              <div className="absolute top-6 left-6 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center text-primary-800">
                {service.icon}
              </div>

              {/* New Badge */}
              {service.isNew && (
                <span className="absolute top-6 right-6 px-4 py-1.5 bg-secondary-500 text-white text-sm font-bold rounded-full uppercase tracking-wide shadow-lg">
                  New Vertical
                </span>
              )}
            </div>

            {/* Decorative Element */}
            <div className={`absolute -z-10 w-full h-full rounded-2xl bg-gradient-to-br ${service.gradient} opacity-20 ${isEven ? '-bottom-4 -right-4' : '-bottom-4 -left-4'}`} />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}
          >
            {/* Section Label */}
            <span className={`inline-block px-4 py-1.5 bg-gradient-to-r ${service.gradient} text-white text-xs font-bold rounded-full uppercase tracking-wider mb-6`}>
              {service.id === 'bms' ? 'Core Expertise' : 'Engineering Division'}
            </span>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-4 leading-tight">
              {service.headline}
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-secondary-600 font-medium mb-6">
              {service.subheadline}
            </p>

            {/* Details */}
            <p className="text-neutral-600 leading-relaxed mb-8 text-lg">
              {service.details}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                  <span className="text-sm font-medium text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-900 hover:bg-primary-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Consult an Expert
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

/* =============================================================================
   MAIN PAGE COMPONENT
   ============================================================================= */

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 overflow-hidden">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 border border-cyan-500/10 rounded-full" />
        <div className="absolute bottom-10 left-10 w-48 h-48 border border-secondary-500/10 rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-secondary-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary-500/20 text-secondary-400 text-sm font-semibold rounded-full mb-6 uppercase tracking-wider">
              Engineering Excellence Since 2008
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Integrated Infrastructure
              <span className="text-secondary-500"> Solutions</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-primary-200 leading-relaxed mb-10">
              From heavy civil works to intelligent building systems—UDS Infrastructure delivers
              end-to-end engineering services backed by 16+ years of Ultimate Group expertise.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-1">16+</div>
                <div className="text-primary-300 text-sm uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-1">6</div>
                <div className="text-primary-300 text-sm uppercase tracking-wider">Service Verticals</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-1">100%</div>
                <div className="text-primary-300 text-sm uppercase tracking-wider">NBC Compliant</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Alternating Layout */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      {/* CTA Section with MSME Badge */}
      <section className="py-20 bg-primary-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* MSME Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-primary-200 text-sm font-medium">MSME Registered Unit | Govt. Certified</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-xl text-primary-200 mb-10 max-w-2xl mx-auto">
              Our engineering team is ready to design integrated solutions combining multiple
              services tailored to your specific project requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary-500 hover:bg-secondary-600 text-white font-bold text-lg rounded-xl shadow-2xl shadow-secondary-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                Start Your Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-primary-300 text-sm mb-4">Trusted by organizations across West Bengal</p>
              <div className="flex flex-wrap justify-center gap-6 text-primary-400 text-sm">
                <span>Government Projects</span>
                <span className="text-primary-600">|</span>
                <span>Commercial Buildings</span>
                <span className="text-primary-600">|</span>
                <span>Industrial Facilities</span>
                <span className="text-primary-600">|</span>
                <span>Residential Complexes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
