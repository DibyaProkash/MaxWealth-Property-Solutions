
"use client";

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card'; // Removed CardHeader, CardTitle
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ExternalLink, ThumbsUp } from 'lucide-react';
import { testimonialsData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { CardHeader, CardTitle } from '@/components/ui/card'; // Re-added for Google/Trustpilot cards

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
                      <Quote className="w-10 h-10 text-muted-foreground/20 mb-2 -ml-2" /> {/* Adjusted quote icon style */}
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

        <div className="mt-16 md:mt-24 text-center">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <ThumbsUp className="h-10 w-10 text-primary" />
          </div>
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4">Our Reputation Speaks Volumes</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Integrate live reviews from trusted platforms to showcase client satisfaction.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary flex items-center justify-center">
                  <svg className="w-6 h-6 mr-2 fill-primary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.62 9.41H3.38c-.28 0-.38.31-.19.51l8.52 8.64c.1.1.26.1.36 0l8.55-8.64c.19-.2.09-.51-.2-.51zM12 17.14L4.85 9.91h14.3L12 17.14z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fillRule="evenodd" clipRule="evenodd"/></svg> 
                  Google Reviews
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 text-sm">
                  To display dynamic Google Reviews for MaxWealth PS, you'll need to use Google's official methods.
                  Typically, this involves embedding a widget from your Google Business Profile.
                </p>
                <div className="border-2 border-dashed border-border p-6 rounded-md bg-muted/20 min-h-[150px] flex flex-col items-center justify-center">
                  <p className="text-xs text-muted-foreground mb-2">
                    <strong>Action Required:</strong>
                  </p>
                  <p className="text-xs text-muted-foreground mb-1">
                    1. Go to your Google Business Profile.
                  </p>
                  <p className="text-xs text-muted-foreground mb-1">
                    2. Find options for sharing reviews or embedding a review widget.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    3. Paste the provided HTML/JavaScript code in this card's content area.
                  </p>
                </div>
                <Button variant="outline" asChild className="mt-4">
                  <a href="https://support.google.com/business/answer/7035772" target="_blank" rel="noopener noreferrer" aria-label="Learn how to embed Google Reviews">
                    Learn about Google Widgets <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary flex items-center justify-center">
                   <svg className="w-6 h-6 mr-2 fill-primary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.926 9.573l-4.211-1.353-1.879-3.951c-.186-.39-.759-.39-.945 0l-1.879 3.951-4.211 1.353c-.419.135-.588.67-.282.986l3.193 3.279-.938 4.418c-.088.414.341.748.718.544l3.861-2.197 3.861 2.197c.377.204.806-.13.718-.544l-.938-4.418 3.193-3.279c.306-.316.137-.851-.282-.986zm-6.925 3.018l-2.008 2.062.589 2.774-2.427-1.381-2.427 1.381.589-2.774-2.008-2.062 2.648-.851 1.181-2.483 1.181 2.483 2.648.851z" fillRule="evenodd" clipRule="evenodd"/></svg>
                  Trustpilot Reviews
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 text-sm">
                  To display dynamic Trustpilot reviews, embed an official "TrustBox" widget from your Trustpilot Business account.
                </p>
                <div className="border-2 border-dashed border-border p-6 rounded-md bg-muted/20 min-h-[150px] flex flex-col items-center justify-center">
                  <p className="text-xs text-muted-foreground mb-2">
                    <strong>Action Required:</strong>
                  </p>
                  <p className="text-xs text-muted-foreground mb-1">
                    1. Log in to your Trustpilot Business account.
                  </p>
                  <p className="text-xs text-muted-foreground mb-1">
                    2. Go to "Showcase" &gt; "Website widgets" to find TrustBoxes.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    3. Configure your widget, copy the code, and paste it in this card's content area.
                  </p>
                </div>
                <Button variant="outline" asChild className="mt-4">
                  <a href="https://support.trustpilot.com/hc/en-us/articles/115005001907-Add-a-TrustBox-widget-to-a-webpage" target="_blank" rel="noopener noreferrer" aria-label="Learn how to embed Trustpilot TrustBoxes">
                    Learn about TrustBoxes <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
