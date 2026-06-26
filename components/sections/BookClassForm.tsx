
"use client";

import { useState } from "react";

export default function BookClassForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // API call here

    setTimeout(() => {
      alert("Thank you! We'll contact you soon.");
      setLoading(false);
    }, 1500);
  }

  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white py-24">
      <div className="mx-auto max-w-3xl px-6">

        {/* Heading */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Book Your Free Trial
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Reserve Your Yoga Class
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Fill out the form below and our yoga experts will contact you
            shortly to confirm your free trial class.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-16 space-y-6 rounded-3xl border border-gray-100 bg-white p-10 shadow-2xl"
        >
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
          />

          <select
            required
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 shadow-sm outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
          >
            <option value="">Select Class</option>
            <option>Hatha Yoga</option>
            <option>Power Yoga</option>
            <option>Meditation</option>
            <option>Pranayama</option>
            <option>Kids Yoga</option>
          </select>

          <select
            required
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 shadow-sm outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
          >
            <option value="">Preferred Batch</option>
            <option>Morning (6:00 AM - 8:00 AM)</option>
            <option>Evening (5:00 PM - 7:00 PM)</option>
          </select>

          <textarea
            rows={5}
            placeholder="Tell us about your fitness goals..."
            className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Booking..." : "Book Free Trial"}
          </button>
        </form>
      </div>
    </section>
  );
}

