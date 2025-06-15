
import AboutUsSection from '@/components/sections/about-us-section';
import AnimatedSection from '@/components/layout/animated-section';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/layout/footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <AnimatedSection>
            <Link href="/" passHref>
              <Button variant="outline" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </AnimatedSection>
        </div>
        {/* AboutUsSection includes its own padding and structure */}
        <AboutUsSection />
      </main>
      <Footer />
    </div>
  );
}
