
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function HeroSection() {
  return (
    <section id="hero" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="md:text-left">
            <Badge variant="outline" className="border-accent text-accent font-semibold mb-4 py-1 px-3">
              Your Home Finance Experts
            </Badge>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Unlock Your Dream Home with <span className="text-accent">Expert Financial Guidance</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0 font-body">
              Navigating the complexities of home financing can be daunting. At MaxWealth PS, we provide clear, personalized advice to help you make informed decisions and secure your future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <Button size="lg" className="shadow-lg transform transition-transform hover:scale-105 bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href="#contact">
                  Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" className="shadow-lg transform transition-transform hover:scale-105 bg-background text-primary border border-primary hover:bg-primary/5" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-8 text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-2" />
                <span>Clear Financial Roadmaps</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-2" />
                <span>Expert Mortgage Advice</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image and Overlay Card */}
          <div className="relative mt-8 md:mt-0">
            <div className="relative aspect-[4/3] w-full max-w-xl mx-auto md:max-w-none">
                <Image
                    src="https://placehold.co/600x450.png"
                    alt="Professionals planning financial strategies for home buying"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-xl shadow-2xl object-cover"
                    data-ai-hint="modern cityscape view"
                    priority
                />
            </div>
            <Card className="absolute -bottom-8 -left-8 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:-left-12 lg:-left-16 w-auto min-w-[200px] max-w-[240px] bg-card/90 backdrop-blur-sm text-card-foreground p-4 rounded-lg shadow-xl border border-border/50">
              <CardContent className="p-0 text-center">
                <p className="font-headline text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                <p className="text-xs text-muted-foreground/80 mt-1">(Based on 500+ Reviews)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
