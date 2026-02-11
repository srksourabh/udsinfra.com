'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { servicesData } from '@/app/lib/servicesData';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
  ],
};

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const certifications = [
  'MSME Registered',
  'Govt. Certified',
  'Quality Assured',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Generate dynamic services array from servicesData
  const dynamicServices = servicesData.map(service => ({
    label: service.title,
    href: `/services/${service.slug}`
  }));

  // Split services into two columns for better layout
  const servicesCol1 = dynamicServices.slice(0, 7);
  const servicesCol2 = dynamicServices.slice(7, 14);

  return (
    <footer className="bg-primary-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <Image
                src="/logo.png"
                alt="UDS Infrastructure"
                width={56}
                height={56}
                className="h-14 w-auto brightness-0 invert"
              />
              <div>
                <h2 className="font-display font-bold text-xl text-white leading-tight">
                  UDS INFRASTRUCTURE
                </h2>
                <p className="text-xs text-primary-300 tracking-wider uppercase">
                  Private Limited
                </p>
              </div>
            </Link>

            <a
              href="https://www.ultimatesolutions.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-secondary-400 hover:text-secondary-300 font-semibold text-sm mb-3 uppercase tracking-wider transition-colors"
            >
              A unit of Ultimate Group &rarr;
            </a>
            <p className="text-neutral-300 mb-6 leading-relaxed max-w-md">
              Backed by 16+ years of Ultimate Group stability, UDS Infrastructure
              brings fresh energy to civil infrastructure, building management
              systems, and MEP solutions across India.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Registered Office</p>
                  <p className="text-neutral-200 text-sm leading-relaxed">
                    EC73, Rajdanga Main Road<br />
                    Kolkata 700107, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <a href="mailto:info@udsinfra.com" className="text-neutral-200 hover:text-secondary-500 transition-colors text-sm">
                    info@udsinfra.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Phone</p>
                  <a href="tel:+913340007520" className="text-neutral-200 hover:text-secondary-500 transition-colors text-sm">
                    033 4000 7520
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services Links - Column 1 */}
          <div>
            <h3 className="font-display font-semibold text-lg text-white mb-6 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {servicesCol1.map((link, index) => (
                <li key={`service-${index}`}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-secondary-500 transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-700 rounded-full group-hover:bg-secondary-500 transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links - Column 2 */}
          <div>
            <h3 className="font-display font-semibold text-lg text-white mb-6 uppercase tracking-wider lg:opacity-0 pointer-events-none">
              Services
            </h3>
            <ul className="space-y-3">
              {servicesCol2.map((link, index) => (
                <li key={`service-col2-${index}`}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-secondary-500 transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-700 rounded-full group-hover:bg-secondary-500 transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-semibold text-lg text-white mb-6 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-secondary-500 transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-700 rounded-full group-hover:bg-secondary-500 transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-display font-semibold text-lg text-white mb-6 uppercase tracking-wider">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1.5 bg-primary-900 text-primary-300 text-xs rounded-lg font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>

            {/* Quick Contact */}
            <h4 className="font-semibold text-sm text-white mb-3 uppercase tracking-wider">
              Quick Contact
            </h4>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Get a Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-neutral-400 text-sm text-center md:text-left">
              <p>
                &copy; {currentYear} UDS Infrastructure Private Limited.
                A unit of{' '}
                <a
                  href="https://www.ultimatesolutions.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-400 hover:text-secondary-300 transition-colors"
                >
                  Ultimate Group
                </a>
                . All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-900 hover:bg-secondary-500 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy-policy" className="text-neutral-400 hover:text-secondary-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral-400 hover:text-secondary-500 transition-colors">
                Terms of Use
              </Link>
              <Link href="/site-map" className="text-neutral-400 hover:text-secondary-500 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
