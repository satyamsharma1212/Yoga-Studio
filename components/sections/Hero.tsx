"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-green-300/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-green-700 font-medium">
            🧘 Best Yoga Studio in Agra
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Transform Your
            <span className="text-green-700"> Mind </span>
            & Body Through Yoga
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Discover inner peace with certified yoga trainers in Agra.
            Join beginner, power yoga, meditation, pranayama, and
            wellness classes designed for every age.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-green-700 px-7 py-4 text-white font-semibold hover:bg-green-800 transition"
            >
              Book Free Trial
              <ArrowRight size={20} />
            </Link>

            <Link
              href="tel:+919999999999"
              className="flex items-center gap-2 rounded-full border border-green-700 px-7 py-4 text-green-700 font-semibold hover:bg-green-50 transition"
            >
              <Phone size={18} />
              Call Now
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-green-700">500+</h3>
              <p className="text-gray-600">Happy Students</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-700">10+</h3>
              <p className="text-gray-600">Expert Trainers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-700">8+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="/images/hero-yoga.png"
            alt="Yoga Studio Agra"
            className="w-full max-w-lg mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}