
"use client";

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote, Loader2, HomeIcon } from 'lucide-react';
import AnimatedSection from '@/components/layout/animated-section';
import Footer from '@/components/layout/footer';
import BackButton from '@/components/layout/back-button';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  dataAiHint: string;
  quote: string;
  rating: number;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchTestimonials = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/testimonials');
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data: Testimonial[] = await response.json();
        setTestimonials(data);
      } catch (err: any) {
        setError(err.message || 'Could not load testimonials.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-background py-8 md:py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="mb-12">
              <div className="mb-6 flex flex-wrap gap-4">
                <BackButton />
                <Button variant="outline" asChild>
                  <Link href="/">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>
              <div className="text-center">
                <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                  <Star className="h-10 w-10 text-primary" />
                </div>
                <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                  What Our Clients Say
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Don't just take our word for it. See what our satisfied clients have to say about their experience with MaxWealth Property Services.
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay="delay-100">
            {isLoading ? (
              <div className="flex justify-center items-center py-10">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
              </div>
            ) : error ? (
              <div className="text-center py-10 text-destructive">
                <p>Error loading testimonials: {error}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-card">
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
                ))}
              </div>
            )}
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
