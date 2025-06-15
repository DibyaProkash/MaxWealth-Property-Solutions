
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Eye, Award, Home, TrendingUp, Repeat, DollarSign, Briefcase } from 'lucide-react';

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
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
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
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
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

        {/* Tailored Financial Solutions Sub-section START */}
        <div className="mt-16 md:mt-24 text-center">
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-6">
            Tailored Financial Solutions for Every Home Buyer
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4 font-body">
            At MaxWealth PS, we simplify the journey to homeownership with smart, successful financial strategies, combining innovative thinking with a clear focus on your goals. Whether you're a first-time home buyer, looking to invest, or refinancing your current property, our expert advisors are here to guide you every step of the way.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 font-body">
            With unmatched market insight and access to a wide range of financial products, we tailor each plan to your individual needs. Our team specializes in securing residential financing with a clear focus on value and client success. We proudly support homebuyers from all walks of life with a seamless, personalized service designed to minimize stress and maximize results.
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

        <div className="text-center mb-12 mt-16 md:mt-24">
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-2">Meet Our Team</h3>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-body">
            Our experienced professionals are passionate about helping you succeed.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-card">
              <div className="relative h-60 w-full">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
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

