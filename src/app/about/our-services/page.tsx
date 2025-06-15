
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ConciergeBell, HomeIcon, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/layout/animated-section';
import ServicesSectionHighlights from '@/components/sections/services-section-highlights';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { whoWeHelpData, serviceLocationsData } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function OurServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-background text-foreground">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <AnimatedSection>
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <Link href="/about" passHref>
                <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to About Overview
                </Button>
                </Link>
                <Link href="/" passHref>
                <Button variant="outline">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    Back to Home
                </Button>
                </Link>
            </div>
            <header className="text-center mb-12 md:mb-16">
              <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                  <ConciergeBell className="h-10 w-10 text-primary" />
              </div>
              <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Our Comprehensive Services
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
                Discover the range of expert services MaxWealth PS offers to make your property journey seamless and successful.
              </p>
            </header>
          </AnimatedSection>

          {/* Who We Help Section */}
          <AnimatedSection delay="delay-100">
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
                    <div // Overlay container for gradient, title, and description
                      className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/40 to-transparent"
                    >
                      {/* Description: initially hidden, slides up */}
                      <div className="px-4 pt-4 pb-2 md:px-6 md:pt-6 md:pb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                        <p className="text-sm text-gray-200 line-clamp-3 font-body"> {/* Increased line-clamp for better visibility */}
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Title: always visible at the bottom */}
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
          </AnimatedSection>

          {/* Where We Service Section */}
          <AnimatedSection delay="delay-150">
            <section id="where-we-service" className="py-16 md:py-24 bg-secondary rounded-lg">
              <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                  <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4">Where We Service</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
                    Discover the diverse regions we proudly serve, where our dedicated team helps clients uncover their perfect homes and investment opportunities. Whether you're drawn to vibrant cityscapes, serene coastal havens, or charming suburban retreats, we bring local expertise and personalised service to Australia’s most sought-after locations. Let us guide you in finding a property that perfectly matches your lifestyle, goals, and dreams.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                  {serviceLocationsData.map((location) => (
                    <Link key={location.id} href={`/locations/${location.slug}`} passHref className="group block">
                      <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-card border border-border/30 overflow-hidden relative aspect-[4/3] rounded-lg">
                        <Image
                          src={location.image}
                          alt={location.name}
                          fill
                          style={{objectFit: 'cover'}}
                          className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
                          data-ai-hint={location.dataAiHint}
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/90 transition-all duration-300"></div>
                        <CardContent className="absolute bottom-0 left-0 right-0 p-4 text-center">
                          <h3 className="font-headline text-xl md:text-2xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                            {location.name}
                          </h3>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Call to Action Cards Section */}
          <AnimatedSection delay="delay-200">
            <section className="py-16 md:py-24">
              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-primary text-primary-foreground p-6 md:p-10 rounded-lg flex flex-col justify-between items-center text-center relative overflow-hidden">
                  <div className="absolute inset-0">
                    <Image src="https://placehold.co/600x400.png" alt="Residential Property" fill style={{objectFit: 'cover'}} className="opacity-20" data-ai-hint="modern house family"/>
                  </div>
                  <div className="relative z-10 flex flex-col items-center h-full">
                    <h3 className="font-headline text-2xl md:text-3xl font-bold mb-3">Looking for Residential Property?</h3>
                    <p className="mb-6 text-primary-foreground/80 text-lg">
                      Are you searching for Home or Investment property?
                    </p>
                    <Button size="lg" variant="default" className="mt-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-md w-full sm:w-auto" asChild>
                      <Link href="/contact">
                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </Card>

                <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-accent text-accent-foreground p-6 md:p-10 rounded-lg flex flex-col justify-between items-center text-center relative overflow-hidden">
                   <div className="absolute inset-0">
                    <Image src="https://placehold.co/600x400.png" alt="Commercial Property" fill style={{objectFit: 'cover'}} className="opacity-20" data-ai-hint="office building city"/>
                  </div>
                  <div className="relative z-10 flex flex-col items-center h-full">
                    <h3 className="font-headline text-2xl md:text-3xl font-bold mb-3">Looking for Commercial Property?</h3>
                    <p className="mb-6 text-accent-foreground/80 text-lg">
                      Are you in search of the commercial property or Investment to grow your business.
                    </p>
                     <Button size="lg" variant="default" className="mt-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-md w-full sm:w-auto" asChild>
                       <Link href="/contact">
                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </section>
          </AnimatedSection>

          {/* Our Comprehensive Services Section (Moved to bottom) */}
          <AnimatedSection delay="delay-250">
            <ServicesSectionHighlights />
          </AnimatedSection>

        </div>
      </main>
      <Footer />
    </div>
  );
}
