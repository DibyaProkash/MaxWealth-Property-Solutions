
import { Button } from '@/components/ui/button';
import { CalendarDays, ArrowRight, CalendarCheck2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function BookingSection() {
  return (
    <section id="booking" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <Card className="shadow-xl overflow-hidden bg-gradient-to-r from-primary to-green-600 text-primary-foreground"> {/* Using primary (green) to a slightly lighter green for gradient */}
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <div className="inline-block p-3 bg-background/20 rounded-full mb-4"> {/* background/20 for contrast */}
                <CalendarDays className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="font-headline text-3xl md:text-4xl font-bold mb-4">Ready to Take the Next Step?</CardTitle>
              <CardDescription className="text-lg mb-8 text-primary-foreground/80">
                Schedule a free, no-obligation consultation with one of our expert financial advisors. Let's discuss your home buying goals and create a personalized plan.
              </CardDescription>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-lg transform transition-transform hover:scale-105" asChild>
                <a href="#contact">
                  <span className="flex items-center">
                    Book Your Appointment <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </a>
              </Button>
            </div>
            <div className="hidden md:flex flex-col items-center justify-center bg-background/10 p-8 md:p-12 min-h-[300px] md:min-h-[450px]"> {/* background/10 for contrast */}
              <div className="bg-card backdrop-blur-sm p-8 rounded-lg shadow-2xl text-center text-card-foreground w-full max-w-md"> {/* bg-card (white) */}
                <CalendarCheck2 className="h-16 w-16 text-primary mx-auto mb-6" /> {/* primary color icon */}
                <h3 className="font-headline text-2xl text-primary font-semibold mb-3">Integrate Your Live Calendar</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  This is where you can embed your live scheduling tool (e.g., Calendly, SavvyCal). Simply paste the embed code provided by your calendar service here.
                </p>
                <div className="border-2 border-dashed border-border p-6 rounded-md bg-muted/20 min-h-[100px] flex items-center justify-center">
                    <p className="text-xs text-muted-foreground">
                        Example: &lt;iframe src="your-calendar-embed-url"&gt;&lt;/iframe&gt;
                    </p>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Until then, the "Book Your Appointment" button (on the left) directs users to the contact form.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
