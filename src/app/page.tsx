
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutUsSection from '@/components/sections/about-us-section';
import ContentSection from '@/components/sections/content-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import PartnersSection from '@/components/sections/partners-section';
import BookingSection from '@/components/sections/booking-section';
import ContactSection from '@/components/sections/contact-section';
import AnimatedSection from '@/components/layout/animated-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
        <AnimatedSection delay="delay-100">
          <AboutUsSection />
        </AnimatedSection>
        <AnimatedSection delay="delay-100">
          <ContentSection />
        </AnimatedSection>
        <AnimatedSection delay="delay-100">
          <TestimonialsSection />
        </AnimatedSection>
        <AnimatedSection delay="delay-100">
          <PartnersSection />
        </AnimatedSection>
        <AnimatedSection delay="delay-100">
          <BookingSection />
        </AnimatedSection>
        <AnimatedSection delay="delay-100">
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
