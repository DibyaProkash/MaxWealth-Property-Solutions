
import AboutUsSection from '@/components/sections/about-us-section';
import AnimatedSection from '@/components/layout/animated-section';
import Footer from '@/components/layout/footer';
import BackButton from '@/components/layout/back-button';

export default function OurCompanyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-6 py-8 md:py-16">
          <AnimatedSection>
            <div className="mb-8">
              <BackButton />
            </div>
          </AnimatedSection>
        </div>
        {/* AboutUsSection now contains mission, vision, values, tailored solutions, agency strength */}
        <AboutUsSection /> 
      </main>
      <Footer />
    </div>
  );
}
