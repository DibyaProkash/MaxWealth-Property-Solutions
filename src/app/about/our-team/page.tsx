
"use client";

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, HomeIcon, Users, Linkedin, Mail, X as TwitterIcon, Instagram as InstagramIcon, X as CloseIcon, Loader2, MapPin, CheckCircle, Clock } from 'lucide-react';
import AnimatedSection from '@/components/layout/animated-section';
import Footer from '@/components/layout/footer';
import ServicesSectionHighlights from '@/components/sections/services-section-highlights';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { TeamMemberDetailed } from '@/lib/data/team';
import FeeStructureSection from '@/components/sections/fee-structure-section';

const founderData = {
  name: 'Jyoti Poul Mitra',
  title: 'Founder & Buyers Advocate',
  bio: "Jyoti Poul Mitra, the visionary Founder of MaxWealth PS, brings extensive experience as a Buyers Advocate. With a deep understanding of property markets, Jyoti is dedicated to helping clients navigate the complexities of real estate investment and home buying, focusing on delivering tailored strategies and exceptional outcomes. Jyoti's expertise spans across residential and investment properties, ensuring clients achieve their property aspirations.",
  image: '/founder-jyoti-poul-mitra.jpg',
  dataAiHint: 'man professional casual',
};

export default function OurTeamPage() {
    const autoplayPlugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
    );

    const [itemsPerView, setItemsPerView] = React.useState(3);
    const [selectedMember, setSelectedMember] = React.useState<TeamMemberDetailed | null>(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const [teamMembers, setTeamMembers] = React.useState<TeamMemberDetailed[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchTeamMembers = async () => {
          setIsLoading(true);
          setError(null);
          try {
            const response = await fetch('/api/team');
            if (!response.ok) {
              throw new Error('Failed to fetch team members');
            }
            const data: TeamMemberDetailed[] = await response.json();
            setTeamMembers(data);
          } catch (err: any) {
            setError(err.message || 'Could not load team members.');
          } finally {
            setIsLoading(false);
          }
        };
        fetchTeamMembers();
    }, []);


    React.useEffect(() => {
        const updateItemsPerView = () => {
        if (window.innerWidth < 768) {
            setItemsPerView(1);
        } else if (window.innerWidth < 1024) {
            setItemsPerView(2);
        } else {
            setItemsPerView(3);
        }
        };
        window.addEventListener('resize', updateItemsPerView);
        updateItemsPerView();
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);

    const handleMemberClick = (member: TeamMemberDetailed) => {
        setSelectedMember(member);
        setIsModalOpen(true);
    };

    const canAutoplay = teamMembers.length > itemsPerView;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-background text-foreground">
        <div className="container mx-auto px-6 py-8 md:py-16">
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
                  <Users className="h-10 w-10 text-primary" />
              </div>
              <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Our Expert Team at MaxWealth PS
              </h1>
            </header>
          </AnimatedSection>

          <AnimatedSection delay="delay-50">
            <div className="mb-12 md:mb-16 text-lg text-muted-foreground font-body space-y-4 max-w-4xl mx-auto">
                <p>
                  MaxWealth PS is a leading Australian Buyers Agency. Spearheaded by Jyoti Poul Mitra, an award-winning property professional, we’re the go-to agency for discerning buyers seeking premium real estate in major cities and desirable regional hubs.
                </p>
                <p className="font-headline text-xl text-primary">
                  But here’s what really separates us from the rest…
                </p>
                <p>
                  We’ve seen it all in 20+ years of real estate buying and selling—the wins, losses and competitive advantage that makes buying tough for the average individual with big dreams. 
                </p>
                <p>
                  Determined to shake things up, we set out to advocate exclusively for buyers, giving them the upper hand in real estate transactions. It’s our job (and pleasure) to step in, hunt and negotiate for buyers just like you who are strapped for time, dread ‘the chase’ and are anxious about paying too much. 
                </p>
                <p>
                  Our A-team will strive to find and skillfully secure your next property, on time and within budget. With MaxWealth PS on your side, property buying can be simple, stress-free and enjoyable.
                </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay="delay-100">
            <div className="mt-16 md:mt-24 mb-12 md:mb-16">
                <Card className="bg-primary text-primary-foreground shadow-xl rounded-xl overflow-hidden">
                    <div className="grid md:grid-cols-5">
                        <div className="md:col-span-3 p-8 md:p-12">
                            <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-1">
                                {founderData.name}
                            </h2>
                            <h3 className="font-headline text-2xl sm:text-3xl text-accent mb-6">
                                {founderData.title}
                            </h3>
                            <p className="font-body text-primary-foreground/80 mb-6 leading-relaxed text-sm sm:text-base">
                                {founderData.bio}
                            </p>
                            <div className="mt-auto">
                                <p className="font-headline text-xl font-semibold text-primary-foreground/90">{founderData.title}</p>
                                <p className="text-sm text-primary-foreground/70">With {founderData.name}</p>
                            </div>
                        </div>
                        <div className="md:col-span-2 relative min-h-[300px] md:min-h-0">
                            <Image
                                src={founderData.image}
                                alt={founderData.name}
                                fill
                                style={{ objectFit: 'cover' }}
                                className="md:rounded-l-none"
                                data-ai-hint={founderData.dataAiHint}
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>
                    </div>
                </Card>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay="delay-150">
            <div className="text-center mb-8 mt-12">
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-2">Meet Our Expert Team</h3>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto font-body">
                Our experienced professionals are passionate about helping you succeed. Click on a team member to learn more.
              </p>
            </div>
            {isLoading && (
                <div className="flex justify-center items-center py-10">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                </div>
            )}
            {error && <p className="text-center text-destructive mb-12 md:mb-16">Error: {error}</p>}

            {!isLoading && !error && teamMembers.length > 0 && (
              <Carousel
                opts={{
                align: "start",
                loop: canAutoplay,
                }}
                plugins={canAutoplay ? (autoplayPlugin.current ? [autoplayPlugin.current] : []) : []}
                onMouseEnter={() => { if (canAutoplay && autoplayPlugin.current) autoplayPlugin.current.stop(); }}
                onMouseLeave={() => { if (canAutoplay && autoplayPlugin.current) autoplayPlugin.current.play(); }}
                className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto mb-12 md:mb-16"
              >
                <CarouselContent className="-ml-4">
                {teamMembers.map((member) => (
                    <CarouselItem key={member.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                        <Card className="shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-card h-full flex flex-col text-left">
                          <CardContent className="p-5 flex flex-col flex-grow">
                            <Avatar className="w-20 h-20 mx-auto mb-4 border-2 border-primary/10 shadow-md">
                              <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} />
                              <AvatarFallback className="text-2xl bg-muted text-muted-foreground">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>

                            <Button variant="link" onClick={() => handleMemberClick(member)} className="p-0 h-auto font-headline text-xl text-primary hover:text-accent mb-0.5 text-center justify-center">
                                {member.name}
                            </Button>
                            <p className="text-xs text-accent text-center mb-2">{member.title}</p>
                            
                            <div className="flex items-center justify-center text-xs text-muted-foreground mb-3">
                              <MapPin className="mr-1 h-3 w-3 flex-shrink-0" /> {member.location}
                            </div>

                            <p className="text-xs text-muted-foreground mb-4 font-body leading-relaxed line-clamp-3 min-h-[4.5rem] flex-grow">
                                {member.shortBio}
                            </p>

                            {member.credentials && member.credentials.length > 0 && (
                              <div className="mb-3">
                                <h4 className="text-[0.7rem] font-semibold text-primary/80 mb-1 uppercase tracking-wider">Credentials</h4>
                                <ul className="space-y-0.5">
                                  {member.credentials.slice(0,3).map(cred => (
                                    <li key={cred} className="flex items-center text-xs text-muted-foreground">
                                      <CheckCircle className="mr-1.5 h-3 w-3 text-green-500 flex-shrink-0" /> {cred}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {member.specialties && member.specialties.length > 0 && (
                              <div className="mb-4">
                                <h4 className="text-[0.7rem] font-semibold text-primary/80 mb-1.5 uppercase tracking-wider">Specialties</h4>
                                <div className="flex flex-wrap gap-1">
                                  {member.specialties.slice(0,3).map(spec => 
                                    <Badge key={spec} variant="secondary" className="text-[0.65rem] px-1.5 py-0.5 font-normal bg-secondary/70 text-secondary-foreground/80">{spec}</Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            <div className="mt-auto pt-3 border-t border-border/30 flex justify-between items-center">
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Clock className="mr-1.5 h-3 w-3" /> {member.yearsOfExperience}
                              </div>
                              <div className="flex space-x-2">
                                {member.socialLinks?.linkedin && member.socialLinks.linkedin !== '#' && (
                                    <Link href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`}>
                                        <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                                    </Link>
                                )}
                                {member.socialLinks?.email && (
                                    <Link href={`mailto:${member.socialLinks.email}`} aria-label={`Email ${member.name}`}>
                                        <Mail className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                                    </Link>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                {canAutoplay && <CarouselPrevious className="hidden sm:flex -left-4 md:-left-8 text-primary bg-background/70 hover:bg-background" />}
                {canAutoplay && <CarouselNext className="hidden sm:flex -right-4 md:-right-8 text-primary bg-background/70 hover:bg-background" />}
              </Carousel>
            )}
            {!isLoading && !error && teamMembers.length === 0 && (
              <p className="text-center text-muted-foreground mb-12 md:mb-16">Team information coming soon.</p>
            )}
          </AnimatedSection>

          {selectedMember && (
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogContent className="sm:max-w-2xl bg-card p-0">
                <DialogHeader className="p-6 pb-0">
                  <DialogTitle className="font-headline text-2xl text-primary">{selectedMember.name}</DialogTitle>
                  <DialogDescription className="text-accent">{selectedMember.title}</DialogDescription>
                </DialogHeader>
                <ScrollArea className="max-h-[70vh]">
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <div className="relative aspect-square rounded-lg overflow-hidden shadow-md mb-4 mx-auto w-48 h-48 md:w-full md:h-auto md:aspect-[3/4]">
                      <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 50vw, 33vw"
                        data-ai-hint={selectedMember.dataAiHint}
                      />
                    </div>
                     {selectedMember.socialLinks && (
                        <div className="space-y-2">
                          {selectedMember.socialLinks.linkedin && selectedMember.socialLinks.linkedin !== '#' && (
                            <Button variant="outline" asChild className="w-full">
                              <Link href={selectedMember.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                              </Link>
                            </Button>
                          )}
                          {selectedMember.socialLinks.twitter && selectedMember.socialLinks.twitter !== '#' && (
                            <Button variant="outline" asChild className="w-full">
                              <Link href={selectedMember.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                                <TwitterIcon className="mr-2 h-4 w-4" /> Twitter/X
                              </Link>
                            </Button>
                          )}
                          {selectedMember.socialLinks.instagram && selectedMember.socialLinks.instagram !== '#' && (
                            <Button variant="outline" asChild className="w-full">
                              <Link href={selectedMember.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                                <InstagramIcon className="mr-2 h-4 w-4" /> Instagram
                              </Link>
                            </Button>
                          )}
                          {selectedMember.socialLinks.email && (
                            <Button variant="outline" asChild className="w-full">
                              <Link href={`mailto:${selectedMember.socialLinks.email}`}>
                                <Mail className="mr-2 h-4 w-4" /> Email
                              </Link>
                            </Button>
                          )}
                        </div>
                      )}
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-primary mb-1">About {selectedMember.name.split(' ')[0]}</h4>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <MapPin className="mr-1.5 h-4 w-4 flex-shrink-0" /> {selectedMember.location}
                        <span className="mx-2">|</span>
                        <Clock className="mr-1.5 h-4 w-4 flex-shrink-0" /> {selectedMember.yearsOfExperience}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 font-body leading-relaxed">
                      {selectedMember.bio}
                    </p>
                    {selectedMember.credentials && selectedMember.credentials.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-primary mb-2">Credentials:</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 font-body">
                          {selectedMember.credentials.map(cred => <li key={cred}>{cred}</li>)}
                        </ul>
                      </div>
                    )}
                    {selectedMember.specialties && selectedMember.specialties.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedMember.specialties.map(spec => 
                            <Badge key={spec} variant="secondary" className="font-normal">{spec}</Badge>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          )}

          <AnimatedSection delay="delay-250">
            <ServicesSectionHighlights />
          </AnimatedSection>

          <FeeStructureSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
