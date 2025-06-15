
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AchievementsSection from '@/components/sections/achievements-section'; 
import AboutUsSection from '@/components/sections/about-us-section';
import ContentSection from '@/components/sections/content-section';
import CalculatorsSection from '@/components/sections/calculators-section';
import RoadmapSection from '@/components/sections/roadmap-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import PartnersSection from '@/components/sections/partners-section';
import BookingSection from '@/components/sections/booking-section';
import ContactSection from '@/components/sections/contact-section';
// import FaqSection from '@/components/sections/faq-section'; // Removed, FAQ is now a separate page
import AnimatedSection from '@/components/layout/animated-section';
import { articlesData, partnersData, testimonialsData } from '@/lib/data'; // Removed faqData import

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
        
        {articlesData.length > 0 && (
          <AnimatedSection delay="delay-100" id="content">
            <ContentSection />
          </AnimatedSection>
        )}

        <AnimatedSection delay="delay-100" id="calculators">
          <CalculatorsSection />
        </AnimatedSection>
        <AnimatedSection delay="delay-100">
          <RoadmapSection />
        </AnimatedSection>

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

        {/* 
          FAQ section removed from homepage. It's now under /resources/faq
          {faqData.length > 0 && (
            <AnimatedSection delay="delay-100" id="faq">
              <FaqSection />
            </AnimatedSection>
          )} 
        */}
        
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
