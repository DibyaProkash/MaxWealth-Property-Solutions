
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import AIChatbot from '@/components/sections/ai-chatbot';
import { useChatWidget } from '@/contexts/chat-widget-context';

export default function HeroSection() {
  const { openChat } = useChatWidget();

  return (
    <section id="hero" className="relative text-primary-foreground overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ugc.same-assets.com/jCVVeBWy4B84ONocCwkNBlVMGmuggCHq.jpeg"
          alt="Modern cityscape background"
          layout="fill"
          objectFit="cover"
          priority
          data-ai-hint="cityscape building"
        />
        <div className="absolute inset-0 bg-black/60"></div> {/* Overlay for text contrast */}
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="md:text-left text-center">
            <Badge variant="secondary" className="mb-4">
              Licensed Buyers Advocates
            </Badge>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Property Buyer Advocates in <span className="text-accent">Australia</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto md:mx-0">
              We secure the best properties at the right price across Sydney, Melbourne, Brisbane, Perth, and Adelaide. Save time, money, and stress with Australia's leading property buyer advocates.
            </p>
            <div className="flex flex-row justify-center md:justify-start gap-3">
              <Button
                className="h-10 px-4 text-sm md:h-11 md:px-8 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform transition-transform hover:scale-105"
                asChild
              >
                <a href="/contact">
                  Book Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
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
                className="h-10 px-4 text-sm md:h-11 md:px-8 shadow-lg transform transition-transform hover:scale-105 block md:hidden bg-[hsl(var(--background))/50] hover:bg-[hsl(var(--background))/70] backdrop-blur-sm text-primary-foreground border border-primary-foreground/30"
                onClick={openChat}
                aria-label="Open financial advisor chat"
              >
                <MessageSquare className="mr-2 h-5 w-5" /> AI Advisor
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
                <span className="text-sm text-primary-foreground/90">500+ Properties Secured</span>
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
