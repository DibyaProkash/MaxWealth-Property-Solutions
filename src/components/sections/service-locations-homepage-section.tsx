
"use client";

import * as React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { serviceLocationsData } from '@/lib/data';
import { MapPin } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

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
  // Add more mappings if new cities are added to serviceLocationsData
};

export default function ServiceLocationsHomepageSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const [itemsPerView, setItemsPerView] = React.useState(5);

  React.useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) setItemsPerView(2);
      else if (window.innerWidth < 768) setItemsPerView(3);
      else if (window.innerWidth < 1024) setItemsPerView(4);
      else setItemsPerView(5);
    };
    window.addEventListener('resize', updateItems);
    updateItems(); // Initial call
    return () => window.removeEventListener('resize', updateItems);
  }, []);


  if (!serviceLocationsData || serviceLocationsData.length === 0) {
    return (
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">Service locations coming soon.</p>
        </div>
      </section>
    );
  }

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

        <Carousel
          opts={{
            align: "start",
            loop: serviceLocationsData.length > itemsPerView,
          }}
          plugins={plugin.current ? [plugin.current] : []}
          onMouseEnter={() => plugin.current?.stop()}
          onMouseLeave={() => plugin.current?.reset()}
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {serviceLocationsData.map((city) => (
              <CarouselItem 
                key={city.id} 
                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <div className="p-1 h-full">
                  <Link href={`/locations/${city.slug}`} passHref className="group block h-full">
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {serviceLocationsData.length > itemsPerView && <CarouselPrevious className="hidden sm:flex -left-4 md:-left-8 text-primary bg-background/70 hover:bg-background" />}
          {serviceLocationsData.length > itemsPerView && <CarouselNext className="hidden sm:flex -right-4 md:-right-8 text-primary bg-background/70 hover:bg-background" />}
        </Carousel>
      </div>
    </section>
  );
}
