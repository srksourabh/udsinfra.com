'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const capabilities = [
  {
    id: 'hvac',
    title: 'Smart HVAC Automation',
    description: 'Demand-based ventilation control to optimize air quality and energy usage. Our intelligent systems monitor occupancy, outdoor conditions, and indoor air quality in real-time to deliver optimal comfort while minimizing energy consumption.',
    features: [
      'Variable Air Volume (VAV) systems',
      'CO2-based demand ventilation',
      'Predictive temperature control',
      'Chiller plant optimization',
    ],
    image: '/images/bms/hvac.png',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'security',
    title: 'Integrated Security',
    description: 'Unified Access Control and Fire Alarm System (FAS) monitoring for rapid emergency response. Our centralized security platform provides complete visibility across all entry points, surveillance feeds, and alarm systems.',
    features: [
      'Biometric & RFID access control',
      'Video analytics with AI detection',
      'Fire alarm integration (FAS)',
      'Emergency lockdown protocols',
    ],
    image: '/images/bms/security.png',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'energy',
    title: 'Energy Analytics',
    description: 'Real-time power monitoring to identify wastage and optimize peak load management. Our energy dashboards provide actionable insights that can reduce operational costs by up to 30%.',
    features: [
      'Real-time consumption tracking',
      'Peak demand management',
      'Power quality monitoring',
      'Automated efficiency reports',
    ],
    image: '/images/bms/energy.png',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'lighting',
    title: 'Lighting Control',
    description: 'Automated dimming and occupancy sensors for commercial complexes. Our lighting systems adapt to natural daylight, occupancy patterns, and scheduled events to create optimal environments while conserving energy.',
    features: [
      'Daylight harvesting',
      'Occupancy-based switching',
      'Scene programming',
      'Emergency lighting integration',
    ],
    image: '/images/bms/hvac.png',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const stats = [
  { value: '30%', label: 'Average Energy Savings' },
  { value: '24/7', label: 'Real-time Monitoring' },
  { value: '99.9%', label: 'System Uptime' },
  { value: '50+', label: 'Integration Protocols' },
];

export default function BMSServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 overflow-hidden">
        {/* Background pattern */}
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-secondary-500/20 text-secondary-400 text-sm font-semibold rounded-full mb-6 uppercase tracking-wider">
                Building Management Systems
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Intelligent Building
                <span className="text-secondary-500"> Management Systems</span>
              </h1>
              <p className="text-xl text-primary-200 mb-8 leading-relaxed">
                Transforming static structures into living, breathing, efficient environments.
              </p>
              <p className="text-lg text-primary-300 mb-10 leading-relaxed">
                UDS Infrastructure leverages the Ultimate Group&apos;s technical backbone to deliver
                state-of-the-art BMS solutions. We integrate HVAC, Lighting, and Security into a
                single, cohesive interface, reducing operational costs by up to 30%.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
                >
                  Request Consultation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300"
                >
                  All Services
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/bms.webp"
                  alt="Building Management System Dashboard"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
                <div className="text-3xl font-bold text-primary-800">30%</div>
                <div className="text-sm text-neutral-600">Cost Reduction</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
              Detailed Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
              Comprehensive BMS
              <span className="text-secondary-500"> Solutions</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-neutral-600">
              Our integrated approach covers every aspect of modern building management,
              from climate control to security systems.
            </p>
          </motion.div>

          <div className="space-y-16">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={capability.image}
                      alt={capability.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-16 h-16 bg-secondary-100 text-secondary-600 rounded-xl flex items-center justify-center mb-6">
                    {capability.icon}
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-primary-800 mb-4">
                    {capability.title}
                  </h3>
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    {capability.description}
                  </p>
                  <ul className="space-y-3">
                    {capability.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Modernize Your Building?
            </h2>
            <p className="text-xl text-primary-200 mb-10 max-w-2xl mx-auto">
              Let our experts design a BMS solution tailored to your facility&apos;s unique requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-secondary-500 hover:bg-secondary-600 text-white font-bold text-lg rounded-xl shadow-2xl shadow-secondary-500/30 transition-all duration-300"
            >
              Schedule a Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
