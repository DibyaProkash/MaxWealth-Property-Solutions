
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AIChatbot from '@/components/sections/ai-chatbot';
import { useChatWidget } from '@/contexts/chat-widget-context';
import { Badge } from '@/components/ui/badge'; // Added import for Badge

export default function HeroSection() {
  const { openChat } = useChatWidget();

  return (
    <section id="hero" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="md:text-left text-center">
            <Badge variant="secondary" className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">
              Licensed Buyers Advocates
            </Badge>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Property Buyer Advocates in <span className="text-accent">Australia</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto md:mx-0">
              We secure the best properties at the right price across Sydney, Melbourne, Brisbane, Perth, and Adelaide. Save time, money, and stress with Australia's leading property buyer advocates.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform transition-transform hover:scale-105" 
                asChild
              >
                <a href="/contact">
                  Book Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="shadow-lg transform transition-transform hover:scale-105"
                asChild
              >
                <a href="/about/our-process">View Our Process</a>
              </Button>
            </div>
            {/* Trust points previously here are removed to match the new design focus */}
            {/* Mobile Chat Button previously here is removed to simplify CTA */}
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
