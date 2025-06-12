
import { Button } from '@/components/ui/button';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function BookingSection() {
  return (
    <section id="booking" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <Card className="shadow-xl overflow-hidden bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <div className="inline-block p-3 bg-background/20 rounded-full mb-4">
                <CalendarDays className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="font-headline text-3xl md:text-4xl font-bold mb-4">Ready to Take the Next Step?</CardTitle>
              <CardDescription className="text-lg mb-8 text-primary-foreground/80">
                Schedule a free, no-obligation consultation with one of our expert financial advisors. Let's discuss your home buying goals and create a personalized plan.
              </CardDescription>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-lg transform transition-transform hover:scale-105" asChild>
                <a href="#contact">
                  Book Your Appointment <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="hidden md:block relative h-full min-h-[300px] md:min-h-[400px]">
              <Image 
                src="https://placehold.co/800x600.png" 
                alt="Financial planning session" 
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
                data-ai-hint="finance meeting" 
              />
               <div className="absolute inset-0 bg-black/30"></div>
               <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-2xl text-center">
                  <p className="font-headline text-xl text-primary font-semibold">Live Calendar Coming Soon!</p>
                  <p className="text-sm text-foreground/80 mt-2">
                    For now, please use our contact form to schedule an appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
