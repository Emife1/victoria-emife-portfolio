import HeroSection from "@/components/sections/HeroSection";
import TimelineScroller from "@/components/sections/TimelineScroller";
import MetricsDashboard from "@/components/sections/MetricsDashboard";
import PortfolioCarousel from "@/components/sections/PortfolioCarousel";
import ContactSection from "@/components/sections/ContactSection";
import AIChatWidget from "@/components/AIChatWidget";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-white">
      <HeroSection />
      <TimelineScroller />
      <MetricsDashboard />
      <PortfolioCarousel />
      <ContactSection />
      <AIChatWidget />
    </main>
  );
}