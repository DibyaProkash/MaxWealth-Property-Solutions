
"use client";

import { comprehensiveServicesData } from "@/lib/data";
import { ArrowRight } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {comprehensiveServicesData.map((service, index) => {
            return (
              <div key={service.id} className="flex items-start space-x-4">
                <div className="flex-shrink-0 flex items-center space-x-3 text-accent pt-1">
                   <span className="text-xl font-bold font-headline">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                   <ArrowRight className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-headline text-lg font-semibold text-primary mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
