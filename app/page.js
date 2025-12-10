import CategoryCarousel from "@/components/homepage/CategoryCarousel";
import Features from "@/components/homepage/features";
import HeroSection from "@/components/homepage/heroSection";
import HowItWorks from "@/components/homepage/howItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans ">
      <HeroSection />
      <Features />
      <HowItWorks/>
      <CategoryCarousel/>
    </div>
  );
}
