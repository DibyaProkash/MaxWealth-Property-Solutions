
"use client";

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '@/lib/data';

export default function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from clients who achieved their homeownership goals with our help.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: testimonialsData.length > 2, // Only loop if there are enough items
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                      <Quote className="w-10 h-10 text-accent mb-4 transform rotate-180" />
                      <p className="text-muted-foreground font-body mb-6 italic flex-grow text-sm md:text-base">"{testimonial.quote}"</p>
                      <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                        <AvatarFallback>{testimonial.name.substring(0, 1)}</AvatarFallback>
                      </Avatar>
                      <h4 className="font-headline text-lg font-semibold text-primary">{testimonial.name}</h4>
                      <p className="text-sm text-accent mb-2">{testimonial.role}</p>
                      <div className="flex justify-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                        {[...Array(5 - testimonial.rating)].map((_, i) => (
                          <Star key={i + testimonial.rating} className="w-5 h-5 text-yellow-400" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
