import type { Metadata } from 'next';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'UDS Infrastructure Pvt. Ltd.',
  description:
    'Modern infrastructure solutions — Civil Construction, BMS, MEP, Electrical, Fire Safety, and more.',
  url: 'https://udsinfra.com',
  telephone: '+91-33-4000-7520',
  email: 'info@udsinfra.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'EC73, Rajdanga Main Road, Kasba',
    addressLocality: 'Kolkata',
    addressRegion: 'West Bengal',
    postalCode: '700107',
    addressCountry: 'IN',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
};

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with UDS Infrastructure — EC73, Rajdanga Main Road, Kolkata 700107. Call +91 33 4000 7520 or email info@udsinfra.com for project inquiries.',
  openGraph: {
    title: 'Contact Us | UDS Infrastructure',
    description:
      'Reach UDS Infrastructure for project inquiries. Kolkata HQ: +91 33 4000 7520 | info@udsinfra.com',
    url: 'https://udsinfra.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
