
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Eye, Award } from 'lucide-react';

const teamMembers = [
  { name: 'Alice Johnson', role: 'Lead Financial Advisor', image: 'https://placehold.co/300x300.png', dataAiHint: 'woman portrait' },
  { name: 'Bob Williams', role: 'Mortgage Specialist', image: 'https://placehold.co/300x300.png', dataAiHint: 'man portrait' },
  { name: 'Carol Davis', role: 'Client Relations Manager', image: 'https://placehold.co/300x300.png', dataAiHint: 'person smiling' },
];

export default function AboutUsSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">About MaxWealth PS</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are dedicated to empowering individuals and families to achieve their homeownership dreams through expert financial guidance and unwavering support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-lg">
            <CardHeader className="items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-xl text-center text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              To provide transparent, personalized financial strategies that make home buying accessible and stress-free.
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader className="items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-xl text-center text-primary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              To be the leading financial advisory firm recognized for integrity, expertise, and client success in the real estate market.
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader className="items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                 <Award className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-xl text-center text-primary">Our Values</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              Integrity, Client-Focus, Expertise, Empowerment, and Collaboration guide everything we do.
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-2">Meet Our Team</h3>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Our experienced professionals are passionate about helping you succeed.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center shadow-lg overflow-hidden">
              <div className="relative h-60 w-full">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  layout="fill" 
                  objectFit="cover" 
                  data-ai-hint={member.dataAiHint}
                />
              </div>
              <CardContent className="p-6">
                <h4 className="font-headline text-xl font-semibold text-primary mb-1">{member.name}</h4>
                <p className="text-accent">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
