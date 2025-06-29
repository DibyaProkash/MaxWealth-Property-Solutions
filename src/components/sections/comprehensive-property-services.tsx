
"use client";

import { comprehensiveServicesData } from "@/lib/data";

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
              <div key={service.id} className="group h-64 [perspective:1000px]">
                {/* The flipping element */}
                <div className="relative h-full w-full rounded-lg shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front of the card */}
                  <div className="absolute inset-0 rounded-lg bg-card p-6 text-center flex flex-col items-center justify-center [backface-visibility:hidden]">
                    <div className="mx-auto mb-4 inline-block p-3 bg-primary/10 rounded-full">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-headline text-lg leading-tight text-primary">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Back of the card */}
                  <div className="absolute inset-0 rounded-lg bg-primary text-primary-foreground p-6 text-center flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h4 className="font-headline text-lg font-semibold mb-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-primary-foreground/80 font-body">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
