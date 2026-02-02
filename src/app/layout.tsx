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

export const metadata: Metadata = {
  title: {
    default: 'UDS Infrastructure Pvt. Ltd. | Modern Infrastructure Solutions',
    template: '%s | UDS Infrastructure',
  },
  description:
    'UDS Infrastructure Private Limited - A unit of Ultimate Group. Bringing modern, tech-forward solutions to Civil Construction, BMS, and MEP across India.',
  keywords: [
    'civil infrastructure',
    'building management systems',
    'BMS',
    'MEP',
    'construction',
    'India',
    'Kolkata',
    'Ultimate Group',
    'smart buildings',
    'modern construction',
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://udsinfra.com',
    siteName: 'UDS Infrastructure',
    title: 'UDS Infrastructure Pvt. Ltd. | Modern Infrastructure Solutions',
    description:
      'A unit of Ultimate Group. Modern, tech-forward Civil Construction, BMS, and MEP solutions.',
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
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
