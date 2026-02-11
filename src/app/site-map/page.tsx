'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { servicesData } from '@/app/lib/servicesData';
import { Home, Info, Briefcase, Mail, FileText, Shield, Map } from 'lucide-react';

export default function SiteMapPage() {
  const mainPages = [
    { name: 'Home', href: '/', icon: Home, description: 'Welcome to UDS Infrastructure' },
    { name: 'About Us', href: '/about', icon: Info, description: 'Our company, leadership, and values' },
    { name: 'Services', href: '/services', icon: Briefcase, description: 'Comprehensive infrastructure solutions' },
    { name: 'Contact', href: '/contact', icon: Mail, description: 'Get in touch with our team' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy-policy', icon: Shield, description: 'How we protect your data' },
    { name: 'Terms of Use', href: '/terms', icon: FileText, description: 'Website usage terms and conditions' },
    { name: 'Site Map', href: '/site-map', icon: Map, description: 'Complete website navigation' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-500 rounded-full mb-6">
              <Map className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Site Map
            </h1>
            <p className="text-xl text-primary-100">
              Complete navigation guide to all pages and services on our website
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Main Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <h2 className="text-3xl font-display font-bold text-primary-800 mb-2">
                  Main Pages
                </h2>
                <p className="text-neutral-600">
                  Primary navigation pages on our website
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {mainPages.map((page, index) => (
                  <motion.div
                    key={page.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link
                      href={page.href}
                      className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200 hover:border-secondary-500 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-secondary-50 rounded-lg flex items-center justify-center group-hover:bg-secondary-500 transition-colors">
                          <page.icon className="w-6 h-6 text-secondary-500 group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-primary-800 mb-1 group-hover:text-secondary-600 transition-colors">
                            {page.name}
                          </h3>
                          <p className="text-sm text-neutral-600">
                            {page.description}
                          </p>
                          <p className="text-xs text-neutral-400 mt-2 font-mono">
                            {page.href}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Service Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-6">
                <h2 className="text-3xl font-display font-bold text-primary-800 mb-2">
                  Service Pages
                </h2>
                <p className="text-neutral-600">
                  All {servicesData.length} specialized service verticals we offer
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData.map((service, index) => (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className="block bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200 hover:border-secondary-500 group h-full"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-100 to-secondary-50 rounded-lg flex items-center justify-center group-hover:from-secondary-500 group-hover:to-secondary-600 transition-all">
                          <div className="w-5 h-5 bg-secondary-500 rounded group-hover:bg-white transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold text-primary-800 mb-1 group-hover:text-secondary-600 transition-colors leading-snug">
                            {service.title}
                          </h3>
                          <p className="text-xs text-neutral-500 line-clamp-2">
                            {service.shortDesc}
                          </p>
                          <p className="text-xs text-neutral-400 mt-2 font-mono truncate">
                            /services/{service.slug}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Legal & Information Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="mb-6">
                <h2 className="text-3xl font-display font-bold text-primary-800 mb-2">
                  Legal & Information
                </h2>
                <p className="text-neutral-600">
                  Legal policies and website information
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {legalPages.map((page, index) => (
                  <motion.div
                    key={page.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link
                      href={page.href}
                      className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200 hover:border-primary-500 group"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary-800 transition-colors mb-4">
                          <page.icon className="w-6 h-6 text-primary-800 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-lg font-semibold text-primary-800 mb-2 group-hover:text-primary-600 transition-colors">
                          {page.name}
                        </h3>
                        <p className="text-sm text-neutral-600 mb-3">
                          {page.description}
                        </p>
                        <p className="text-xs text-neutral-400 font-mono">
                          {page.href}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Summary Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-br from-primary-900 to-primary-800 p-8 rounded-2xl shadow-lg text-white"
            >
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-secondary-400 mb-2">
                    {mainPages.length}
                  </div>
                  <div className="text-primary-100">Main Pages</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary-400 mb-2">
                    {servicesData.length}
                  </div>
                  <div className="text-primary-100">Service Pages</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary-400 mb-2">
                    {legalPages.length}
                  </div>
                  <div className="text-primary-100">Legal Pages</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-primary-700 text-center">
                <p className="text-primary-100 text-sm">
                  Last Updated: February 11, 2026
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
