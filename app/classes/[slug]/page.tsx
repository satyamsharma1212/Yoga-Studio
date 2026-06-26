import type { Metadata } from "next";
import { notFound } from "next/navigation";

import FAQSection from "@/components/sections/FAQ";
import ClassHero from "@/components/sections/ClassHero";
import { yogaClasses } from "@/data/classes";
import JsonLd from "@/components/seo/JsonLd";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const yogaClass = yogaClasses.find(
    (item) => item.slug === slug
  );

  if (!yogaClass) {
    return {};
  }

  return {
    title: yogaClass.metaTitle,
    description: yogaClass.metaDescription,
    keywords: yogaClass.keywords,
    alternates: {
      canonical: `/classes/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return yogaClasses.map((item) => ({
    slug: item.slug,
  }));
}

export default async function YogaClassPage({
  params,
}: Props) {
  const { slug } = await params;

  const yogaClass = yogaClasses.find(
    (item) => item.slug === slug
  );

  if (!yogaClass) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",

    name: yogaClass.title,
    serviceType: yogaClass.title,
    description: yogaClass.metaDescription,

    provider: {
      "@type": "LocalBusiness",

      name: "Yoga Studio Agra",

      image: "https://yourdomain.com/logo.png",

      telephone: "+91XXXXXXXXXX",

      address: {
        "@type": "PostalAddress",
        addressLocality: "Agra",
        addressRegion: "Uttar Pradesh",
        postalCode: "282001",
        addressCountry: "IN",
      },
    },

    areaServed: {
      "@type": "City",
      name: "Agra",
    },
  };

  return (
    <main>
      <JsonLd data={schema} />

      <ClassHero
        title={yogaClass.title}
        description={yogaClass.shortDescription}
        image={yogaClass.heroImage}
      />

      <div className="max-w-7xl mx-auto px-6 py-20">

        <section>
          <h2 className="text-3xl font-bold">
            {yogaClass.content.heading}
          </h2>

          <div className="mt-6 space-y-6">
            {yogaClass.content.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-8 text-gray-700"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Benefits
          </h2>

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {yogaClass.benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-xl bg-green-50 p-4"
              >
                ✅ {benefit}
              </li>
            ))}
          </ul>
        </section>

        <FAQSection faqs={yogaClass.faqs} />

      </div>
    </main>
  );
}