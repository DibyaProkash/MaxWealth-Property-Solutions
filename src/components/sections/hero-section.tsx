
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';
import AIChatbot from '@/components/sections/ai-chatbot';

export default function HeroSection() {

  return (
    <section id="hero" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="md:text-left text-center">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Unlock Your Dream Home with <span className="text-accent">Expert Financial Guidance</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto md:mx-0">
              Navigating the complexities of home financing can be daunting. At MaxWealth PS, we provide clear, personalized advice to help you make informed decisions and secure your future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform transition-transform hover:scale-105" asChild>
                <a href="#contact">
                  Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="secondary" // Changed variant to secondary
                className="shadow-lg transform transition-transform hover:scale-105" // Removed custom text/border/hover overrides for outline
                asChild
              >
                <a href="#about">Learn More</a>
              </Button>
            </div>
            {/* Mobile Chat Button - CTA for the global widget */}
            <div className="md:hidden text-center mt-8">
              <Button
                size="lg"
                variant="outline"
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground shadow-lg w-full sm:w-auto"
                onClick={() => {
                  // This button acts as a CTA. Users will use the global floating LiveChatWidget.
                  // No direct action needed here if the global widget is always present.
                }}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat with AI Advisor
              </Button>
            </div>
          </div>

          {/* Right Column: AI Chatbot for Desktop */}
          <div className="hidden md:flex justify-center items-center w-full">
              <AIChatbot />
          </div>
        </div>
      </div>
    </section>
  );
}
