
import { Button } from '@/components/ui/button';
import { CalendarDays, ArrowRight, CalendarCheck2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function BookingSection() {
  return (
    <section id="booking" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <Card className="shadow-xl overflow-hidden bg-transparent border-none">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <div className="inline-block p-3 bg-primary-foreground/10 rounded-full mb-4">
                <CalendarDays className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="font-headline text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">Ready to Take the Next Step?</CardTitle>
              <CardDescription className="text-lg mb-8 text-primary-foreground/80">
                Schedule a free, no-obligation consultation with one of our expert financial advisors. Let's discuss your home buying goals and create a personalized plan.
              </CardDescription>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform transition-transform hover:scale-105" asChild>
                <a href="#contact">
                  <span className="flex items-center">
                    Book Your Appointment <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </a>
              </Button>
            </div>
            <div className="hidden md:flex flex-col items-center justify-center bg-primary-foreground/5 p-8 md:p-12 min-h-[300px] md:min-h-[450px] rounded-lg">
              <div className="bg-card backdrop-blur-sm p-8 rounded-lg shadow-2xl text-center text-card-foreground w-full max-w-md">
                <CalendarCheck2 className="h-16 w-16 text-primary mx-auto mb-6" />
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
