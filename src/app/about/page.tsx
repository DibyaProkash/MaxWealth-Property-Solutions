
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/layout/animated-section';
import { Building, Users, ConciergeBell, Workflow, ArrowRight, HomeIcon } from 'lucide-react';
import Footer from '@/components/layout/footer';
import { aboutUsSubItems } from '@/lib/data'; // Using the updated sub-items for links

export default function AboutLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <AnimatedSection>
            <div className="mb-12 text-center">
               <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                <Building className="h-10 w-10 text-primary" />
              </div>
              <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                About MaxWealth PS
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover more about our company, our dedicated team, the services we offer, and our proven process for client success.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutUsSubItems.map((item) => (
              <AnimatedSection key={item.label} delay="delay-100">
                <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                  <CardHeader className="items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-3">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl text-primary">{item.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow text-center">
                    <CardDescription className="mb-6">{item.description}</CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto text-center">
                    <Button asChild className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href={item.href}>
                        Explore {item.label} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
           <AnimatedSection delay="delay-200">
             <div className="mt-16 text-center">
                <Button variant="outline" asChild>
                    <Link href="/">
                        <HomeIcon className="mr-2 h-4 w-4" /> Go Back to Homepage
                    </Link>
                </Button>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
