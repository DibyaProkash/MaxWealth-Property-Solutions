
"use client";

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, TrendingUp, Repeat } from 'lucide-react'; // Removed Target, Eye, Award

export default function AboutUsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* The introductory heading and paragraph previously here has been removed */}

        {/* Tailored Financial Solutions Sub-section START */}
        <div className="mt-16 md:mt-24 text-center"> {/* Adjusted margin-top as the intro above is removed */}
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-6">
            Tailored and Streamlined Solutions for Every Property Purchase
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4 font-body">
            Navigating property ownership is complex. MaxWealth makes it simple. Our expert advisors craft clear, tailored financial strategies for first-time buyers, seasoned investors, and those looking to refinance.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 font-body">
            We leverage deep market knowledge to structure optimal solutions, prioritizing your long-term success and delivering a seamless, stress-free experience that maximizes your outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card p-6 text-center">
            <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
              <Home className="h-10 w-10 text-primary" />
            </div>
            <h4 className="font-headline text-xl font-semibold text-primary mb-2">First-Time Buyers</h4>
            <p className="text-muted-foreground text-sm mb-4 font-body">
              Find the perfect financial path to your first home, tailored to your lifestyle and budget.
            </p>
            <a href="#contact" className="text-sm font-medium text-accent hover:underline">Learn more</a>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card p-6 text-center">
            <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
              <TrendingUp className="h-10 w-10 text-primary" />
            </div>
            <h4 className="font-headline text-xl font-semibold text-primary mb-2">Experienced Buyers & Investors</h4>
            <p className="text-muted-foreground text-sm mb-4 font-body">
              Maximize long-term returns with strategic financing for your property investments.
            </p>
            <a href="#contact" className="text-sm font-medium text-accent hover:underline">Learn more</a>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card p-6 text-center">
            <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
              <Repeat className="h-10 w-10 text-primary" />
            </div>
            <h4 className="font-headline text-xl font-semibold text-primary mb-2">Refinancing Clients</h4>
            <p className="text-muted-foreground text-sm mb-4 font-body">
              Optimize your current mortgage terms and unlock potential savings with our refinancing expertise.
            </p>
            <a href="#contact" className="text-sm font-medium text-accent hover:underline">Learn more</a>
          </Card>
        </div>
      </div>
    </section>
  );
}
