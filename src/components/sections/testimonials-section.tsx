
"use client";

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Added CardHeader, CardTitle
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ExternalLink, ThumbsUp } from 'lucide-react'; // Added ExternalLink, ThumbsUp
import { testimonialsData } from '@/lib/data';
import { Button } from '@/components/ui/button'; // Added Button

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
            loop: testimonialsData.length > 2, 
          }}
          plugins={plugin.current ? [plugin.current] : []} // Ensure plugin.current is defined before passing
          onMouseEnter={() => plugin.current?.stop()}
          onMouseLeave={() => plugin.current?.reset()}
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

        {/* Placeholder for Customer Review Widgets */}
        <div className="mt-16 md:mt-24 text-center">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <ThumbsUp className="h-10 w-10 text-primary" />
          </div>
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4">Our Reputation Speaks Volumes</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            See what others are saying about us on popular review platforms.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary flex items-center justify-center">
                  <svg className="w-6 h-6 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12.001 2.005c5.523 0 10.002 4.479 10.002 10.001s-4.479 10.001-10.002 10.001S2.003 17.529 2.003 12.006s4.475-10.001 9.998-10.001zm0 1.5c-4.695 0-8.502 3.807-8.502 8.501s3.807 8.501 8.502 8.501 8.502-3.807 8.502-8.501S16.696 3.505 12.001 3.505zm5.789 6.009H6.211c-.482 0-.806.33-.806.804s.324.805.806.805h11.578c.481 0 .806-.33.806-.805s-.325-.804-.806-.804zm-1.879 2.977H8.09c-.482 0-.806.33-.806.805s.324.804.806.804h7.821c.481 0 .806-.33.806-.804s-.325-.805-.806-.805zm-2.022 2.977h-5.8c-.482 0-.806.33-.806.804s.324.805.806.805h5.8c.481 0 .806-.33.806-.805s-.325-.804-.806-.804z" strokeWidth=".5" stroke="currentColor"/></svg> {/* Placeholder generic circle/text icon */}
                  Google Reviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Rated <span className="font-bold text-primary">4.9 / 5.0</span> based on 150+ reviews.</p>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-6 h-6 ${i < 4 ? 'text-yellow-400 fill-current' : (i === 4 ? 'text-yellow-400 fill-current opacity-50' : 'text-gray-300') }`} />
                  ))}
                </div>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="View MaxWealth PS on Google Reviews">
                    View on Google <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary flex items-center justify-center">
                  <svg className="w-6 h-6 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm-1.5-6.5l-4.5-3.5 1-1.5 3.5 2.5 6.5-6.5 1 1.5-7.5 7.5z" strokeWidth=".5" stroke="currentColor"/></svg> {/* Placeholder generic check/star icon */}
                  Trustpilot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Rated <span className="font-bold text-green-500">Excellent</span> (4.8 / 5.0)</p>
                 <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-6 h-6 ${i < 4 ? 'text-green-400 fill-current' : (i === 4 ? 'text-green-400 fill-current opacity-70' : 'text-gray-300') }`} />
                  ))}
                </div>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="View MaxWealth PS on Trustpilot">
                    View on Trustpilot <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
           <p className="text-xs text-muted-foreground mt-8">
            These are illustrative placeholders. Integrate your actual review platform widgets here for live updates.
          </p>
        </div>
      </div>
    </section>
  );
}
