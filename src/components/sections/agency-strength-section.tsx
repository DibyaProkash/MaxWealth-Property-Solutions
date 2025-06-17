
"use client";

import Image from 'next/image';
import { Award, DollarSign } from 'lucide-react';

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
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="p-2.5 bg-primary/10 rounded-md mt-1">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-headline text-xl font-semibold text-primary mb-1">Proven Track Record</h4>
                  <p className="text-sm text-muted-foreground font-body">Years of success helping clients secure their dream homes and investments.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2.5 bg-primary/10 rounded-md mt-1">
                  <DollarSign className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-headline text-xl font-semibold text-primary mb-1">Exclusive Financial Insights</h4>
                  <p className="text-sm text-muted-foreground font-body">Access to comprehensive market analysis and tailored financial strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
