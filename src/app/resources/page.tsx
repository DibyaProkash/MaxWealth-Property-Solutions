
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/layout/animated-section';
import { HelpCircle, BrainCircuit, Download, ArrowRight, BookOpen } from 'lucide-react';

const resourceLinks = [
  {
    title: 'Frequently Asked Questions (FAQ)',
    description: 'Find answers to common questions about home financing, our services, and the buying process.',
    href: '/resources/faq',
    icon: HelpCircle,
    cta: 'View FAQs',
  },
  {
    title: 'AI-Powered Tools',
    description: 'Leverage intelligent tools for document analysis, basic financial planning, market trends, and readiness assessment.',
    href: '/resources/ai-tools',
    icon: BrainCircuit,
    cta: 'Explore AI Tools',
  },
  {
    title: 'Free Guides & E-Books',
    description: 'Download valuable resources, checklists, and e-books to guide you through your home buying journey.',
    href: '/resources/free-guides',
    icon: Download,
    cta: 'Access Free Guides',
  },
];

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 bg-background">
      <AnimatedSection>
        <div className="mb-12 text-center">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <BookOpen className="h-10 w-10 text-primary" />
          </div>
          <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            MaxWealth PS Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your hub for financial knowledge, intelligent tools, and helpful guides to empower your home buying decisions.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resourceLinks.map((link) => (
          <AnimatedSection key={link.title} delay="delay-100">
            <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  <link.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl text-primary">{link.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <CardDescription className="mb-6">{link.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0 mt-auto text-center">
                <Button asChild className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={link.href}>
                    {link.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
