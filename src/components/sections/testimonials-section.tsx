
"use client";

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from 'lucide-react'; // Removed ExternalLink, ThumbsUp
import { testimonialsData } from '@/lib/data';
// import { Button } from '@/components/ui/button'; // Removed if not used elsewhere in this file
// import { CardHeader, CardTitle } from '@/components/ui/card'; // Removed if not used

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
            Don't just take our word for it. See what our satisfied clients have to say about their experience.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: testimonialsData.length > 2, 
          }}
          plugins={plugin.current ? [plugin.current] : []}
          onMouseEnter={() => plugin.current?.stop()}
          onMouseLeave={() => plugin.current?.reset()}
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-card">
                    <CardContent className="p-6 flex flex-col text-left flex-grow">
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                        {[...Array(5 - testimonial.rating)].map((_, i) => (
                          <Star key={i + testimonial.rating} className="w-5 h-5 text-yellow-400" />
                        ))}
                      </div>
                      <Quote className="w-10 h-10 text-muted-foreground/20 mb-2 -ml-2" />
                      <p className="text-muted-foreground font-body mb-6 text-sm flex-grow">"{testimonial.quote}"</p>
                      
                      <div className="mt-auto flex items-center space-x-3">
                        <Avatar className="w-10 h-10 border">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                          <AvatarFallback>{testimonial.name.substring(0, 1)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-sm text-primary">{testimonial.name}</h4>
                          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        </div>
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

        {/* The "Our Reputation Speaks Volumes" section has been removed from here */}
        
      </div>
    </section>
  );
}
