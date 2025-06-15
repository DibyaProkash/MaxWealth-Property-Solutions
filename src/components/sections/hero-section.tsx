
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import AIChatbot from '@/components/sections/ai-chatbot';

export default function HeroSection() {

  return (
    <section id="hero" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Text Content & Mobile Chat CTA */}
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
              <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground shadow-lg transform transition-transform hover:scale-105" asChild>
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
                  // For direct control, context/state management would be needed.
                }}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat with AI Advisor
              </Button>
            </div>
          </div>

          {/* Right Column: Image and Desktop AI Chatbot */}
          <div className="flex flex-col items-center space-y-8">
            {/* Image and Info Box */}
            <div className="w-full max-w-lg">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <Image
                    src="https://placehold.co/600x450.png"
                    alt="Scenic view of residential area with city skyline"
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint="cityscape residential view"
                    priority
                />
                </div>
                <Card className="relative mt-[-40px] sm:mt-[-50px] md:mt-[-60px] z-10 mx-auto w-4/5 sm:w-3/5 max-w-xs bg-background/90 backdrop-blur-sm text-card-foreground shadow-xl rounded-lg">
                <CardContent className="p-4 text-center">
                    <p className="font-headline text-2xl font-bold text-primary">$2.8M+</p>
                    <p className="text-xs text-muted-foreground">Average Savings Per Client</p>
                </CardContent>
                </Card>
            </div>

            {/* AI Chatbot for Desktop */}
            <div className="hidden md:flex justify-center w-full max-w-lg mt-8 md:mt-0"> {/* Reset md:mt-0 or adjust spacing */}
              <AIChatbot />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
