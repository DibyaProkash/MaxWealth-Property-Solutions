
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ConciergeBell, HomeIcon } from 'lucide-react';
import AnimatedSection from '@/components/layout/animated-section';
import ServicesSectionHighlights from '@/components/sections/services-section-highlights';
import Footer from '@/components/layout/footer';

export default function OurServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-background text-foreground">
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
            <header className="text-center mb-12 md:mb-16">
              <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                  <ConciergeBell className="h-10 w-10 text-primary" />
              </div>
              <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Our Comprehensive Services
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
                Discover the range of expert services MaxWealth PS offers to make your property journey seamless and successful.
              </p>
            </header>
          </AnimatedSection>

          <AnimatedSection delay="delay-100">
            <ServicesSectionHighlights />
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
