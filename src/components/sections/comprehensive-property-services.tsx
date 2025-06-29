"use client";

import { comprehensiveServicesData } from "@/lib/data";
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ComprehensivePropertyServices() {
  if (!comprehensiveServicesData || comprehensiveServicesData.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-secondary rounded-lg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            Comprehensive Property Purchase Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
            From property search to settlement, we handle every aspect of your property purchase 
            to ensure you get the best deal in Australia's competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {comprehensiveServicesData.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="text-center shadow-lg hover:shadow-xl transition-shadow bg-card flex flex-col p-6">
                <div className="mx-auto mb-4 inline-block p-3 bg-primary/10 rounded-full">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={service.id} className="border-b-0">
                    <AccordionTrigger className="font-headline text-lg leading-tight text-primary hover:no-underline justify-center p-0">
                      {service.title}
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-sm text-muted-foreground font-body">{service.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
