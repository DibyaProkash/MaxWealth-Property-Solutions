"use client";

import Image from 'next/image'; // Added Image import
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DetailedContactForm from "@/components/forms/detailed-contact-form";
import Footer from "@/components/layout/footer";
import AnimatedSection from "@/components/layout/animated-section";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Youtube, X as TwitterIcon, HomeIcon } from "lucide-react";
import { maxWealthDifferenceData, type DifferencePoint } from '@/lib/data';
import BackButton from '@/components/layout/back-button';

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-background text-foreground">
        <div className="container mx-auto px-6 py-12 md:py-16">
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
                  <h3 className="font-headline text-2xl md:text-3xl mb-6 text-primary">HEAD OFFICE</h3>
                  <div className="space-y-3 text-md text-muted-foreground font-body mb-6">
                    <p><strong className="text-foreground">LOCATION:</strong> Brisbane, Australia</p>
                    <p><strong className="text-foreground">EMAIL:</strong> <a href="mailto:info@maxwealthps.com" className="hover:text-accent">info@maxwealthps.com</a></p>
                    <p><strong className="text-foreground">PHONE:</strong> <a href="tel:+61432341008" className="hover:text-accent">+61432341008</a></p>
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
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9426.127535344827!2d153.02308776305853!3d-27.466444148579136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9159f65704ffab%3A0x8e6de954790d7e7c!2sWoolworths%20Metro%20Spring%20Hill!5e0!3m2!1sen!2sca!4v1751235219947!5m2!1sen!2sca"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map of Office Location"
                    ></iframe>
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-2">Our head office is located in Brisbane.</p>
                  
                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="font-headline text-xl text-primary text-center mb-3">Business Hours</h4>
                    <div className="space-y-1 text-md text-muted-foreground font-body text-center">
                        <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                        <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM (By Appointment)</p>
                        <p><strong>Sunday:</strong> Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
