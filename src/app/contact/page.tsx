
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DetailedContactForm from "@/components/forms/detailed-contact-form";
import Footer from "@/components/layout/footer";
import AnimatedSection from "@/components/layout/animated-section";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Youtube, X as TwitterIcon } from "lucide-react";
import { maxWealthDifferenceData, type DifferencePoint } from '@/lib/data';

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-background text-foreground">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <AnimatedSection>
            <div className="text-center mb-10 md:mb-12">
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                CONTACT <span className="text-accent">US</span>
              </h1>
            </div>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">
                GET IN TOUCH WITH A <span className="text-accent">Buyer's Agent</span> TODAY
              </h2>
              <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-md md:text-lg font-body">
                Start the process of finding your perfect property right now by filling in the property brief to tell us exactly what type of property you’re seeking, and we will be in contact with you ASAP. Or fill in the quick form below to get in touch with one of our buyers’ agents.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay="delay-100">
            <Card className="p-6 md:p-8 lg:p-12 shadow-xl bg-card border border-border/20 rounded-xl">
              <div className="grid lg:grid-cols-5 gap-10 md:gap-16">
                {/* Left Column: Form */}
                <div className="lg:col-span-3">
                  <h3 className="font-headline text-2xl md:text-3xl mb-6 text-primary">
                    BOOK A <span className="text-accent">Free</span> CONSULTATION
                  </h3>
                  <DetailedContactForm />
                </div>

                {/* Right Column: Office Info & Map */}
                <div className="lg:col-span-2">
                  <h3 className="font-headline text-2xl md:text-3xl mb-6 text-primary">NATIONAL HEAD OFFICE</h3>
                  <div className="space-y-3 text-md text-muted-foreground font-body mb-6">
                    <p><strong className="text-foreground">EMAIL:</strong> <a href="mailto:info@maxwealthps.com" className="hover:text-accent">info@maxwealthps.com</a></p>
                    <p><strong className="text-foreground">PHONE:</strong> <a href="tel:1300655615" className="hover:text-accent">1300 655 615</a></p>
                    <p><strong className="text-foreground">INTERNATIONAL PHONE:</strong> <a href="tel:+61299753311" className="hover:text-accent">(+61 2) 9975 3311</a></p>
                  </div>
                  <div className="flex space-x-4 mb-8">
                    {[
                      { href: "#", icon: Linkedin, label: "LinkedIn" },
                      { href: "#", icon: Facebook, label: "Facebook" },
                      { href: "#", icon: Instagram, label: "Instagram" },
                      { href: "#", icon: Youtube, label: "YouTube" },
                      { href: "#", icon: TwitterIcon, label: "Twitter/X" },
                    ].map((social) => (
                      <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                        className="text-muted-foreground hover:text-accent transition-colors">
                        <social.icon className="h-6 w-6" />
                      </Link>
                    ))}
                  </div>
                  
                  <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="https://placehold.co/800x600.png"
                      alt="Map showing MaxWealth PS National Head Office"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                      data-ai-hint="city office map"
                    />
                     {/* Placeholder for actual Google Map Embed */}
                     {/* For a real map, you'd replace this Image with Google Maps iframe or SDK integration */}
                  </div>
                   <p className="text-xs text-muted-foreground mt-2 text-center">Map placeholder: Actual Google Maps integration would go here.</p>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          {/* MaxWealth PS Advantage Section */}
          <AnimatedSection delay="delay-200">
            <section className="py-16 md:py-24">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-3">
                  The <span className="text-accent">MaxWealth PS</span> Advantage
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover what sets us apart and how we deliver exceptional value to our clients.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {maxWealthDifferenceData.map((point) => {
                  const Icon = point.icon;
                  return (
                    <Card key={point.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-secondary/50 text-center p-6 flex flex-col items-center">
                      <div className="p-4 bg-primary/10 rounded-full mb-5 inline-block">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle className="font-headline text-xl text-primary mb-3">{point.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground flex-grow">{point.description}</CardDescription>
                    </Card>
                  );
                })}
              </div>
            </section>
          </AnimatedSection>

        </div>
      </main>
      <Footer />
    </div>
  );
}
