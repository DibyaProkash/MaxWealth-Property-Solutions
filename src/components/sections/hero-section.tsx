
'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, BrainCircuit, CalculatorIcon, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import AIChatbot from '@/components/sections/ai-chatbot';
import { useChatWidget } from '@/contexts/chat-widget-context'; 

export default function HeroSection() {
  const { openChat } = useChatWidget(); 

  return (
    <section id="hero" className="relative text-primary-foreground overflow-hidden min-h-[70vh] md:min-h-[85vh] flex items-center">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/city-backgrounds/sydney-2.jpg"
          alt="Sydney cityscape background"
          fill
          style={{ objectFit: 'cover' }}
          priority
          data-ai-hint="Sydney cityscape photo"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60"></div>
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
            
            {/* Desktop: Main CTAs (Book Call, View Process) */}
            <div className="hidden md:flex flex-row flex-wrap justify-start gap-3">
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

            {/* Mobile Buttons Container - Stacked Vertically */}
            <div className="md:hidden flex flex-col items-center gap-3 w-full max-w-xs mx-auto mt-8">
              <Button
                className="w-full h-12 text-base bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
                asChild
              >
                <Link href="/contact">
                  Book Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="secondary"
                className="w-full h-12 text-base shadow-lg"
                asChild
              >
                <Link href="/about/our-process">
                  View Our Process
                </Link>
              </Button>
              <Button
                variant="secondary"
                className="w-full h-12 text-base shadow-lg"
                onClick={openChat}
              >
                <MessageSquare className="mr-2 h-5 w-5" /> AI Advisor
              </Button>
              {/* "AI-Powered Tools" and "Financial Calculators" buttons removed from here for mobile view */}
            </div>

            {/* Trust Points - Shown on all sizes */}
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

          {/* Right Column: AI Chatbot & Resource Buttons for Desktop ONLY */}
          <div className="hidden md:flex md:col-span-1 flex-col items-center justify-center">
            <AIChatbot />
            <div className="flex flex-row flex-wrap justify-center gap-3 mt-6 w-full">
              <Button
                variant="secondary"
                className="h-11 px-5 text-sm" 
                asChild
              >
                <Link href="/resources/ai-tools">
                  <BrainCircuit className="mr-2 h-5 w-5" />
                  AI-Powered Tools
                  <Badge variant="destructive" className="ml-1.5 text-xs px-1 py-0.5">BETA</Badge> 
                </Link>
              </Button>
              <Button
                variant="secondary"
                className="h-11 px-5 text-sm" 
                asChild
              >
                <Link href="/resources/calculators">
                  <CalculatorIcon className="mr-2 h-5 w-5" />
                  Calculators
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
