
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AchievementsSection from '@/components/sections/achievements-section'; // New import
import AboutUsSection from '@/components/sections/about-us-section';
import ContentSection from '@/components/sections/content-section';
import CalculatorsSection from '@/components/sections/calculators-section';
import RoadmapSection from '@/components/sections/roadmap-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import PartnersSection from '@/components/sections/partners-section';
import BookingSection from '@/components/sections/booking-section';
import ContactSection from '@/components/sections/contact-section';
import FaqSection from '@/components/sections/faq-section';
import AnimatedSection from '@/components/layout/animated-section';
import { articlesData, partnersData, testimonialsData, faqData } from '@/lib/data';

// Navbar and LiveChatWidget are now in RootLayout

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar is now in RootLayout */}
      <main className="flex-grow">
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
        
        <AnimatedSection delay="delay-50"> {/* Adjusted delay for smooth flow */}
          <AchievementsSection />
        </AnimatedSection>

        <AnimatedSection delay="delay-100">
          <AboutUsSection />
        </AnimatedSection>
        
        {articlesData.length > 0 && (
          <AnimatedSection delay="delay-100">
            <ContentSection />
          </AnimatedSection>
        )}

        <AnimatedSection delay="delay-100">
          <CalculatorsSection />
        </AnimatedSection>
        <AnimatedSection delay="delay-100">
          <RoadmapSection />
        </AnimatedSection>

        {testimonialsData.length > 0 && (
          <AnimatedSection delay="delay-100">
            <TestimonialsSection />
          </AnimatedSection>
        )}

        {partnersData.length > 0 && (
          <AnimatedSection delay="delay-100">
            <PartnersSection />
          </AnimatedSection>
        )}

        {faqData.length > 0 && (
          <AnimatedSection delay="delay-100">
            <FaqSection />
          </AnimatedSection>
        )}
        
        <AnimatedSection delay="delay-100">
          <BookingSection />
        </AnimatedSection>
        <AnimatedSection delay="delay-100">
          <ContactSection />
        </AnimatedSection>
      </main>
      {/* LiveChatWidget is now in RootLayout */}
      <Footer />
    </div>
  );
}
