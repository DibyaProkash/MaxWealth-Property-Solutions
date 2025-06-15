
// src/app/services/[serviceSlug]/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  whoWeHelpData,
  servicePageAdvocates,
  recentPurchasesData,
  servicePageCtaCardsData,
  servicePageBenefitPointsData,
  howWeHelpStepsData,
  genericServicePageTestimonial,
  awardsPlaceholderText,
  serviceLocationsData,
  type WhoWeHelpItem,
  type ServicePageAdvocate,
  type RecentPurchaseItem,
  type ServicePageCtaCardItem,
  type ServicePageBenefitPoint,
  type HowWeHelpStep,
  type ServiceLocationItem,
} from '@/lib/data';
import Footer from '@/components/layout/footer';
import AnimatedSection from '@/components/layout/animated-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ContactFormServicePage from '@/components/forms/contact-form-service-page';
import { ArrowLeft, CheckCircle, ChevronRight, Home, Award as AwardIcon, Users, MessageSquare, MapPinIcon, ThumbsUp, Star } from 'lucide-react';

export async function generateStaticParams() {
  return whoWeHelpData.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceSlug = typeof params.serviceSlug === 'string' ? params.serviceSlug : '';
  const [serviceData, setServiceData] = useState<WhoWeHelpItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (serviceSlug) {
      setIsLoading(true);
      const data = whoWeHelpData.find(s => s.slug === serviceSlug);
      if (data) {
        setServiceData(data);
      }
      setIsLoading(false);
      window.scrollTo(0, 0);
    }
  }, [serviceSlug]);

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex items-center justify-center bg-background">
          <ArrowLeft className="h-16 w-16 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!serviceData) {
    notFound();
    return null;
  }

  const currentServiceAdvocates = servicePageAdvocates.slice(0, 12); // Example: show first 12

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {/* Header Section */}
        <AnimatedSection className="bg-primary text-primary-foreground py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              We Offer {serviceData.title} Buying Services
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Expert guidance to help you secure your ideal {serviceData.title.toLowerCase()}.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link href="#service-contact-form">
                Book a Free Consultation
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        <div className="container mx-auto px-4 py-8 md:py-16">
           <AnimatedSection>
             <div className="mb-8">
                <Button variant="outline" asChild>
                    <Link href="/about/our-services">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Our Services
                    </Link>
                </Button>
            </div>
          </AnimatedSection>


          {/* Contact Form & Intro Text Section */}
          <AnimatedSection delay="delay-50" id="service-contact-form">
            <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-start mb-16">
              <div className="md:col-span-3 space-y-6">
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary">
                  Are you considering buying a {serviceData.title.toLowerCase()}?
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Look no further! At MaxWealth PS, we specialise in assisting buyers of {serviceData.title.toLowerCase()}s across Australia, including those looking to buy in Queensland, New South Wales and Victoria. Whether you're a first-time homebuyer or an experienced investor, our team is here to help you navigate the complexities of the real estate market and find your perfect property.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  With our extensive experience and personalised approach, we understand the unique needs and preferences of property buyers. Our dedicated team of experts is committed to providing you with the guidance and support you need to make informed decisions throughout the buying process.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  From conducting comprehensive property searches to negotiating the best deals on your behalf, our buyers agents are dedicated to helping you find the ideal {serviceData.title.toLowerCase()} that meets your needs and fits your budget. Let us take the stress out of buying and help you achieve your property ownership goals. Contact us today to learn more!
                </p>
              </div>
              <div className="md:col-span-2">
                <Card className="shadow-xl bg-card border-accent/30 sticky top-24">
                  <CardHeader className="bg-accent/5">
                    <CardTitle className="font-headline text-xl text-primary">Get Started Today</CardTitle>
                    <CardDescription>Fill out the form for a free consultation.</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ContactFormServicePage serviceName={serviceData.title} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>

          {/* Testimonial Section */}
          <AnimatedSection delay="delay-100" className="py-12 bg-secondary rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <Image
                src={genericServicePageTestimonial.image}
                alt={genericServicePageTestimonial.name}
                width={120}
                height={120}
                className="rounded-full mx-auto mb-6 shadow-lg border-4 border-background"
                data-ai-hint={genericServicePageTestimonial.dataAiHint}
              />
              <p className="font-body text-lg italic text-muted-foreground mb-4">
                "{genericServicePageTestimonial.quote}"
              </p>
              <p className="font-semibold text-primary">{genericServicePageTestimonial.name} <span className="font-normal text-sm text-muted-foreground">| {genericServicePageTestimonial.role}</span></p>
            </div>
          </AnimatedSection>

          {/* Awards Section */}
          <AnimatedSection delay="delay-150" className="py-16 text-center">
            <AwardIcon className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-3">
              Australia's Most Awarded Property Buyers' Advocates
            </h2>
            <p className="text-muted-foreground">{awardsPlaceholderText}</p>
          </AnimatedSection>

          {/* Our Award Winning Buyers' Advocates Section */}
          <AnimatedSection delay="delay-200" className="py-12">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary text-center mb-10">
              Our Award Winning Buyers' Advocates
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {currentServiceAdvocates.map(advocate => (
                <Card key={advocate.id} className="text-center shadow-md hover:shadow-lg transition-shadow bg-card">
                  <CardContent className="p-4">
                    <div className="relative w-full aspect-[4/5] mb-3 rounded overflow-hidden">
                        <Image src={advocate.image} alt={advocate.name} fill style={{objectFit: 'cover', objectPosition: 'top'}} data-ai-hint={advocate.dataAiHint} sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw" />
                    </div>
                    <h3 className="font-semibold text-primary text-sm">{advocate.name}</h3>
                    <p className="text-xs text-muted-foreground">{advocate.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>

          {/* Where We Service Section */}
          <AnimatedSection delay="delay-250" className="py-16 bg-secondary rounded-lg">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary text-center mb-10">
              Where We Service
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6 justify-center">
              {serviceLocationsData.slice(0, 8).map(location => ( // Show first 8 locations as example
                <Link key={location.id} href={`/locations/${location.slug}`} passHref className="group block text-center">
                    <Button variant="ghost" className="h-auto p-2 flex flex-col items-center space-y-1 hover:bg-primary/5">
                        <MapPinIcon className="h-6 w-6 text-accent mb-1 group-hover:text-primary transition-colors" />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">{location.name}</span>
                    </Button>
                </Link>
              ))}
            </div>
          </AnimatedSection>

          {/* "Are you interested..." & "Benefits..." Text Sections */}
          <AnimatedSection delay="delay-300" className="py-16 space-y-10">
            <div>
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4">
                Are you interested in becoming a Home Owner?
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-3">
                It’s an anxious time, for first-time home buyers, as well as those who have a few property purchases under their belt. Help is at hand, however, as our expert property buyers’ agents have extensive knowledge of the real estate market in NSW, VIC, and QLD, especially in the prime residential suburbs of Sydney, Melbourne, and Brisbane.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-xl md:text-2xl font-semibold text-primary mb-3">
                Benefits Of Using One Of Our Buyers' Agents
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-3">
                Our buyers’ agents will see you safely through all of the scenarios above, and then some. We provide a completely impartial and unbiased home buying service. We don’t have a hidden agenda or vested interest in any of the houses or apartments we show you.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-3">
                Instead of providing you with only a small selection of homes for sale from only one or two suburbs in either Sydney, Brisbane, and Melbourne, we scour all of the houses in the areas that meet your criteria. Ordinarily, this would take a tremendous amount of time, but our buyers’ agents are so knowledgeable that they already have a lot of the information necessary, such as sales prices in specific suburbs and market trends that influence where and when you should consider buying a home.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                We relieve the stress that home buyers feel when looking for a new house or apartment. Forget about months spent trawling the internet, weekends driving to inspections, and nights calling agents, only to feel like your perfect home is further away than ever. Whether you’re a first-time home buyer who has just started your journey towards buying a house, or you’re further along the process and have recently missed out at auction, or you have temporarily paused your search out of frustration or time constraints, don’t worry. This is the reason we exist.
              </p>
            </div>
          </AnimatedSection>

          {/* Recent Purchases Section */}
          <AnimatedSection delay="delay-350" className="py-12">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary text-center mb-10">
              Our Recent Purchases
            </h2>
            <p className="text-center text-muted-foreground mb-6">Facilitated by our expert buyers' agents</p>
            <Tabs defaultValue="residential" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-6">
                <TabsTrigger value="residential">Residential Purchases</TabsTrigger>
                <TabsTrigger value="commercial">Commercial Purchases</TabsTrigger>
              </TabsList>
              <TabsContent value="residential">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentPurchasesData.filter(p => p.category === 'Residential').slice(0,3).map(purchase => (
                    <Card key={purchase.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-card">
                      <div className="relative w-full aspect-video">
                        <Image src={purchase.image} alt={purchase.title} fill style={{objectFit: 'cover'}} data-ai-hint={purchase.dataAiHint} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-md font-semibold text-primary line-clamp-1">{purchase.name || purchase.title}</CardTitle>
                        <CardDescription className="text-xs">{purchase.city}</CardDescription>
                      </CardHeader>
                      <CardContent className="text-xs text-muted-foreground space-y-0.5 pt-0">
                        {Object.entries(purchase.details).slice(0, 3).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="font-medium capitalize">{key.toLowerCase()}:</span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>
                 {recentPurchasesData.filter(p => p.category === 'Residential').length > 3 && <div className="text-center mt-8"><Button variant="outline">Load More Residential</Button></div>}
                 {recentPurchasesData.filter(p => p.category === 'Residential').length === 0 && <p className="text-center text-muted-foreground py-4">No residential purchases to display currently.</p>}
              </TabsContent>
              <TabsContent value="commercial">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentPurchasesData.filter(p => p.category === 'Commercial').slice(0,3).map(purchase => (
                     <Card key={purchase.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-card">
                      <div className="relative w-full aspect-video">
                        <Image src={purchase.image} alt={purchase.title} fill style={{objectFit: 'cover'}} data-ai-hint={purchase.dataAiHint} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-md font-semibold text-primary line-clamp-1">{purchase.name || purchase.title}</CardTitle>
                        <CardDescription className="text-xs">{purchase.city}</CardDescription>
                      </CardHeader>
                      <CardContent className="text-xs text-muted-foreground space-y-0.5 pt-0">
                        {Object.entries(purchase.details).slice(0, 3).map(([key, value]) => (
                           <div key={key} className="flex justify-between">
                            <span className="font-medium capitalize">{key.toLowerCase()}:</span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {recentPurchasesData.filter(p => p.category === 'Commercial').length > 3 && <div className="text-center mt-8"><Button variant="outline">Load More Commercial</Button></div>}
                {recentPurchasesData.filter(p => p.category === 'Commercial').length === 0 && <p className="text-center text-muted-foreground py-4">No commercial purchases to display currently.</p>}
              </TabsContent>
            </Tabs>
          </AnimatedSection>

          {/* Three CTA Cards Section */}
          <AnimatedSection delay="delay-400" className="py-16">
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {servicePageCtaCardsData.map(item => {
                const Icon = item.icon;
                return (
                  <Card key={item.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card p-6 text-center flex flex-col items-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-headline text-lg font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground flex-grow">{item.description}</p>
                    <Button variant="link" className="mt-4 text-accent p-0">Learn More <ChevronRight className="ml-1 h-4 w-4"/></Button>
                  </Card>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Four Benefit Points Section */}
          <AnimatedSection delay="delay-450" className="py-12 bg-secondary rounded-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicePageBenefitPointsData.map(item => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="text-center px-4">
                    <div className="p-3 bg-primary text-primary-foreground rounded-full mb-4 inline-block">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-headline text-md font-semibold text-primary mb-2 uppercase">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection delay="delay-500" className="py-16 text-center">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let MaxWealth PS do the difficult work for you! We will not only search and help you find properties, we’ll also assist with negotiation, ensuring you pay the best price. Buying a home can be a simple and pleasurable experience if you have the right people providing valuable assistance.
            </p>
          </AnimatedSection>

          {/* How We Help Section */}
          <AnimatedSection delay="delay-550" className="py-12">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary text-center mb-10">
              How We Help You Find Your Dream Home
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">Our buyers' agents have extensive local knowledge in Sydney, Melbourne and Brisbane to give you advice you can trust regarding the purchase of your very first home, as well as up-to-date advice that may influence the purchase of your next home. Here's how we specialise in searching, appraising and negotiating home purchases in Australia:</p>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {howWeHelpStepsData.map(item => {
                const Icon = item.icon;
                return (
                  <Card key={item.id} className="shadow-md hover:shadow-lg transition-shadow bg-card p-6 text-center">
                    <div className="p-3 bg-accent/10 rounded-full mb-4 inline-block">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-headline text-lg font-semibold text-primary mb-2 uppercase">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                     <Button variant="link" className="mt-3 text-primary p-0">Learn More <ChevronRight className="ml-1 h-4 w-4"/></Button>
                  </Card>
                );
              })}
            </div>
          </AnimatedSection>

        </div>
      </main>
      <Footer />
    </div>
  );
}
