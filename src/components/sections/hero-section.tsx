
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AIChatbot from '@/components/sections/ai-chatbot';

export default function HeroSection() {
  return (
    <section id="hero" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="md:text-left">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Unlock Your Dream Home with <span className="text-accent">Expert Financial Guidance</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto md:mx-0">
              Navigating the complexities of home financing can be daunting. At MaxWealth PS, we provide clear, personalized advice to help you make informed decisions and secure your future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform transition-transform hover:scale-105" asChild>
                <a href="#contact">
                  Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground shadow-lg transform transition-transform hover:scale-105" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>

          {/* Right Column: Embedded AI Chatbot */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-2xl"> {/* Added rounding and shadow for the chatbot container */}
              <AIChatbot />
            </div>
          </div>
        </div>
        
        {/* Prompt for AI Chatbot on mobile, directing to global widget */}
        <div className="md:hidden mt-12 text-center">
           <h2 className="font-headline text-2xl font-semibold mb-4">Try Our AI Advisor</h2>
           <p className="text-primary-foreground/80 mb-6">
            Get instant answers to your home financing questions.
           </p>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => {
              // Attempt to click the global chat widget button
              const chatWidgetButton = document.querySelector('button[aria-label="Open financial advisor chat"]') as HTMLButtonElement | null;
              chatWidgetButton?.click();
            }}
          >
            Ask Our AI Now
          </Button>
        </div>
      </div>
    </section>
  );
}
