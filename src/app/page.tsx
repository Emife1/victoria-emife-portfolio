import HeroSection from "@/components/sections/HeroSection";
import TimelineScroller from "@/components/sections/TimelineScroller";
import MetricsDashboard from "@/components/sections/MetricsDashboard";
import PortfolioCarousel from "@/components/sections/PortfolioCarousel";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <TimelineScroller />
      <MetricsDashboard />
      <PortfolioCarousel />
    </main>
  );
}
