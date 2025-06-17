
"use client";

import * as React from 'react';
import Image from 'next/image'; // Import next/image
import Link from 'next/link'; // Keep Link if you plan to make cards clickable later
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Loader2 } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

// Define types for this component
interface CarouselCity {
  id: string;
  name: string;
  region: string; // e.g., "NSW, Australia" or "London, UK"
  imageSrc?: string; // Optional: Path to the image for the card
  dataAiHint?: string; // Optional: AI hint for the image
}

// Define type for API response from /api/locations
interface FetchedServiceLocationItem {
  id: string;
  slug: string;
  name: string;
  // image and dataAiHint from FetchedServiceLocationItem are for detail pages, not this card.
}

// Helper map for Australian states (can be expanded)
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

const internationalCities: CarouselCity[] = [
  { id: 'intl1', name: 'London', region: 'UK', imageSrc: '/city-backgrounds/london-card.jpg', dataAiHint: 'london city' },
  { id: 'intl2', name: 'New York', region: 'USA', imageSrc: '/city-backgrounds/newyork-card.jpg', dataAiHint: 'new york city' },
  { id: 'intl3', name: 'Singapore', region: 'Singapore' },
  { id: 'intl4', name: 'Dubai', region: 'UAE' },
  { id: 'intl5', name: 'Paris', region: 'France', imageSrc: '/city-backgrounds/paris-card.jpg', dataAiHint: 'paris city' },
];

export default function AchievementsSection() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true, stopOnMouseEnter: true })
  );
  
  const [itemsPerView, setItemsPerView] = React.useState(4);
  const [allCities, setAllCities] = React.useState<CarouselCity[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchAustralianCities = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/locations');
        if (!response.ok) {
          throw new Error('Failed to fetch Australian service locations');
        }
        const data: FetchedServiceLocationItem[] = await response.json();
        const australianCitiesFormatted: CarouselCity[] = data.map(loc => ({
          id: loc.id,
          name: loc.name,
          region: `${cityStateMap[loc.slug] || 'Australia'}, Australia`,
          imageSrc: loc.slug === 'sydney' ? '/city-backgrounds/sydney-card.jpg' : undefined,
          dataAiHint: loc.slug === 'sydney' ? 'sydney city' : undefined,
        }));
        setAllCities([...australianCitiesFormatted, ...internationalCities]);
      } catch (err: any) {
        console.error("Error fetching city data:", err);
        setError(err.message || 'Could not load city data.');
        setAllCities(internationalCities); // Fallback to international only
      } finally {
        setIsLoading(false);
      }
    };
    fetchAustralianCities();
  }, []);

  React.useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) setItemsPerView(2); // sm
      else if (window.innerWidth < 768) setItemsPerView(3); // md
      else if (window.innerWidth < 1024) setItemsPerView(3); // lg
      else setItemsPerView(4); // xl and up
    };
    window.addEventListener('resize', updateItems);
    updateItems();
    return () => window.removeEventListener('resize', updateItems);
  }, []);

  const canAutoplayAndShowControls = allCities.length > itemsPerView;

  return (
    <section>
      <div className="container mx-auto px-6">
        <Card className="p-6 md:p-10 bg-card shadow-xl rounded-xl">
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-primary/10 rounded-full mb-3">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary">
              Cities We Serve Across Australia and Abroad
            </h2>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-32">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : error && allCities.length === internationalCities.length ? ( // Check if only international are shown due to error
            <p className="text-center text-destructive">Could not load Australian cities. Showing international examples.</p>
          ) : null}

          {!isLoading && allCities.length > 0 && (
            <Carousel
              opts={{
                align: "start",
                loop: canAutoplayAndShowControls,
              }}
              plugins={canAutoplayAndShowControls ? (autoplayPlugin.current ? [autoplayPlugin.current] : []) : []}
              onMouseEnter={() => { if (canAutoplayAndShowControls && autoplayPlugin.current) autoplayPlugin.current.stop(); }}
              onMouseLeave={() => { if (canAutoplayAndShowControls && autoplayPlugin.current) autoplayPlugin.current.play(); }}
              className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {allCities.map((city) => (
                  <CarouselItem 
                    key={city.id} 
                    className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4"
                  >
                    <div className="p-1 h-full">
                      <div className="bg-card shadow-md h-32 flex flex-col text-center rounded-lg transition-transform duration-300 hover:scale-105 overflow-hidden">
                        {city.imageSrc && (
                          <div className="relative w-full h-20">
                            <Image
                              src={city.imageSrc}
                              alt={`${city.name} card image`}
                              fill
                              style={{ objectFit: 'cover' }}
                              data-ai-hint={city.dataAiHint || city.name.toLowerCase()}
                              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                            />
                          </div>
                        )}
                        <div className={`p-2 flex-grow flex flex-col items-center ${city.imageSrc ? 'justify-start pt-1' : 'justify-center'}`}>
                          <h3 className="font-semibold text-primary text-sm md:text-base mb-0.5">
                            {city.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {city.region}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {canAutoplayAndShowControls && <CarouselPrevious className="hidden sm:flex -left-4 md:-left-8 text-primary bg-background/70 hover:bg-background" />}
              {canAutoplayAndShowControls && <CarouselNext className="hidden sm:flex -right-4 md:-right-8 text-primary bg-background/70 hover:bg-background" />}
            </Carousel>
          )}
          {!isLoading && allCities.length === 0 && !error && (
             <p className="text-center text-muted-foreground">Service locations will be displayed here soon.</p>
          )}
        </Card>
      </div>
    </section>
  );
}
