import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <ServicesOverview />
      <BenefitsSection />
      <TestimonialsSection />
      <CTABanner />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
