
import { Button } from '@/components/ui/button';
import { TriangleAlert } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from '@/components/layout/animated-section';
import Footer from '@/components/layout/footer';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow container mx-auto flex items-center justify-center px-6 py-12 text-center">
        <AnimatedSection>
          <div className="max-w-md">
            <div className="inline-block p-4 bg-destructive/10 rounded-full mb-6">
              <TriangleAlert className="h-16 w-16 text-destructive" />
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-destructive mb-6">
              404
            </h1>
            <h2 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-4">
              Oops! Page Not Found.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Button size="lg" asChild className="shadow-md hover:shadow-lg transition-shadow bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/">
                Return to Homepage
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
