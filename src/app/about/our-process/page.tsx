
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Workflow, Settings2, HomeIcon } from 'lucide-react';
import AnimatedSection from '@/components/layout/animated-section';
import Footer from '@/components/layout/footer';
import BackButton from '@/components/layout/back-button';

export default function OurProcessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-background text-foreground">
        <div className="container mx-auto px-6 py-8 md:py-16">
          <AnimatedSection>
              <div className="mb-8">
                <BackButton />
              </div>
            <header className="text-center mb-12 md:mb-16">
              <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                  <Workflow className="h-10 w-10 text-primary" />
              </div>
              <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Our Streamlined Process
              </h1>
              <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn how MaxWealth PS guides you through every step of the home buying journey with clarity and expertise.
              </CardDescription>
            </header>
          </AnimatedSection>

          <AnimatedSection delay="delay-100">
            <Card className="max-w-3xl mx-auto shadow-lg bg-card">
              <CardContent className="p-6 md:p-10 text-center">
                  <Settings2 className="h-16 w-16 text-primary mx-auto mb-6 opacity-50" />
                  <h2 className="font-headline text-2xl text-primary font-semibold mb-3">
                      Content Coming Soon!
                  </h2>
                  <p className="text-muted-foreground mb-6 font-body">
                      We are currently detailing our proven process to ensure we provide you with the clearest understanding of how we achieve success for our clients. Please check back shortly for a comprehensive overview.
                  </p>
                  <p className="text-sm text-muted-foreground font-body">
                      In the meantime, feel free to <Link href="/contact" className="text-accent hover:underline">contact us</Link> with any questions.
                  </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
