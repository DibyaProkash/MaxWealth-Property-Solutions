
"use client"; // Required for Accordion client component

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqData, type FaqItem } from '@/lib/data';
import AnimatedSection from '@/components/layout/animated-section';
import { HelpCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from '@/components/layout/footer';

export default function FaqPage() {
  if (faqData.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow bg-secondary">
          <div className="container mx-auto px-4 py-8 md:py-16 text-center">
            <p>No FAQs available at the moment. Please check back later.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-8 md:py-16 bg-secondary"> 
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="mb-12">
              <Button variant="outline" className="mb-6" asChild>
                <Link href="/resources">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Resources
                </Link>
              </Button>
              <div className="text-center">
                <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                  <HelpCircle className="h-10 w-10 text-primary" />
                </div>
                <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                  Frequently Asked Questions
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Find answers to common questions about home financing and our services.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay="delay-100">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((item) => (
                  <AccordionItem key={item.id} value={item.id} className="bg-card shadow-sm rounded-md mb-3 px-2">
                    <AccordionTrigger className="text-left font-headline text-lg hover:text-primary transition-colors text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
