import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import { Navbar, Footer } from '@/components/layout';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'UDS Infrastructure Pvt. Ltd. | Civil Infrastructure & BMS Solutions',
    template: '%s | UDS Infrastructure',
  },
  description:
    'UDS Infrastructure Private Limited (Ultimate Group) - Leading provider of civil infrastructure, Building Management Systems (BMS), and MEP solutions in India. Engineering excellence delivered.',
  keywords: [
    'civil infrastructure',
    'building management systems',
    'BMS',
    'MEP',
    'construction',
    'Kolkata',
    'India',
    'Ultimate Group',
    'infrastructure development',
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
    title: 'UDS Infrastructure Pvt. Ltd. | Civil Infrastructure & BMS Solutions',
    description:
      'Leading provider of civil infrastructure, Building Management Systems (BMS), and MEP solutions in India.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UDS Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UDS Infrastructure Pvt. Ltd.',
    description: 'Civil Infrastructure & BMS Solutions',
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
      <body
        className={`${inter.variable} ${oswald.variable} font-sans antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
