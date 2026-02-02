'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from '@/app/lib/servicesData';

/* =============================================================================
   ICON COMPONENTS - Mapped from string names
   ============================================================================= */

const icons: Record<string, React.ReactNode> = {
  Cpu: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  HardHat: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  Zap: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Flame: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  ),
  Eye: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  Lock: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
    </svg>
  ),
};

/* =============================================================================
   SERVICE CARD COMPONENT
   ============================================================================= */

function ServiceCard({ service, index }: { service: typeof servicesData[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden border-l-4 border-blue-900 shadow-lg hover:shadow-2xl transition-all duration-300 h-full transform hover:-translate-y-2"
      >
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          {/* Gradient Fallback */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />

          {/* Image */}
          <Image
            src={service.mainImage}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 3}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Icon Badge */}
          <div className="absolute top-4 left-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center text-primary-800 group-hover:scale-110 group-hover:bg-secondary-500 group-hover:text-white transition-all duration-300">
            {icons[service.icon]}
          </div>

          {/* New Badge */}
          {service.isNew && (
            <span className="absolute top-4 right-4 px-3 py-1 bg-secondary-500 text-white text-xs font-bold rounded-full uppercase tracking-wide shadow-lg animate-pulse">
              New
            </span>
          )}

          {/* Service ID */}
          <div className="absolute bottom-4 right-4 text-6xl font-bold text-white/10 font-display">
            {service.id}
          </div>

          {/* Title on Image */}
          <div className="absolute bottom-4 left-4 right-16">
            <h3 className="font-display text-xl font-bold text-white drop-shadow-lg">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-neutral-600 text-sm leading-relaxed mb-6 line-clamp-2">
            {service.shortDesc}
          </p>

          {/* Features Preview */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.features.slice(0, 2).map((feature, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-md"
              >
                {feature.split(' ').slice(0, 2).join(' ')}
              </span>
            ))}
            {service.features.length > 2 && (
              <span className="px-2 py-1 bg-neutral-100 text-neutral-500 text-xs rounded-md">
                +{service.features.length - 2} more
              </span>
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 group-hover:text-secondary-600 transition-colors uppercase tracking-wide">
              Learn More
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>

            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.gradient} shadow-md`} />
          </div>
        </div>
      </Link>
    </motion.div>
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

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
              Our Service <span className="text-secondary-500">Verticals</span>
            </h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              Click on any service to explore detailed capabilities, features, and request a consultation.
            </p>
          </motion.div>

          {/* Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Need a Custom Engineering Solution?
            </h2>
            <p className="text-xl text-primary-200 mb-10 max-w-2xl mx-auto">
              Our engineering team can design integrated solutions combining multiple
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
              <p className="text-primary-300 text-sm mb-4">Trusted by organizations across India</p>
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
