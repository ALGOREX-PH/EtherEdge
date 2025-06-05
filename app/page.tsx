import HeroSection from '@/components/sections/hero';
import ManifestoSection from '@/components/sections/manifesto';
import FeaturesSection from '@/components/features-section';
import PersonaSelector from '@/components/sections/persona-selector';
import GetStartedSection from '@/components/get-started-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ManifestoSection />
      <FeaturesSection />
      <PersonaSelector />
      <GetStartedSection />
    </div>
  );
}