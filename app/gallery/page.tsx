import type { Metadata } from "next";
import Image from "next/image";

import { galleryImages } from "@/data/gallery";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Yoga Gallery | Yoga Studio Agra",
  description:
    "Explore our yoga gallery featuring yoga classes, meditation sessions, trainers, workshops, and our yoga studio in Agra.",
  keywords: [
    "Yoga Gallery Agra",
    "Yoga Studio Photos",
    "Meditation Gallery",
    "Yoga Classes Agra",
    "Yoga Images",
  ],
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Yoga Studio Agra Gallery",
    description:
      "Gallery showcasing yoga classes, meditation sessions, workshops and studio images.",
  };

  return (
    <main className="pt-24 pb-20">
      <JsonLd data={schema} />

      <section className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Our Gallery
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Explore Our Yoga Studio
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Browse our yoga classes, meditation sessions, yoga workshops,
            experienced instructors, and peaceful studio environment in Agra.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={500}
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="bg-white p-5">
                <h2 className="text-lg font-semibold">
                  {image.category}
                </h2>

                <p className="mt-2 text-gray-600">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}