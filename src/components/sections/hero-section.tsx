
'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import AIChatbot from '@/components/sections/ai-chatbot';
import { useChatWidget } from '@/contexts/chat-widget-context';
// Removed Carousel imports as they are no longer used

// Removed cityBackgrounds array and Autoplay plugin ref

export default function HeroSection() {
  const { openChat } = useChatWidget();
  // Removed autoplayPlugin ref

  return (
    <section id="hero" className="relative text-primary-foreground overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.bluent.com/images/australia-1.webp" // Using a single, previously configured external image
          alt="Sydney cityscape"
          fill
          style={{ objectFit: 'cover' }}
          priority // This is the only background image now
          data-ai-hint="Sydney cityscape photo"
        />
        <div className="absolute inset-0 bg-black/60"></div> {/* Overlay for text contrast */}
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="md:text-left text-center">
            <Badge variant="secondary" className="mb-4">
              Licensed Real Estate Consultants
            </Badge>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Property Purchase Consultants in <span className="text-accent">Australia and Abroad</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto md:mx-0">
              Secure the world's finest properties at the right price, from vibrant city centers to serene international havens. Our expert purchase consultants transform the buying experience, saving you valuable time and resources while eliminating stress. Elevate your property journey with our global expertise—let's discuss your aspirations.
            </p>
            <div className="flex flex-row justify-center md:justify-start gap-3">
              <Button
                className="h-10 px-4 text-sm md:h-11 md:px-8 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform transition-transform hover:scale-105"
                asChild
              >
                <a href="/contact">
                  Book Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="secondary"
                className="h-10 px-4 text-sm md:h-11 md:px-8 shadow-lg transform transition-transform hover:scale-105"
                asChild
              >
                <a href="/about/our-process">View Our Process</a>
              </Button>
              {/* AI Advisor Button for Mobile */}
              <Button
                className="h-10 px-4 text-sm bg-[hsl(var(--background))/50] hover:bg-[hsl(var(--background))/70] backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 shadow-lg transform transition-transform hover:scale-105 block md:hidden"
                onClick={openChat}
                aria-label="Open financial advisor chat"
              >
                <MessageSquare className="h-4 w-4" />
                <span>AI Advisor</span>
              </Button>
            </div>

            {/* Trust Points */}
            <div className="mt-8 flex flex-row justify-center md:justify-start space-x-4 md:space-x-6">
              <div className="flex items-center justify-center md:justify-start">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-sm text-primary-foreground/90">Licensed & Insured</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-sm text-primary-foreground/90">12+ Years of Experience</span>
              </div>
            </div>

          </div>

          {/* Right Column: AI Chatbot for Desktop */}
          <div className="hidden md:flex md:col-span-1 items-center justify-center">
            <AIChatbot />
          </div>
        </div>
      </div>
    </section>
  );
}
