
"use client";

import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react'; 
import Footer from '@/components/layout/footer';
import AnimatedSection from '@/components/layout/animated-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, MapPin, BuildingIcon, ExternalLink, Info, Users2, Loader2, Landmark, Target, Scale, Handshake, Lightbulb, Train, Sailboat, Plane, Utensils, ShoppingCart, Trees, Sparkles, HomeIcon } from 'lucide-react'; // Added HomeIcon
import ContactFormCityPage from '@/components/forms/contact-form-city-page'; 
import { BusIcon, CameraIcon } from '@/components/icons/custom-icons';


export interface AmenityContentItem {
  subTitle?: string;
  text: string;
  iconName?: string; 
}

export interface AmenitySection {
  title: string;
  content: AmenityContentItem[];
  image: string;
  imageAiHint: string;
}

export interface LocationDetail {
  slug: string;
  name: string;
  pageIntro: string;
  tagline?: string;
  specificIntroParagraphs: string[];
  amenities: {
    transport: AmenitySection;
    shopsAndRestaurants: AmenitySection;
    leisure: AmenitySection;
  };
  touristLink: string;
  heroImage: string;
  heroImageAiHint: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string; 
}


const iconMap: { [key: string]: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>> } = {
  Landmark, Target, Scale, Handshake, Lightbulb, Train, Sailboat, Plane, Utensils, ShoppingCart, Trees, Sparkles, Info, MapPin,
  BusIcon, CameraIcon
};

const getIconComponent = (iconName?: string): LucideIcon | React.FC<React.SVGProps<SVGSVGElement>> => {
  if (iconName && iconMap[iconName]) {
    return iconMap[iconName];
  }
  return Info; 
};


export default function CityLocationPage() {
  const params = useParams();
  const cityNameSlug = typeof params.cityName === 'string' ? params.cityName : '';
  const [cityData, setCityData] = useState<LocationDetail | null>(null);
  const [whyChooseUs, setWhyChooseUs] = useState<WhyChooseUsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cityNameSlug) {
      const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const [cityRes, whyChooseUsRes] = await Promise.all([
            fetch(`/api/locations/details/${cityNameSlug}`),
            fetch('/api/locations/why-choose-us')
          ]);

          if (!cityRes.ok) {
            if (cityRes.status === 404) throw new Error('CityNotFound');
            throw new Error('Failed to fetch city details');
          }
          const cityDetailsData: LocationDetail = await cityRes.json();
          setCityData(cityDetailsData);

          if (!whyChooseUsRes.ok) {
            throw new Error('Failed to fetch "why choose us" data');
          }
          const whyChooseUsItems: WhyChooseUsItem[] = await whyChooseUsRes.json();
          setWhyChooseUs(whyChooseUsItems);
          
          window.scrollTo(0, 0);
        } catch (err: any) {
          if (err.message === 'CityNotFound') {
            setCityData(null); 
          } else {
            setError(err.message || "Could not load city information.");
          }
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    } else {
      setIsLoading(false);
      setCityData(null);
    }
  }, [cityNameSlug]);

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex items-center justify-center bg-background">
          <Loader2 className="h-16 w-16 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex flex-col items-center justify-center bg-background p-4 text-center">
          <h1 className="text-xl font-semibold text-destructive">Error</h1>
          <p className="text-muted-foreground">{error}</p>
          <Button asChild variant="outline" className="mt-4">
            <Link href="/about/our-services#where-we-service">Back to Service Locations</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  if (!cityData) {
    notFound();
    return null; 
  }
  
  const {
    name,
    pageIntro,
    tagline,
    specificIntroParagraphs,
    amenities,
    touristLink,
    heroImage,
    heroImageAiHint
  } = cityData;

  const amenityOrder: Array<keyof LocationDetail['amenities']> = ['transport', 'shopsAndRestaurants', 'leisure'];


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <AnimatedSection>
          <div className="relative h-[350px] md:h-[450px] w-full group">
            <Image
              src={heroImage}
              alt={`${name} panoramic view`}
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="group-hover:scale-105 transition-transform duration-700 ease-in-out"
              data-ai-hint={heroImageAiHint}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-end text-center p-6 md:p-12">
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 shadow-lg">
                {pageIntro}
              </h1>
              {tagline && <p className="text-lg md:text-xl text-gray-200 shadow-md">{tagline}</p>}
            </div>
          </div>
        </AnimatedSection>

        <div className="container mx-auto px-6 py-8 md:py-12">
          <AnimatedSection delay="delay-50">
            <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <Button variant="outline" asChild>
                  <Link href="/about/our-services#where-we-service">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Service Locations
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay="delay-100">
            <section className="py-8 md:py-12">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-3 space-y-6">
                  <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary">
                    Your Property Journey in {name} Starts Here
                  </h2>
                  {specificIntroParagraphs.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground font-body leading-relaxed text-md">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="lg:col-span-2">
                  <Card className="shadow-xl bg-card border-accent/30 sticky top-24">
                    <CardHeader className="bg-accent/5">
                      <CardTitle className="font-headline text-xl text-primary">Enquire About {name} Properties</CardTitle>
                      <CardDescription>Let us help you find your dream property. Fill out the form below.</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ContactFormCityPage cityName={name} />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay="delay-150">
            <section className="py-8 md:py-12 text-center">
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-8">
                Our Recent Purchases in {name}
              </h2>
              <Card className="bg-muted/30 border-dashed border-border p-8 md:p-12 rounded-lg shadow-sm">
                <BuildingIcon className="h-16 w-16 text-primary/40 mx-auto mb-6" />
                <p className="text-xl text-muted-foreground mb-2">
                  Showcasing Success Stories Soon!
                </p>
                <p className="text-md text-muted-foreground max-w-xl mx-auto">
                  We're currently compiling a gallery of exceptional properties we've recently secured for our clients in {name}. Check back soon to see how we turn property dreams into reality.
                </p>
              </Card>
            </section>
          </AnimatedSection>

          <AnimatedSection delay="delay-200">
            <section className="py-12 md:py-16 bg-secondary rounded-xl shadow-lg">
              <div className="container mx-auto px-6">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                  WHY Choose MaxWealth PS for {name}?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {whyChooseUs.map((item) => {
                    const Icon = getIconComponent(item.iconName);
                    return (
                      <Card key={item.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card text-center p-2 hover:border-accent">
                        <CardHeader className="items-center pt-6 pb-3">
                          <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                            <Icon className="h-10 w-10 text-primary" />
                          </div>
                          <CardTitle className="font-headline text-xl text-primary">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-6">
                          <p className="text-sm text-muted-foreground font-body min-h-[60px]">{item.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay="delay-250">
            <section className="py-12 md:py-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-accent mb-12 md:mb-16 text-center uppercase">
                WHY {name}?
              </h2>
              <div className="space-y-12 md:space-y-20">
                {amenityOrder.map((key, index) => {
                  const amenity = amenities[key];
                  if (!amenity) return null;
                  const isImageLeft = index % 2 !== 0; 

                  return (
                    <div key={key} className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                      <div className={`relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl group ${isImageLeft ? 'md:order-first' : 'md:order-last'}`}>
                        <Image
                          src={amenity.image}
                          alt={amenity.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
                          data-ai-hint={amenity.imageAiHint}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className={`${isImageLeft ? 'md:order-last' : 'md:order-first'}`}>
                        <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-6 uppercase tracking-wider">
                          {amenity.title}
                        </h3>
                        {amenity.content.map((item, idx) => {
                           const ItemIcon = getIconComponent(item.iconName); 
                           return (
                            <div key={idx} className="mb-5">
                              {item.subTitle && (
                                <h4 className="font-semibold text-xl text-primary/80 mb-2 flex items-center">
                                   {item.iconName && <ItemIcon className="mr-2.5 h-5 w-5 text-accent opacity-80 flex-shrink-0" />}
                                  {item.subTitle}
                                </h4>
                              )}
                              <p className="text-muted-foreground font-body leading-relaxed text-md">{item.text}</p>
                            </div>
                           );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              {touristLink && touristLink !== '#' && (
                <div className="text-center mt-16">
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-all">
                    <Link href={touristLink} target="_blank" rel="noopener noreferrer">
                      More About {name} <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}
            </section>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}

