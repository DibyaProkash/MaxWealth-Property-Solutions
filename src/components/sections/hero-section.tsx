
'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MessageSquare, BrainCircuit, CalculatorIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import AIChatbot from '@/components/sections/ai-chatbot';
import { useChatWidget } from '@/contexts/chat-widget-context';

export default function HeroSection() {
  const { openChat } = useChatWidget(); // Retained if needed for other parts, but direct button removed

  return (
    <section id="hero" className="relative text-primary-foreground overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/city-backgrounds/sydney-2.jpg" // Single static background image
          alt="Sydney cityscape background"
          fill
          style={{ objectFit: 'cover' }}
          priority
          data-ai-hint="Sydney cityscape photo"
          sizes="100vw"
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
              Your Trusted Property Purchase Consultants in <span className="text-yellow-300 [text-shadow:0_0_5px_rgba(0,0,0,0.7)]">Australia and Abroad</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto md:mx-0">
              Secure the world's finest properties at the right price, from vibrant city centers to serene international havens. Our expert purchase consultants transform the buying experience, saving you valuable time and resources while eliminating stress. Elevate your property journey with our global expertise—let's discuss your aspirations.
            </p>
            
            {/* Button Group Container */}
            <div className="flex flex-col items-center md:items-start gap-4">
              {/* Main CTAs */}
              <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3">
                <Button
                  className="h-10 px-4 text-sm md:h-11 md:px-8 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform transition-transform hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    Book Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  className="h-10 px-4 text-sm md:h-11 md:px-8 shadow-lg transform transition-transform hover:scale-105"
                  asChild
                >
                  <Link href="/about/our-process">
                    View Our Process
                  </Link>
                </Button>
              </div>

              {/* New Resource Buttons */}
              <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3">
                <Button
                  variant="outline"
                  className="h-10 px-4 text-sm md:h-11 md:px-6 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  asChild
                >
                  <Link href="/resources/ai-tools">
                    <BrainCircuit className="mr-2 h-4 w-4" />
                    AI-Powered Tools
                    <Badge variant="destructive" className="ml-2 text-xs px-1.5 py-0.5">BETA</Badge>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="h-10 px-4 text-sm md:h-11 md:px-6 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  asChild
                >
                  <Link href="/resources/calculators">
                    <CalculatorIcon className="mr-2 h-4 w-4" />
                    Financial Calculators
                  </Link>
                </Button>
              </div>
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
