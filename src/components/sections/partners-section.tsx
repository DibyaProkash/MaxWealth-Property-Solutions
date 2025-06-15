
"use client";

import * as React from 'react';
import Image from 'next/image';
import { Handshake } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { partnersData } from '@/lib/data';

export default function PartnersSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="partners" className="py-16 md:py-24 bg-background"> {/* Changed from bg-secondary to bg-background */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
           <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <Handshake className="h-10 w-10 text-primary" />
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Our Trusted Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading organizations to provide you with comprehensive home buying solutions.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={plugin.current ? [plugin.current] : []}
          onMouseEnter={() => plugin.current?.stop()}
          onMouseLeave={() => plugin.current?.reset()}
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partnersData.map((partner) => (
              <CarouselItem key={partner.name} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-2 md:pl-4">
                <div className="p-1">
                  <div className="flex items-center justify-center h-24 p-2 bg-card rounded-lg shadow-md opacity-70 hover:opacity-100 transition-opacity duration-300"> {/* bg-card will be white */}
                    <Image 
                      src={partner.logo} 
                      alt={partner.name} 
                      width={150} 
                      height={60} 
                      style={{ objectFit: "contain" }}
                      data-ai-hint={partner.dataAiHint}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-25px] sm:left-[-35px] md:left-[-50px]" />
          <CarouselNext className="right-[-25px] sm:right-[-35px] md:right-[-50px]" />
        </Carousel>
      </div>
    </section>
  );
}
