import type { Metadata } from "next";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string[];
  url?: string;
  image?: string;
};

const siteName = "Yoga Studio Agra";
const siteUrl = "https://www.yogastudioagra.com";

export function generateMetadata({
  title,
  description,
  keywords = [],
  url = "",
  image = "/images/og-image.jpg",
}: SEOProps): Metadata {
  const fullUrl = `${siteUrl}${url}`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(siteUrl),

    alternates: {
      canonical: fullUrl,
    },

    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}