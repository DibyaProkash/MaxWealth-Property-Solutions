
"use client";

import * as React from 'react';
import Image from 'next/image'; 
import Link from 'next/link'; 
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Loader2 } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

// Define type for API response from /api/locations (matches ServiceLocationItem in locations.ts)
interface FetchedServiceLocationItem {
  id: string;
  slug: string;
  name: string;
  image: string; // Image for the card
  dataAiHint: string; // Hint for the card image
  // tagline, heroImage, heroImageAiHint are part of ServiceLocationItem but not directly used in this card display
}

// Helper map for Australian states (can be expanded)
// This map might be less crucial if region is part of the fetched data or derived differently
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

export default function AchievementsSection() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true, stopOnMouseEnter: true })
  );
  
  const [itemsPerView, setItemsPerView] = React.useState(4);
  const [cities, setCities] = React.useState<FetchedServiceLocationItem[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchCities = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/locations');
        if (!response.ok) {
          throw new Error('Failed to fetch service locations');
        }
        const data: FetchedServiceLocationItem[] = await response.json();
        setCities(data); // Directly use the fetched data
      } catch (err: any) {
        console.error("Error fetching city data:", err);
        setError(err.message || 'Could not load city data.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCities();
  }, []);

  React.useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) setItemsPerView(2); 
      else if (window.innerWidth < 768) setItemsPerView(3); 
      else if (window.innerWidth < 1024) setItemsPerView(3); 
      else setItemsPerView(4); 
    };
    window.addEventListener('resize', updateItems);
    updateItems();
    return () => window.removeEventListener('resize', updateItems);
  }, []);

  const canAutoplayAndShowControls = cities.length > itemsPerView;

  const getRegionForCity = (slug: string): string => {
    if (cityStateMap[slug]) {
      return `${cityStateMap[slug]}, Australia`;
    }
    // For international cities, their region might be part of their name or tagline
    // This logic can be expanded if more specific regions are needed for international cities here
    const cityData = cities.find(c => c.slug === slug);
    if (cityData?.name.toLowerCase().includes('singapore')) return 'Singapore';
    if (cityData?.name.toLowerCase().includes('new york')) return 'USA';
    if (cityData?.name.toLowerCase().includes('london')) return 'UK';
    if (cityData?.name.toLowerCase().includes('paris')) return 'France';
    if (cityData?.name.toLowerCase().includes('dubai')) return 'UAE'; // Assuming Dubai was added
    return 'International'; // Default for other international
  };


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
          ) : error ? ( 
            <p className="text-center text-destructive">{error}</p>
          ) : null}

          {!isLoading && cities.length > 0 && (
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
                {cities.map((city) => (
                  <CarouselItem 
                    key={city.id} 
                    className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4"
                  >
                    <div className="p-1 h-full">
                      <Link href={`/locations/${city.slug}`} passHref className="block h-full group">
                        <div className="bg-card shadow-md h-32 flex flex-col text-center rounded-lg transition-transform duration-300 group-hover:scale-105 overflow-hidden group-hover:shadow-xl">
                          {city.image && ( // Check if image path exists
                            <div className="relative w-full h-20">
                              <Image
                                src={city.image} // Use image from fetched data
                                alt={`${city.name} card image`}
                                fill
                                style={{ objectFit: 'cover' }}
                                data-ai-hint={city.dataAiHint || city.name.toLowerCase().replace('&', '').replace(/\s+/g, ' ')}
                                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                              />
                            </div>
                          )}
                          <div className={`p-2 flex-grow flex flex-col items-center ${city.image ? 'justify-start pt-1' : 'justify-center'}`}>
                            <h3 className="font-semibold text-primary text-sm md:text-base mb-0.5 group-hover:text-accent transition-colors">
                              {city.name}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                              {getRegionForCity(city.slug)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {canAutoplayAndShowControls && <CarouselPrevious className="hidden sm:flex -left-4 md:-left-8 text-primary bg-background/70 hover:bg-background" />}
              {canAutoplayAndShowControls && <CarouselNext className="hidden sm:flex -right-4 md:-right-8 text-primary bg-background/70 hover:bg-background" />}
            </Carousel>
          )}
          {!isLoading && cities.length === 0 && !error && (
             <p className="text-center text-muted-foreground">Service locations will be displayed here soon.</p>
          )}
        </Card>
      </div>
    </section>
  );
}

    