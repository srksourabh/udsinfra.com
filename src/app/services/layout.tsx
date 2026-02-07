import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore 14 service verticals from UDS Infrastructure — Civil Construction, BMS, Electrical T&D, Fire Safety, CCTV, Access Control, MEP, Instrumentation, Fleet Management, Equipment Rentals, Medical Equipment, Facility Management, Pest Control, and more.',
  openGraph: {
    title: 'Our Services | UDS Infrastructure',
    description:
      '14 infrastructure service verticals spanning Civil, MEP, Electrical, Security, and Facility Management across India.',
    url: 'https://udsinfra.com/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
