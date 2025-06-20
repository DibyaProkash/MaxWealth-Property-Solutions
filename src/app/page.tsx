
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AchievementsSection from '@/components/sections/achievements-section'; 
import AboutUsSection from '@/components/sections/about-us-section';
import ComprehensivePropertyServices from '@/components/sections/comprehensive-property-services';
import ProvenProcessSection from '@/components/sections/proven-process-section'; // New import
import ServiceLocationsHomepageSection from '@/components/sections/service-locations-homepage-section';
import ContentSection from '@/components/sections/content-section';
// import CalculatorsSection from '@/components/sections/calculators-section'; // Removed
// import RoadmapSection from '@/components/sections/roadmap-section'; // Removed
import TestimonialsSection from '@/components/sections/testimonials-section';
import PartnersSection from '@/components/sections/partners-section';
import BookingSection from '@/components/sections/booking-section';
import ContactSection from '@/components/sections/contact-section';
import AnimatedSection from '@/components/layout/animated-section';
import { articlesData, partnersData, testimonialsData } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
        
        <AnimatedSection delay="delay-50" className="relative z-10 -mt-16 md:-mt-20"> 
          <AchievementsSection />
        </AnimatedSection>

        <AnimatedSection delay="delay-100" id="about">
          <AboutUsSection />
        </AnimatedSection>
        
        <AnimatedSection delay="delay-100">
          <div className="bg-secondary"> 
            <ComprehensivePropertyServices />
          </div>
        </AnimatedSection>

        <AnimatedSection delay="delay-100">
          <ProvenProcessSection />
        </AnimatedSection>

        <AnimatedSection delay="delay-100">
          <ServiceLocationsHomepageSection />
        </AnimatedSection>
        
        {articlesData.length > 0 && (
          <AnimatedSection delay="delay-100" id="content">
            <ContentSection />
          </AnimatedSection>
        )}

        {/* CalculatorsSection removed - content moved to /resources/calculators */}
        {/* RoadmapSection removed - content moved to /resources/roadmap */}

        {testimonialsData.length > 0 && (
          <AnimatedSection delay="delay-100" id="testimonials">
            <TestimonialsSection />
          </AnimatedSection>
        )}

        {partnersData.length > 0 && (
          <AnimatedSection delay="delay-100">
            <PartnersSection />
          </AnimatedSection>
        )}
        
        <AnimatedSection delay="delay-100">
          <BookingSection />
        </AnimatedSection>
        <AnimatedSection delay="delay-100" id="contact">
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
