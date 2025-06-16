
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { comprehensiveServicesData } from "@/lib/data";
import type { LucideIcon } from "lucide-react";

export default function ComprehensivePropertyServices() {
  if (!comprehensiveServicesData || comprehensiveServicesData.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-secondary rounded-lg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            Comprehensive Property Buyer Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
            From property search to settlement, we handle every aspect of your property purchase 
            to ensure you get the best deal in Australia's competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {comprehensiveServicesData.map((service) => {
            const Icon = service.icon as LucideIcon; // Cast to LucideIcon
            return (
              <Card key={service.id} className="bg-card shadow-md hover:shadow-lg transition-shadow duration-300 p-2">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div>
                      <Icon className="h-7 w-7 text-accent mb-3" />
                      <h3 className="font-headline text-lg font-semibold text-primary mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground font-body">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
