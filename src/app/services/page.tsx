'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 'civil-construction',
    title: 'Civil Construction',
    description: 'High-grade structural concrete and steel framework execution for commercial towers.',
    image: '/images/services/civil-construction.webp',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    description: "Arterial road networks, bridges, and public utility grids driving India's connectivity.",
    image: '/images/services/infrastructure.webp',
    color: 'from-slate-600 to-slate-800',
  },
  {
    id: 'bms',
    title: 'Building Management Systems',
    description: 'Centralized command centers monitoring HVAC, lighting, and energy efficiency.',
    image: '/images/services/bms.webp',
    color: 'from-cyan-500 to-blue-600',
    featured: true,
  },
  {
    id: 'fire-safety',
    title: 'Fire Safety & Suppression',
    description: 'Intelligent fire detection and automated suppression manifolds (hydrants & sprinklers).',
    image: '/images/services/fire-safety.webp',
    color: 'from-red-500 to-red-700',
  },
  {
    id: 'cctv',
    title: 'CCTV & Surveillance',
    description: 'IP-based high-definition monitoring with AI-driven analytics for perimeter security.',
    image: '/images/services/cctv.webp',
    color: 'from-violet-500 to-purple-700',
  },
  {
    id: 'access-control',
    title: 'Access Control',
    description: 'Biometric integration and RFID secure entry points for restricted zones.',
    image: '/images/services/access-control.webp',
    color: 'from-emerald-500 to-teal-600',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary-500/20 text-secondary-400 text-sm font-semibold rounded-full mb-6 uppercase tracking-wider">
              What We Do
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our
              <span className="text-secondary-500"> Services</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-primary-200 leading-relaxed">
              From heavy civil works to intelligent building systems—integrated engineering
              services for modern infrastructure across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/services/${service.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {service.featured && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-secondary-500 text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-primary-800 mb-3 group-hover:text-secondary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 group-hover:text-secondary-600 transition-colors">
                      Learn More
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>

                  {/* Bottom accent */}
                  <div className={`h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-800 mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Our engineering team can design integrated solutions that combine multiple
              services to meet your specific requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
            >
              Get in Touch
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
