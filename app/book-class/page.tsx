import type { Metadata } from "next";
import BookClassForm from "@/components/sections/BookClassForm";

export const metadata: Metadata = {
  title: "Book a Yoga Class | Yoga Studio Agra",
  description:
    "Book your free yoga trial class in Agra. Choose from Hatha Yoga, Power Yoga, Meditation, and more.",
};

export default function BookClassPage() {
  return (
    <main className="pt-20">
      <BookClassForm />
    </main>
  );
}