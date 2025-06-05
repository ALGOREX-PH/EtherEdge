import HeroSection from '@/components/hero-section';
import VisionSection from '@/components/vision-section';
import FeaturesSection from '@/components/features-section';
import ManifestoSection from '@/components/manifesto-section';
import RoadmapSection from '@/components/roadmap-section';
import GetStartedSection from '@/components/get-started-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <FeaturesSection />
      <RoadmapSection />
      <ManifestoSection />
      <GetStartedSection />
    </>
  );
}