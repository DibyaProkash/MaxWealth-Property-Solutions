
"use client";

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { serviceLocationsData, type ServiceLocationItem } from '@/lib/data';
import { MapPin } from 'lucide-react';

// Manually define state abbreviations for the first few cities for this specific section
const cityStateMap: Record<string, string> = {
  sydney: "NSW",
  melbourne: "VIC",
  brisbane: "QLD",
  "gold-coast": "QLD",
  adelaide: "SA",
  "sunshine-coast": "QLD",
  "newcastle-hunter-valley": "NSW",
  "central-coast": "NSW",
  hobart: "TAS"
};

export default function ServiceLocationsHomepageSection() {
  // Displaying first 5 cities to match the reference image layout
  const displayedCities = serviceLocationsData.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
           <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <MapPin className="h-10 w-10 text-primary" />
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-3">
            Cities We Serve Across Australia
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Expert local knowledge in Australia's major property markets
          </p>
        </div>

        {displayedCities.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {displayedCities.map((city) => (
              <Link key={city.id} href={`/locations/${city.slug}`} passHref className="group">
                <Card className="bg-card shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 h-48 flex flex-col justify-end items-center p-4 text-center rounded-lg">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-primary text-md mb-0.5 group-hover:text-accent transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {cityStateMap[city.slug] || ""}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">Service locations coming soon.</p>
        )}
      </div>
    </section>
  );
}
