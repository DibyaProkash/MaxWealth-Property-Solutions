
import AboutUsSection from '@/components/sections/about-us-section';
import AnimatedSection from '@/components/layout/animated-section';
import Footer from '@/components/layout/footer';
import BackButton from '@/components/layout/back-button';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HomeIcon } from 'lucide-react';

export default function OurCompanyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-6 py-8 md:py-16">
          <AnimatedSection>
            <div className="mb-8 flex flex-wrap gap-4">
              <BackButton />
              <Button variant="outline" asChild>
                <Link href="/">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
              </Button>
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
