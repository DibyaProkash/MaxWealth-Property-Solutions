import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutUsSection from '@/components/sections/about-us-section';
import ContentSection from '@/components/sections/content-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import PartnersSection from '@/components/sections/partners-section';
import BookingSection from '@/components/sections/booking-section';
import MapSection from '@/components/sections/map-section';
import ContactSection from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutUsSection />
        <ContentSection />
        <TestimonialsSection />
        <PartnersSection />
        <BookingSection />
        <MapSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
