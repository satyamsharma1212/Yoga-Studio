import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yogastudioagra.com"),

  title: {
    default: "Yoga Studio Agra",
    template: "%s | Yoga Studio Agra",
  },

  description:
    "Best Yoga Classes in Agra. Join Hatha Yoga, Power Yoga, Meditation, Pranayama and Wellness Programs.",

  keywords: [
    "Yoga Studio Agra",
    "Yoga Classes Agra",
    "Meditation Agra",
    "Power Yoga",
    "Hatha Yoga",
    "Yoga Near Me",
  ],

  authors: [
    {
      name: "Yoga Studio Agra",
    },
  ],

  creator: "Yoga Studio Agra",

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Yoga Studio Agra",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Navbar />

        <main className="pt-20 min-h-screen">
          {children}
        </main>

          <Footer />
      </body>
    </html>
  );
}