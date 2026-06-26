"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Classes", href: "/classes" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-emerald-100 bg-white/80 shadow-xl backdrop-blur-xl"
          : "bg-white/10 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link
          href="/"
          className="bg-gradient-to-r from-emerald-700 via-green-600 to-teal-600 bg-clip-text text-3xl font-extrabold tracking-wide text-transparent"
        >
          Yoga Studio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-semibold transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:transition-all after:duration-300 ${
                  isActive
                    ? "text-emerald-600 after:w-full after:bg-emerald-600"
                    : "text-emerald-900 hover:text-emerald-600 after:w-0 after:bg-emerald-600 hover:after:w-full"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
      <Link
  href="/book-class"
  className="hidden rounded-full bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-emerald-300 md:block"
>
  Book Class
</Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full p-2 text-emerald-700 transition hover:bg-emerald-100 md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white/95 shadow-2xl backdrop-blur-xl transition-all duration-500 md:hidden ${
          isOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="py-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block border-b border-emerald-100 px-6 py-4 text-lg font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-100 text-emerald-700"
                    : "text-emerald-900 hover:bg-emerald-50 hover:pl-8 hover:text-emerald-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

     <div className="p-6">
  <Link
    href="/book-class"
    onClick={() => setIsOpen(false)}
    className="block w-full rounded-xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 py-3 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-emerald-300"
  >
    Book Class
  </Link>
</div>
        </div>
      </div>
    </header>
  );
}   