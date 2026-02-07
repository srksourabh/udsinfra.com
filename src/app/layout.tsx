import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Navbar, Footer } from '@/components/layout';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'UDS Infrastructure Pvt. Ltd.',
  url: 'https://udsinfra.com',
  logo: 'https://udsinfra.com/logo.png',
  description:
    'A unit of Ultimate Group. Modern infrastructure solutions across Civil Construction, BMS, MEP, Electrical T&D, Fire Safety, CCTV, and more.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'EC73, Rajdanga Main Road, Kasba',
    addressLocality: 'Kolkata',
    addressRegion: 'West Bengal',
    postalCode: '700107',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-33-4000-7520',
    contactType: 'customer service',
    email: 'info@udsinfra.com',
    availableLanguage: ['English', 'Hindi', 'Bengali'],
  },
  parentOrganization: {
    '@type': 'Organization',
    name: 'Ultimate Group',
    url: 'https://ultimatesolutions.in',
  },
};

export const metadata: Metadata = {
  title: {
    default: 'UDS Infrastructure Pvt. Ltd. | Modern Infrastructure Solutions',
    template: '%s | UDS Infrastructure',
  },
  description:
    'UDS Infrastructure Pvt. Ltd. — A unit of Ultimate Group with 16+ years of heritage. End-to-end infrastructure solutions: Civil Construction, BMS, MEP, Electrical T&D, Fire Safety, CCTV, Access Control, Instrumentation, Fleet Management, and Facility Management across India.',
  keywords: [
    'civil infrastructure',
    'building management systems',
    'BMS',
    'MEP',
    'electrical transmission and distribution',
    'fire protection',
    'CCTV surveillance',
    'access control',
    'mechanical erection',
    'HVAC maintenance',
    'instrumentation and control',
    'fleet management',
    'construction equipment rentals',
    'medical equipment services',
    'facility management',
    'pest control',
    'construction India',
    'Kolkata',
    'Ultimate Group',
    'smart buildings',
    'infrastructure company India',
  ],
  authors: [{ name: 'UDS Infrastructure' }],
  creator: 'UDS Infrastructure Pvt. Ltd.',
  publisher: 'UDS Infrastructure Pvt. Ltd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://udsinfra.com'),
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://udsinfra.com',
    siteName: 'UDS Infrastructure',
    title: 'UDS Infrastructure Pvt. Ltd. | Modern Infrastructure Solutions',
    description:
      'A unit of Ultimate Group. 14 infrastructure service verticals spanning Civil, MEP, Electrical, Security, and Facility Management across India.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UDS Infrastructure - A unit of Ultimate Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UDS Infrastructure Pvt. Ltd.',
    description: 'Modern Infrastructure Solutions - A unit of Ultimate Group',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
