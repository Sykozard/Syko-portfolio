import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import PopularRequests from "@/components/PopularRequests";
import RecentWorkSection from "@/components/RecentWorkSection";
import FeaturedSection from "@/components/FeaturedSection";
import PricingSection from "@/components/PricingSection";
import WhyMeSection from "@/components/WhyMeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#09090B] text-white selection:bg-purple-500/30">
      <CustomCursor />
      <ParticleBackground />

      <Navbar />

      <main className="relative z-10 flex flex-col gap-32 pb-32 pt-0">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <PopularRequests />
        <RecentWorkSection />
        <FeaturedSection />
        <PricingSection />
        <WhyMeSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
