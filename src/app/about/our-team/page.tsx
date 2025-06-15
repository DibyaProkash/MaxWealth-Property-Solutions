
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Briefcase, SearchCheck, TrendingUp, Users, Workflow, Building } from 'lucide-react';
import AnimatedSection from '@/components/layout/animated-section';
import { teamMembersDetailedData, servicesData, type TeamMemberDetailed, type ServiceOffering } from '@/lib/data';

export default function OurTeamPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <AnimatedSection>
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Link href="/about" passHref>
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to About Us
              </Button>
            </Link>
             <Link href="/" passHref>
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          <header className="text-center mb-12 md:mb-16">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                <Users className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Expert Team at MaxWealth PS
            </h1>
          </header>
        </AnimatedSection>

        {/* Introduction Section */}
        <AnimatedSection delay="delay-50">
          <Card className="mb-12 md:mb-16 shadow-lg bg-card">
            <CardContent className="p-6 md:p-8">
              <p className="text-lg text-muted-foreground mb-4 font-body">
                MaxWealth PS is a leading Australian Buyers Agency. Spearheaded by Jacqueline Dwyer, an award-winning property professional, we’re the go-to agency for savvy buyers seeking premium real estate in key metropolitan and regional centers.
              </p>
              <p className="font-headline text-xl text-primary mb-4">
                But here’s what really separates us from the rest…
              </p>
              <p className="text-muted-foreground mb-4 font-body">
                We’ve seen it all in 20+ years of real estate buying and selling—the wins, losses and competitive advantage that makes buying tough for the average punter with big dreams.
              </p>
              <p className="text-muted-foreground mb-4 font-body">
                Determined to shake things up, we set out to advocate exclusively for buyers, giving them the upper hand in real estate transactions. It’s our job (and pleasure) to step in, hunt and negotiate for buyers just like you who are strapped for time, dread ‘the chase’ and anxious about paying too much.
              </p>
              <p className="text-muted-foreground font-body">
                Our A-team will fight to find and skillfully secure your next property, on time and within budget. With MaxWealth PS on your side, property buying can be simple, stress-free and enjoyable. Who wouldn’t jump at that?
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Team Members Section */}
        <AnimatedSection delay="delay-100">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Meet Our Professionals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-16">
            {teamMembersDetailedData.map((member) => (
              <Card key={member.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 relative min-h-[250px] md:min-h-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      data-ai-hint={member.dataAiHint}
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <CardTitle className="font-headline text-xl text-primary">{member.name}</CardTitle>
                      <CardDescription className="text-accent">{member.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3 font-body">{member.bio}</p>
                      {member.specialties && member.specialties.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-1">Specialties:</h4>
                          <ul className="list-disc list-inside text-xs text-muted-foreground space-y-0.5">
                            {member.specialties.map(spec => <li key={spec}>{spec}</li>)}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection delay="delay-150">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Our Comprehensive Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card flex flex-col">
                  <CardHeader className="items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-3">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-4 text-center font-body">{service.intro}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <Button variant="outline" className="w-full mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                      <Link href="#contact">VIEW OUR FEES</Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

    