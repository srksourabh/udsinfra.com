import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about UDS Infrastructure Pvt. Ltd. — a unit of the Ultimate Group with 16+ years of heritage. Meet our leadership team and discover our mission to engineer the backbone of India.',
  openGraph: {
    title: 'About Us | UDS Infrastructure',
    description:
      'A unit of Ultimate Group with 16+ years of heritage. Meet the leadership driving modern infrastructure across India.',
    url: 'https://udsinfra.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
