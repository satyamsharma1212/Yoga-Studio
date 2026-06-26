import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import Programs from "@/components/sections/Programs";
import { generateMetadata } from "@/lib/seo";
import Gallery from "@/components/sections/Gallery";


export const metadata = generateMetadata({
  title: "Best Yoga Classes in Agra",
  description:
    "Join the best yoga classes in Agra. Hatha Yoga, Power Yoga, Meditation, Pranayama, Weight Loss Yoga, Kids Yoga and more.",
  url: "/",
  keywords: [
    "Yoga Classes Agra",
    "Best Yoga Studio Agra",
    "Meditation Classes",
    "Power Yoga",
    "Hatha Yoga",
  ],
});
export default function Home() {
  return (
      <>
        <Hero />
        <AboutSection />
        <Programs />
        <Gallery />
      </>
  );
}