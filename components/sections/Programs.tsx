"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Dumbbell,
  Flower2,
  Brain,
  Baby,
  Users,
} from "lucide-react";

const programs = [
  {
    title: "Hatha Yoga",
    description:
      "Improve flexibility, posture, and overall wellness with traditional Hatha Yoga.",
    icon: Heart,
    href: "/classes/hatha-yoga",
  },
  {
    title: "Power Yoga",
    description:
      "Build strength, burn calories, and increase endurance with energetic sessions.",
    icon: Dumbbell,
    href: "/classes/power-yoga",
  },
  {
    title: "Meditation",
    description:
      "Reduce stress, improve focus, and experience deep relaxation.",
    icon: Brain,
    href: "/classes/meditation",
  },
  {
    title: "Pranayama",
    description:
      "Master breathing techniques to improve lung capacity and mental clarity.",
    icon: Flower2,
    href: "/classes/pranayama",
  },
  {
    title: "Prenatal Yoga",
    description:
      "Gentle yoga sessions specially designed for expecting mothers.",
    icon: Baby,
    href: "/classes/prenatal-yoga",
  },
  {
    title: "Kids Yoga",
    description:
      "Fun and engaging yoga classes that improve flexibility and confidence.",
    icon: Users,
    href: "/classes/kids-yoga",
  },
];

export default function Programs() {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold uppercase tracking-widest">
            Our Programs
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Yoga Classes Designed For Everyone
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Whether you're a beginner or an experienced practitioner, we have
            yoga programs that help you achieve better physical and mental
            wellness.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition"
            >
              <program.icon className="h-12 w-12 text-green-700" />

              <h3 className="mt-6 text-2xl font-semibold">
                {program.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {program.description}
              </p>

              <Link
                href={program.href}
                className="inline-flex items-center gap-2 mt-6 font-semibold text-green-700 group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}