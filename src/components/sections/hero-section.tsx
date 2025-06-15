
import { Button } from '@/components/ui/button';
import AIChatbot from './ai-chatbot';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="relative py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-[0.03]"> 
        <Image 
          src="https://placehold.co/1920x1080.png" 
          alt="Subtle Geometric Pattern" 
          fill
          style={{ objectFit: 'cover' }}
          data-ai-hint="abstract pattern"
          priority
        />
      </div>
      <div className="container relative mx-auto px-6 text-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:text-left">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Unlock Your Dream Home with <span className="text-accent">Expert Financial Guidance</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto md:mx-0 font-body">
              Navigating the complexities of home financing can be daunting. At MaxWealth PS, we provide clear, personalized advice to help you make informed decisions and secure your future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="shadow-lg transform transition-transform hover:scale-105 bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href="#contact">
                  Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" className="shadow-lg transform transition-transform hover:scale-105 bg-primary-foreground text-primary border border-primary-foreground hover:bg-primary-foreground/80" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            {/* AIChatbot styling will be inherited or overridden via its own card and theme variables */}
            <AIChatbot /> 
          </div>
        </div>
      </div>
    </section>
  );
}
