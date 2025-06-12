
import Image from 'next/image';
import { Handshake } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const partners = [
  { name: 'SecureBank', logo: 'https://placehold.co/150x60.png?text=SecureBank&font=sans-serif', dataAiHint: 'bank logo' },
  { name: 'RealtyPros', logo: 'https://placehold.co/150x60.png?text=RealtyPros&font=sans-serif', dataAiHint: 'estate logo' },
  { name: 'LegalEase', logo: 'https://placehold.co/150x60.png?text=LegalEase&font=sans-serif', dataAiHint: 'law logo' },
  { name: 'InspectWell', logo: 'https://placehold.co/150x60.png?text=InspectWell&font=sans-serif', dataAiHint: 'inspection logo' },
  { name: 'BuildRight Homes', logo: 'https://placehold.co/150x60.png?text=BuildRight&font=sans-serif', dataAiHint: 'builder logo' },
  { name: 'FinanceGrowth', logo: 'https://placehold.co/150x60.png?text=FinanceGrowth&font=sans-serif', dataAiHint: 'finance logo' },
  { name: 'CapitalTrust', logo: 'https://placehold.co/150x60.png?text=CapitalTrust&font=sans-serif', dataAiHint: 'investment logo' },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
           <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <Handshake className="h-10 w-10 text-primary" />
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Our Trusted Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading organizations to provide you with comprehensive home buying solutions.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner) => (
              <CarouselItem key={partner.name} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-2 md:pl-4">
                <div className="p-1">
                  <div className="flex items-center justify-center h-24 p-2 bg-background rounded-lg shadow-md opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <Image 
                      src={partner.logo} 
                      alt={partner.name} 
                      width={150} 
                      height={60} 
                      objectFit="contain"
                      data-ai-hint={partner.dataAiHint}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-50px] sm:left-[-60px]" />
          <CarouselNext className="right-[-50px] sm:right-[-60px]" />
        </Carousel>
      </div>
    </section>
  );
}
