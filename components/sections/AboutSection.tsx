"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const features = [
  "Certified Yoga Trainers",
  "Beginner Friendly Classes",
  "Morning & Evening Batches",
  "Personal Attention",
  "Meditation & Pranayama",
  "Peaceful Environment",
];

export default function AboutSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              About Our Studio
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Experience the Best Yoga Classes in Agra
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Yoga Studio Agra, we believe yoga is more than just exercise—
              it is a journey toward a healthier body, a calmer mind, and a
              balanced lifestyle. Our certified instructors provide
              personalized guidance for beginners and experienced practitioners.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Whether your goal is weight loss, flexibility, stress relief, or
              overall wellness, our yoga programs are designed to help you
              achieve lasting results in a supportive environment.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-600" size={22} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex mt-10 rounded-full bg-green-700 px-8 py-4 text-white font-semibold hover:bg-green-800 transition"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/images/about/about-yoga.jpg"
              alt="Yoga Studio in Agra"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-3xl font-bold text-green-700">10+</h3>
              <p className="text-gray-600">
                Years of Yoga Experience
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}