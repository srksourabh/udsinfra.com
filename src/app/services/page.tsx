'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 'electrical',
    title: 'Electrical Distribution & Smart Metering',
    headline: 'Powering the Grid of Tomorrow.',
    subheadline: 'End-to-end electrical transmission and smart metering solutions.',
    intro: 'We bridge the gap between power generation and consumption. UDS specializes in high-voltage transmission networks, substation commissioning, and the deployment of AMI (Advanced Metering Infrastructure) for smart cities.',
    image: '/images/services/electrical-transmission.jpg',
    color: 'from-yellow-500 to-amber-600',
    capabilities: [
      'HT/LT overhead cable laying and tower erection',
      'IoT-enabled smart metering systems',
      'Substation commissioning',
      '24/7 grid maintenance',
    ],
    featured: true,
    isNew: true,
  },
  {
    id: 'civil-construction',
    title: 'Civil Infrastructure',
    headline: 'Heavy Civil Engineering.',
    subheadline: "The backbone of India's urban development.",
    intro: "From arterial roads to deep-foundation commercial towers, we bring the Ultimate Group's heavy machinery fleet to execute complex structural projects with speed and precision.",
    image: '/images/services/infrastructure.jpg',
    color: 'from-slate-600 to-slate-800',
    capabilities: [
      'High-grade structural concrete for bridges and foundations',
      'Asphalt and concrete paving for state highways',
      'Factory flooring and PEB bases',
      'Land grading and drainage infrastructure',
    ],
  },
  {
    id: 'bms',
    title: 'Building Management Systems',
    headline: 'Intelligent Building Management.',
    subheadline: 'Transforming static structures into efficient environments.',
    intro: 'UDS Infrastructure delivers state-of-the-art BMS solutions. We integrate HVAC, Lighting, and Security into a single, cohesive interface, reducing operational costs by up to 30%.',
    image: '/images/services/bms.webp',
    color: 'from-cyan-500 to-blue-600',
    capabilities: [
      'Smart HVAC automation',
      'Integrated security monitoring',
      'Real-time energy analytics',
      'Automated lighting control',
    ],
    featured: true,
  },
  {
    id: 'fire-safety',
    title: 'Fire Protection Engineering',
    headline: 'Advanced Life Safety & Suppression.',
    subheadline: 'NBC-compliant fire grids for high-rise and industrial zones.',
    intro: 'Safety is not an option; it is an engineered guarantee. We design hydraulic fire suppression systems that integrate seamlessly with building aesthetics while ensuring maximum rapid response coverage.',
    image: '/images/services/fire-safety.jpg',
    color: 'from-red-500 to-red-700',
    capabilities: [
      'High-pressure wet riser hydrant systems',
      'Heat-sensitive automated sprinklers',
      'Intelligent smoke and heat detection',
      'Full Fire Services compliance',
    ],
  },
  {
    id: 'cctv',
    title: 'CCTV & Intelligent Surveillance',
    headline: 'AI-Driven Perimeter Security.',
    subheadline: 'Beyond recording—intelligent monitoring for critical assets.',
    intro: 'Modern security requires active intelligence. Our IP-based surveillance networks use edge computing to detect intrusions, recognize license plates, and alert command centers in real-time.',
    image: '/images/services/cctv.jpg',
    color: 'from-violet-500 to-purple-700',
    capabilities: [
      '4K low-light and thermal imaging cameras',
      'Automated intrusion detection analytics',
      'Cloud and NVR storage redundancy',
      'Centralized remote command access',
    ],
  },
  {
    id: 'access-control',
    title: 'Access Control Systems',
    headline: 'Secure Entry Management.',
    subheadline: 'Biometric and RFID solutions for restricted zones.',
    intro: 'Control who enters your facilities with precision. Our access control systems combine biometric authentication, RFID technology, and real-time monitoring for comprehensive security management.',
    image: '/images/services/access-control.jpg',
    color: 'from-emerald-500 to-teal-600',
    capabilities: [
      'Biometric fingerprint and facial recognition',
      'RFID card and mobile access',
      'Visitor management systems',
      'Integration with BMS and CCTV',
    ],
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
              Engineering
              <span className="text-secondary-500"> Excellence</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-primary-200 leading-relaxed">
              From heavy civil infrastructure to intelligent building systems—integrated
              engineering services built on 16+ years of Ultimate Group expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? '' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent`} />
                    {service.isNew && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-secondary-500 text-white text-xs font-bold rounded-full uppercase">
                        New Service
                      </span>
                    )}
                    {service.featured && !service.isNew && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-primary-800 text-white text-xs font-bold rounded-full uppercase">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${service.color} text-white text-xs font-semibold rounded-full mb-4 uppercase tracking-wider`}>
                    {service.id.replace('-', ' ')}
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-800 mb-3">
                    {service.headline}
                  </h2>
                  <p className="text-lg text-secondary-600 font-medium mb-4">
                    {service.subheadline}
                  </p>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {service.intro}
                  </p>

                  {/* Capabilities */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-primary-800 uppercase tracking-wider mb-4">
                      Key Capabilities
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5"
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
                          <span className="text-sm text-neutral-700">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/services/${service.id}`}
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group`}
                  >
                    Explore {service.title.split(' ')[0]}
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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

      {/* CTA Section */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Need a Custom Engineering Solution?
            </h2>
            <p className="text-xl text-primary-200 mb-10 max-w-2xl mx-auto">
              Our team can design integrated solutions combining multiple services
              tailored to your specific project requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-secondary-500 hover:bg-secondary-600 text-white font-bold text-lg rounded-xl shadow-2xl shadow-secondary-500/30 transition-all duration-300"
            >
              Start Your Project
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
