import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function MapSection() {
  return (
    <section id="location" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Visit Our Office</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're conveniently located to serve you better. Drop by for a consultation or get in touch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md mb-6">
                  {/* Placeholder for Google Map */}
                  <Image 
                    src="https://placehold.co/800x450.png" 
                    alt="Map showing office location" 
                    width={800} 
                    height={450} 
                    className="object-cover"
                    data-ai-hint="city map" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <p className="text-white font-semibold text-lg p-4 bg-black/50 rounded">Interactive Map Coming Soon</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary">MaxWealth PS Headquarters</h3>
                      <p>123 Finance Avenue, Suite 400</p>
                      <p>Prosperity City, FS 54321</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href="tel:+1234567890" className="hover:text-primary transition-colors">(123) 456-7890</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href="mailto:info@maxwealthps.com" className="hover:text-primary transition-colors">info@maxwealthps.com</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="prose prose-lg text-foreground max-w-none font-body">
            <h3 className="font-headline text-2xl text-primary mb-4">Getting Here</h3>
            <p>Our office is easily accessible by public transport and has ample parking available. We are located in the heart of the financial district, near major landmarks.</p>
            <h4 className="font-headline text-xl text-primary mt-6 mb-2">Office Hours:</h4>
            <ul className="list-disc list-inside">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 2:00 PM (By Appointment)</li>
              <li>Sunday: Closed</li>
            </ul>
            <p className="mt-4">We recommend booking an appointment in advance to ensure our advisors can dedicate ample time to your needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
