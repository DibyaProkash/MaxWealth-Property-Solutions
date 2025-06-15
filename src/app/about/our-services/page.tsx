
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

          <AnimatedSection delay="delay-100">
            <ServicesSectionHighlights />
          </AnimatedSection>

          {/* Who We Help Section */}
          <AnimatedSection delay="delay-150">
            <section className="py-16 md:py-24">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4">Who We Help</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
                  Whether you're purchasing your first home, expanding your property portfolio as an investor, or looking to upgrade or downsize, we offer personalized guidance every step of the way. Our experienced buyers’ agents are dedicated to understanding your needs and helping you navigate the property market with ease. From finding the perfect property to negotiating the best deal, we ensure the process is stress-free and tailored to your specific goals. Whether you're seeking a family home, a high-yield investment, or the right property for your next chapter, we are here to make your property journey a success.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whoWeHelpData.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card flex flex-col">
                      <CardHeader className="items-center text-center">
                        <div className="relative h-40 w-full mb-4 rounded-t-md overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            style={{objectFit: 'cover'}}
                            data-ai-hint={item.dataAiHint}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                        <div className="p-2 bg-primary/10 rounded-full mb-2">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-xl text-primary">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow text-center">
                        <p className="text-sm text-muted-foreground font-body">{item.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>
          </AnimatedSection>

          {/* Where We Service Section */}
          <AnimatedSection delay="delay-200">
            <section className="py-16 md:py-24 bg-secondary rounded-lg">
              <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                  <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4">Where We Service</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
                    Discover the diverse regions we proudly serve, where our dedicated team helps clients uncover their perfect homes and investment opportunities. Whether you're drawn to vibrant cityscapes, serene coastal havens, or charming suburban retreats, we bring local expertise and personalised service to Australia’s most sought-after locations. Let us guide you in finding a property that perfectly matches your lifestyle, goals, and dreams.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
                  {serviceLocationsData.map((location) => (
                    <Card key={location.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-card overflow-hidden group text-center">
                      <div className="relative h-32 sm:h-40 w-full">
                        <Image
                          src={location.image}
                          alt={location.name}
                          fill
                          style={{objectFit: 'cover'}}
                          className="group-hover:scale-105 transition-transform duration-300"
                          data-ai-hint={location.dataAiHint}
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 33vw"
                        />
                      </div>
                      <CardContent className="p-3 sm:p-4">
                        <h3 className="font-headline text-md sm:text-lg font-semibold text-primary">{location.name}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Call to Action Cards Section */}
          <AnimatedSection delay="delay-250">
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
                      <Link href="#contact">
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
                       <Link href="#contact">
                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </section>
          </AnimatedSection>

        </div>
      </main>
      <Footer />
    </div>
  );
}
