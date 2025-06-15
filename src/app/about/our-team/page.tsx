
"use client";

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, HomeIcon, Users, Linkedin, Mail, X as TwitterIcon, Instagram as InstagramIcon, X as CloseIcon } from 'lucide-react';
import AnimatedSection from '@/components/layout/animated-section';
import { teamMembersDetailedData, type TeamMemberDetailed } from '@/lib/data';
import Footer from '@/components/layout/footer';
import ServicesSectionHighlights from '@/components/sections/services-section-highlights';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

const founderData = {
  name: 'Jacqueline Dwyer',
  title: 'CEO & Founder & Buyers Advocate',
  bio: "Jacqueline, the esteemed CEO and Founder of MaxWealth PS, is more than a licensed financial advisor; she's a seasoned property investor and professional economist with over two decades of experience in the property industry. Her expertise extends to prestige real estate & luxury property in key metropolitan areas including Sydney's Eastern Suburbs, North Shore, and Northern Beaches, and nationally with offices servicing Melbourne, Brisbane and Gold Coast. Jacqueline has a keen focus on development sites, commercial properties, and investment markets Australia-wide.",
  image: 'https://placehold.co/400x450.png', 
  dataAiHint: 'woman professional portrait',
  logoText: 'MAXWEALTH PS',
};

export default function OurTeamPage() {
    const autoplayPlugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
    );

    const [itemsPerView, setItemsPerView] = React.useState(3);
    const [selectedMember, setSelectedMember] = React.useState<TeamMemberDetailed | null>(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

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
                  MaxWealth PS is a leading Australian Buyers Agency. Spearheaded by Jacqueline Dwyer, an award-winning property professional, we’re the go-to agency for discerning buyers seeking premium real estate in major cities and desirable regional hubs.
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
                                CEO &amp; FOUNDER
                            </h2>
                            <h3 className="font-headline text-2xl sm:text-3xl text-accent mb-6">
                                &amp; BUYERS ADVOCATE
                            </h3>
                            <p className="font-body text-primary-foreground/80 mb-6 leading-relaxed text-sm sm:text-base">
                                {founderData.bio}
                            </p>
                            <div className="mt-auto">
                            <p className="font-headline text-xl font-semibold text-primary-foreground/90">{founderData.logoText}</p>
                            <p className="text-sm text-primary-foreground/70">{founderData.title.split('&')[1].trim()} &amp; {founderData.title.split('&')[2].trim()}</p>
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
            {teamMembersDetailedData.length > 0 ? (
              <Carousel
                opts={{
                align: "start",
                loop: teamMembersDetailedData.length > itemsPerView,
                }}
                plugins={autoplayPlugin.current ? [autoplayPlugin.current] : []}
                onMouseEnter={() => autoplayPlugin.current?.stop()}
                onMouseLeave={() => autoplayPlugin.current?.play()}
                className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto mb-12 md:mb-16"
              >
                <CarouselContent className="-ml-4">
                {teamMembersDetailedData.map((member) => (
                    <CarouselItem key={member.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                        <Card className="text-center shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-card h-full flex flex-col">
                        <div className="relative h-60 w-full">
                            <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            style={{ objectFit: 'cover' }}
                            data-ai-hint={member.dataAiHint}
                            />
                        </div>
                        <CardContent className="p-6 flex-grow">
                            <Button variant="link" onClick={() => handleMemberClick(member)} className="p-0 h-auto font-headline text-xl text-primary hover:text-accent mb-1">
                                {member.name}
                            </Button>
                            <p className="text-accent">{member.title}</p>
                        </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                {teamMembersDetailedData.length > itemsPerView && <CarouselPrevious className="hidden sm:flex -left-4 md:-left-8 text-primary bg-background/70 hover:bg-background" />}
                {teamMembersDetailedData.length > itemsPerView && <CarouselNext className="hidden sm:flex -right-4 md:-right-8 text-primary bg-background/70 hover:bg-background" />}
              </Carousel>
            ) : (
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
                <div className="p-6 grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md mb-4">
                      <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="33vw"
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
                              <Link href={selectedMember.socialLinks.email}>
                                <Mail className="mr-2 h-4 w-4" /> Email
                              </Link>
                            </Button>
                          )}
                        </div>
                      )}
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-primary mb-2">About {selectedMember.name.split(' ')[0]}</h4>
                    <p className="text-sm text-muted-foreground mb-4 font-body leading-relaxed">
                      {selectedMember.bio}
                    </p>
                    {selectedMember.specialties && selectedMember.specialties.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Specialties:</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 font-body">
                          {selectedMember.specialties.map(spec => <li key={spec}>{spec}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                </ScrollArea>
                <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                    <CloseIcon className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                </DialogClose>
              </DialogContent>
            </Dialog>
          )}

          <AnimatedSection delay="delay-250">
            <ServicesSectionHighlights />
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
