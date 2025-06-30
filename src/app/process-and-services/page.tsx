
"use client";

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, ConciergeBell, HomeIcon, Loader2, Workflow } from 'lucide-react';
import AnimatedSection from '@/components/layout/animated-section';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { whoWeHelpData } from '@/lib/data';
import ComprehensivePropertyServices from '@/components/sections/comprehensive-property-services';
import ProvenProcessSection from '@/components/sections/proven-process-section';
import BackButton from '@/components/layout/back-button';
import { cn } from '@/lib/utils';

// Define the type here instead of importing from a deleted file
export interface FetchedServiceLocationItem {
  id: string;
  slug: string;
  name: string;
  image: string;
  dataAiHint: string;
}

export default function ProcessAndServicesPage() {
  const [locations, setLocations] = React.useState<FetchedServiceLocationItem[]>([]);
  const [isLoadingLocations, setIsLoadingLocations] = React.useState(true);
  const [locationsError, setLocationsError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchLocations = async () => {
      setIsLoadingLocations(true);
      setLocationsError(null);
      try {
        const response = await fetch('/api/locations');
        if (!response.ok) {
          throw new Error('Failed to fetch service locations');
        }
        const data: FetchedServiceLocationItem[] = await response.json();
        setLocations(data);
      } catch (err: any) {
        setLocationsError(err.message || 'Could not load service locations.');
      } finally {
        setIsLoadingLocations(false);
      }
    };
    fetchLocations();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-background text-foreground">
        <div className="container mx-auto px-6 py-8 md:py-16">
          <AnimatedSection>
            <div className="mb-8 flex flex-wrap gap-4">
              <BackButton />
              <Button variant="outline" asChild>
                <Link href="/">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
              </Button>
            </div>
            <header className="text-center mb-12 md:mb-16">
              <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                  <ConciergeBell className="h-10 w-10 text-primary" />
              </div>
              <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Our Process & Services
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
                Discover the range of expert services MaxWealth PS offers and our proven process to make your property journey seamless and successful.
              </p>
            </header>
          </AnimatedSection>
          
          <AnimatedSection delay="delay-100">
            <ProvenProcessSection />
          </AnimatedSection>

          <AnimatedSection delay="delay-50">
            <ComprehensivePropertyServices />
          </AnimatedSection>

          {/* <AnimatedSection delay="delay-100">
            <section className="py-16 md:py-24">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4">Who We Help</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
                  Whether you're purchasing your first home, expanding your property portfolio as an investor, or looking to upgrade or downsize, we offer personalized guidance every step of the way. Our experienced buyers’ agents are dedicated to understanding your needs and helping you navigate the property market with ease. From finding the perfect property to negotiating the best deal, we ensure the process is stress-free and tailored to your specific goals. Whether you're seeking a family home, a high-yield investment, or the right property for your next chapter, we are here to make your property journey a success.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whoWeHelpData.map((item) => (
                  <Link 
                    key={item.id} 
                    href={`/services/${item.slug}`} 
                    passHref 
                    className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative aspect-[4/3]"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      data-ai-hint={item.dataAiHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div 
                      className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/40 to-transparent"
                    >
                      <div className="px-4 pt-4 pb-2 md:px-6 md:pt-6 md:pb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                        <p className="text-sm text-gray-200 line-clamp-3 font-body"> 
                          {item.description}
                        </p>
                      </div>
                      
                      <div className="px-4 pb-4 md:px-6 md:pb-6">
                        <h3 className="font-headline text-xl md:text-2xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </AnimatedSection> */}

          <AnimatedSection delay="delay-150">
            <section id="where-we-service" className="py-16 md:py-24">
              <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                  <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4">Where We Service</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
                    Discover the diverse regions we proudly serve, where our dedicated team helps clients uncover their perfect homes and investment opportunities. Whether you're drawn to vibrant cityscapes, serene coastal havens, or charming suburban retreats, we bring local expertise and personalised service to Australia’s most sought-after locations. Let us guide you in finding a property that perfectly matches your lifestyle, goals, and dreams.
                  </p>
                </div>
                {isLoadingLocations && (
                  <div className="flex justify-center items-center py-10">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                  </div>
                )}
                {locationsError && <p className="text-center text-destructive">Error: {locationsError}</p>}
                {!isLoadingLocations && !locationsError && locations.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {locations.map((location) => (
                      <div key={location.id} className="block">
                        <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-card border border-border/30 overflow-hidden relative aspect-[4/3] rounded-lg">
                          <Image
                            src={location.image}
                            alt={location.name}
                            fill
                            style={{objectFit: 'cover'}}
                            className="scale-105 transition-transform duration-500 ease-in-out"
                            data-ai-hint={location.dataAiHint}
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent from-black/90 transition-all duration-300"></div>
                          <CardContent className="absolute bottom-0 left-0 right-0 p-4 text-center">
                            <h3 className="font-headline text-xl md:text-2xl font-semibold text-white text-accent transition-colors duration-300">
                              {location.name}
                            </h3>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                )}
                {!isLoadingLocations && !locationsError && locations.length === 0 && (
                   <p className="text-center text-muted-foreground">No service locations to display currently.</p>
                )}
              </div>
            </section>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
