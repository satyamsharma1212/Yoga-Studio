import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-100 py-24">

      {/* Background Blur */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-green-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            Contact Us
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
            Let's Start Your Yoga Journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Have questions about our yoga classes, memberships, or trial
            sessions? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Contact Card */}
          <div className="rounded-3xl border border-white/50 bg-white/70 p-10 shadow-2xl backdrop-blur-xl">

            <div className="space-y-8">

              <div className="flex items-start gap-5">
                <div className="rounded-2xl bg-green-100 p-4">
                  <MapPin className="text-green-700" size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Visit Us
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Agra, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="rounded-2xl bg-green-100 p-4">
                  <Phone className="text-green-700" size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Call Us
                  </h3>

                  <p className="mt-2 text-gray-600">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="rounded-2xl bg-green-100 p-4">
                  <Mail className="text-green-700" size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Email
                  </h3>

                  <p className="mt-2 text-gray-600">
                    info@yogastudioagra.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="rounded-2xl bg-green-100 p-4">
                  <Clock className="text-green-700" size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Working Hours
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Monday – Saturday
                  </p>

                  <p className="text-gray-600">
                    6:00 AM – 8:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <form className="rounded-3xl bg-white p-10 shadow-2xl">

          <div className="grid gap-6">

  <input
    type="text"
    placeholder="Your Name"
    className="w-full rounded-2xl border border-green-100 bg-white px-5 py-4 text-gray-800 placeholder:text-gray-400 shadow-sm transition-all duration-300 outline-none hover:border-green-300 hover:shadow-md focus:border-green-600 focus:ring-4 focus:ring-green-100"
  />

  <input
    type="email"
    placeholder="Email Address"
    className="w-full rounded-2xl border border-green-100 bg-white px-5 py-4 text-gray-800 placeholder:text-gray-400 shadow-sm transition-all duration-300 outline-none hover:border-green-300 hover:shadow-md focus:border-green-600 focus:ring-4 focus:ring-green-100"
  />

  <input
    type="tel"
    placeholder="Phone Number"
    className="w-full rounded-2xl border border-green-100 bg-white px-5 py-4 text-gray-800 placeholder:text-gray-400 shadow-sm transition-all duration-300 outline-none hover:border-green-300 hover:shadow-md focus:border-green-600 focus:ring-4 focus:ring-green-100"
  />

  <textarea
    rows={5}
    placeholder="Your Message"
    className="w-full rounded-2xl border border-green-100 bg-white px-5 py-4 text-gray-800 placeholder:text-gray-400 shadow-sm transition-all duration-300 outline-none hover:border-green-300 hover:shadow-md focus:border-green-600 focus:ring-4 focus:ring-green-100 resize-none"
  />

  <button
    type="submit"
    className="group flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-600 via-green-700 to-green-800 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl"
  >
    <span className="transition-all duration-300 group-hover:mr-2">
      Send Message
    </span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  </button>

</div>

          </form>

        </div>
      </div>
    </section>
  );
}