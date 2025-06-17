
'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import AIChatbot from '@/components/sections/ai-chatbot';
import { useChatWidget } from '@/contexts/chat-widget-context';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface CityBackground {
  id: string;
  url: string;
  altText: string;
  dataAiHint: string;
}

// Ensure these paths match your files in public/city-backgrounds/
const cityBackgrounds: CityBackground[] = [
  { id: 'sydney', url: '/city-backgrounds/sydney.jpg', altText: 'Sydney cityscape background', dataAiHint: 'Sydney cityscape photo' },
  { id: 'london', url: '/city-backgrounds/london.jpg', altText: 'London cityscape background', dataAiHint: 'London cityscape photo' },
  { id: 'newyork', url: '/city-backgrounds/newyork.jpg', altText: 'New York cityscape background', dataAiHint: 'New York cityscape photo' },
  { id: 'paris', url: '/city-backgrounds/paris.jpg', altText: 'Paris cityscape background', dataAiHint: 'Paris cityscape photo' },
];

export default function HeroSection() {
  const { openChat } = useChatWidget();
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 15000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <section id="hero" className="relative text-primary-foreground overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center">
      {/* Background Carousel and Overlay */}
      <div className="absolute inset-0 z-0 h-full">
        <Carousel
          opts={{ loop: true }}
          plugins={[autoplayPlugin.current]}
          className="w-full h-full" // Carousel takes full height
        >
          <CarouselContent className="h-full"> {/* CarouselContent takes full height */}
            {cityBackgrounds.map((item, index) => (
              <CarouselItem key={item.id} className="h-full"> {/* CarouselItem takes full height */}
                <div className="relative w-full h-full"> {/* This div MUST have position:relative and full dimensions */}
                  <Image
                    src={item.url}
                    alt={item.altText}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={index === 0} // Prioritize loading the first image
                    data-ai-hint={item.dataAiHint}
                    sizes="100vw" // The image will be 100% of the viewport width
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
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
                <MessageSquare className="h-4 w-4 mr-1" />
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
