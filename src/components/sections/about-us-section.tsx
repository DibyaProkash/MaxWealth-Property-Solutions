
"use client";

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Target, Eye, Award, Home, TrendingUp, Repeat, DollarSign, Briefcase, UserCircle } from 'lucide-react';

// FounderData and teamMembers carousel are removed from here and will be managed in /about/our-team page.

export default function AboutUsSection() {
  return (
    <section id="about-company" className="py-16 md:py-24 bg-background"> {/* Changed id for clarity */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">MaxWealth Property Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are dedicated to empowering individuals and families to achieve their homeownership dreams through expert financial guidance and unwavering support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
              <p>Integrity, Client-Focus, Expertise, Empowerment, and Collaboration guide everything we do.</p>
            </CardContent>
          </Card>
        </div>

        {/* Tailored Financial Solutions Sub-section START */}
        <div className="mt-16 md:mt-24 text-center">
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-6">
            Tailored and Streamlined Solutions for Every Property Purchase
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4 font-body">
            Navigating the path to property ownership can be complex, but at MaxWealth Property Services, we transform it into a clear and achievable journey. Our seasoned advisors leverage innovative financial strategies, meticulously aligned with your unique aspirations. Whether you're stepping onto the property ladder for the first time, seeking strategic investment opportunities, or optimizing your current mortgage, we provide proactive, expert guidance to illuminate every step forward.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 font-body">
            Our profound market understanding and access to an extensive array of financial products empower us to craft bespoke plans that precisely fit your circumstances. MaxWealth Property Services excels in structuring optimal financing solutions, always prioritizing your long-term value and success. We are committed to delivering a seamless, personalized experience that demystifies the financial landscape, minimizes stress, and maximizes your outcomes, regardless of your property goals.
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
        {/* Tailored Financial Solutions Sub-section END */}

        {/* Agency Strength Sub-section START */}
        <div className="mt-16 md:mt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://placehold.co/600x450.png" 
                alt="MaxWealth PS Team Collaboration" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                data-ai-hint="team meeting"
              />
            </div>
            <div>
              <h3 className="font-headline text-3xl md:text-4xl font-bold text-accent mb-6">
                MaxWealth PS: Your Trusted Financial Partner
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
        {/* Agency Strength Sub-section END */}

        {/* Founder Showcase and Team Carousel are removed from this component */}

      </div>
    </section>
  );
}
    

    

    





    