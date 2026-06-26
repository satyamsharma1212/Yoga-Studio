import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
 
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Classes", href: "/classes" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo & About */}
          <div>
            <h2 className="text-3xl font-bold text-emerald-300">
              Yoga Studio
            </h2>

            <p className="mt-5 leading-7 text-emerald-100">
              Discover inner peace through yoga, meditation and wellness.
              Join Agra's trusted yoga studio for a healthier body and mind.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-emerald-500"
              >
              
              </a>

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-pink-500"
              >
         
              </a>

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-red-500"
              >
         
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-emerald-100 transition hover:pl-2 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Our Classes
            </h3>

            <ul className="space-y-3 text-emerald-100">
              <li>Hatha Yoga</li>
              <li>Power Yoga</li>
              <li>Meditation</li>
              <li>Pranayama</li>
              <li>Kids Yoga</li>
              <li>Weight Loss Yoga</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Contact Info
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-emerald-300" size={20} />
                <p className="text-emerald-100">
                  Agra, Uttar Pradesh, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-emerald-300" size={20} />
                <p className="text-emerald-100">
                  +91 98765 43210
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-emerald-300" size={20} />
                <p className="text-emerald-100">
                  info@yogastudioagra.com
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-emerald-200">
          © {new Date().getFullYear()} Yoga Studio Agra. All Rights Reserved.
          <br />
          Designed & Developed with ❤️ by Satyam Sharma.
        </div>

      </div>
    </footer>
  );
}