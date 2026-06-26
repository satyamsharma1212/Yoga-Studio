import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Yoga Studio Agra",
  description:
    "Contact Yoga Studio Agra for yoga classes, meditation sessions, membership plans, and free trial bookings.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <ContactSection />
    </main>
  );
}