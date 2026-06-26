import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Yoga Classes in Agra | Best Yoga Studio in Agra",
  description:
    "Join the best yoga classes in Agra. Explore Hatha Yoga, Power Yoga, Meditation, Pranayama, Kids Yoga, Prenatal Yoga and Weight Loss Yoga.",
  keywords: [
    "Yoga Classes in Agra",
    "Best Yoga Studio Agra",
    "Power Yoga Agra",
    "Meditation Classes Agra",
    "Yoga Near Me",
  ],
  alternates: {
    canonical: "/classes",
  },
};

const classes = [
  {
    title: "Hatha Yoga",
    image: "/images/classes/hatha.jpg",
    description:
      "Traditional yoga focused on flexibility, posture and breathing.",
    href: "/classes/hatha-yoga",
  },
  {
    title: "Power Yoga",
    image: "/images/classes/power.jpg",
    description:
      "High-energy yoga sessions designed for strength and weight loss.",
    href: "/classes/power-yoga",
  },
  {
    title: "Meditation",
    image: "/images/classes/meditation.jpg",
    description:
      "Calm your mind and reduce stress through guided meditation.",
    href: "/classes/meditation",
  },
  {
    title: "Pranayama",
    image: "/images/classes/pranayama.jpg",
    description:
      "Improve breathing capacity with ancient pranayama techniques.",
    href: "/classes/pranayama",
  },
  {
    title: "Kids Yoga",
    image: "/images/classes/kids.jpg",
    description:
      "Fun yoga sessions specially designed for children.",
    href: "/classes/kids-yoga",
  },
  {
    title: "Prenatal Yoga",
    image: "/images/classes/prenatal.jpg",
    description:
      "Safe yoga sessions for expecting mothers.",
    href: "/classes/prenatal-yoga",
  },
];

export default function ClassesPage() {
  return (
    <main>

      {/* Hero */}

      <section className="bg-green-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Yoga Classes in Agra
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8">
            Looking for professional yoga classes in Agra?
            Our certified instructors offer Hatha Yoga,
            Power Yoga, Meditation, Pranayama,
            Kids Yoga and Prenatal Yoga for every age group.
          </p>

        </div>

      </section>

      {/* Intro */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Find the Perfect Yoga Program
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Whether you are a beginner or an experienced practitioner,
            our yoga studio offers personalized classes to improve
            flexibility, strength, posture, breathing and overall wellness.
            Our experienced trainers ensure that every student receives
            proper guidance in a peaceful environment.
          </p>

        </div>

      </section>

      {/* Classes */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {classes.map((item) => (

              <article
                key={item.title}
                className="rounded-3xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition"
              >

                <Image
                  src={item.image}
                  alt={`${item.title} Classes in Agra`}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover"
                />

                <div className="p-8">

                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800"
                  >
                    Learn More
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}