
import AboutUsSection from '@/components/sections/about-us-section';
import AnimatedSection from '@/components/layout/animated-section';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, HomeIcon } from 'lucide-react';
import Footer from '@/components/layout/footer';

export default function OurCompanyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <AnimatedSection>
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <Link href="/about" passHref>
                <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to About Overview
                </Button>
                </Link>
                <Link href="/" passHref>
                <Button variant="outline">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    Back to Home
                </Button>
                </Link>
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
