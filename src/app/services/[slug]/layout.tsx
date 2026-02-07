import type { Metadata } from 'next';
import { servicesData, getServiceBySlug } from '@/app/lib/servicesData';

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: service.title,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | UDS Infrastructure`,
      description: service.shortDesc,
      url: `https://udsinfra.com/services/${service.slug}`,
      images: [
        {
          url: service.mainImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default function ServiceDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
