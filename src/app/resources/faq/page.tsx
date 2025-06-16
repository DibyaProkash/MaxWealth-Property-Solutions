
"use client"; // Required for Accordion client component

import * as React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import { faqData, type FaqItem } from '@/lib/data'; // Removed direct import
import AnimatedSection from '@/components/layout/animated-section';
import { HelpCircle, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from '@/components/layout/footer';

// Define FaqItem type for this page
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function FaqPage() {
  const [faqItems, setFaqItems] = React.useState<FaqItem[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchFaqs = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/faqs');
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }
        const data: FaqItem[] = await response.json();
        setFaqItems(data);
      } catch (err: any) {
        setError(err.message || 'Could not load FAQs.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchFaqs();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow bg-secondary flex items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow bg-secondary">
          <div className="container mx-auto px-4 py-8 md:py-16 text-center">
            <p className="text-destructive">Error: {error}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (faqItems.length === 0 && !isLoading) {
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
                {faqItems.map((item) => (
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
