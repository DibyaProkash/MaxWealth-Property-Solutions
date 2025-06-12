
import Image from 'next/image';
import { Handshake } from 'lucide-react';

const partners = [
  { name: 'SecureBank', logo: 'https://placehold.co/150x60.png', dataAiHint: 'bank logo' },
  { name: 'RealtyPros', logo: 'https://placehold.co/150x60.png', dataAiHint: 'estate logo' },
  { name: 'LegalEase', logo: 'https://placehold.co/150x60.png', dataAiHint: 'law logo' },
  { name: 'InspectWell', logo: 'https://placehold.co/150x60.png', dataAiHint: 'inspection logo' },
  { name: 'BuildRight Homes', logo: 'https://placehold.co/150x60.png', dataAiHint: 'builder logo' },
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

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {partners.map((partner) => (
            <div key={partner.name} className="opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Image 
                src={partner.logo} 
                alt={partner.name} 
                width={150} 
                height={60} 
                objectFit="contain"
                data-ai-hint={partner.dataAiHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
