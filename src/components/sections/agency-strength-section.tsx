
"use client";

import Image from 'next/image';
import { Award, DollarSign, Target, Eye } from 'lucide-react'; // Added Target, Eye
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Added Card components

export default function AgencyStrengthSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/australian-image.jpg" 
              alt="MaxWealth PS Team Collaboration in Australia" 
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              data-ai-hint="australian landscape team"
            />
          </div>
          <div>
            <h3 className="font-headline text-3xl md:text-4xl font-bold text-accent mb-6">
              MaxWealth Property Services: Your Trusted Property Purchase Consultants
            </h3>
            <p className="text-lg text-muted-foreground mb-8 font-body">
              We make achieving your property goals simple — offering expert guidance, tailored solutions, and exclusive access to financial opportunities. Trust our award-winning team to find the financial plan that fits your lifestyle and goals, minus the overwhelm. Our KPIs reflect extensive experience, billions in successfully financed properties, and a deep understanding of market dynamics.
            </p>
            {/* Removed Proven Track Record and Exclusive Financial Insights */}
          </div>
        </div>

        {/* NEW: Mission, Vision, Values section */}
        <div className="mt-16 md:mt-24">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader className="items-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl text-center text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Strategic advocacy for your confident property success.
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader className="items-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl text-center text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Australia's leading buyer's agency, building client wealth through property.
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
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
        </div>
      </div>
    </section>
  );
}
