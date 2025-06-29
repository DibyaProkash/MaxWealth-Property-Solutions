
"use client";

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, BookMarked, Loader2 } from 'lucide-react';
import AnimatedSection from '@/components/layout/animated-section';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/layout/footer';
import BackButton from '@/components/layout/back-button';

// Define Guide type for this page
export interface Guide {
  id: string;
  title: string;
  description: string;
  image: string;
  dataAiHint: string;
  downloadLink?: string;
  category: string;
}


export default function FreeGuidesPage() {
  const [guides, setGuides] = React.useState<Guide[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchGuides = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/guides');
        if (!response.ok) {
          throw new Error('Failed to fetch guides');
        }
        const data: Guide[] = await response.json();
        setGuides(data);
      } catch (err: any) {
        setError(err.message || 'Could not load guides.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchGuides();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-6 py-8 md:py-16">
          <AnimatedSection>
            <div className="mb-12">
                <div className="mb-6">
                  <BackButton />
                </div>
                <div className="text-center">
                    <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                        <BookMarked className="h-10 w-10 text-primary" />
                    </div>
                    <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                        Free Tools, Guides & E-Books
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Access our curated collection of e-books, checklists, and guides to help you navigate the home buying process with confidence.
                    </p>
                </div>
            </div>
          </AnimatedSection>

          {isLoading && (
            <div className="flex justify-center items-center py-10">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          )}

          {error && (
            <div className="text-center py-10 text-destructive">
              <FileText className="mx-auto h-12 w-12 mb-4 opacity-50" />
              <p className="text-lg font-semibold">Error Loading Guides</p>
              <p>{error}</p>
            </div>
          )}

          {!isLoading && !error && guides.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {guides.map((guide) => (
                <AnimatedSection key={guide.id} delay="delay-100">
                  <div className="h-full">
                    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-card">
                      <CardHeader className="p-0">
                        <div className="relative h-52 w-full">
                          <Image
                            src={guide.image}
                            alt={guide.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: 'cover' }}
                            data-ai-hint={guide.dataAiHint}
                          />
                          <Badge variant="secondary" className="absolute top-2 right-2 capitalize bg-secondary text-secondary-foreground">
                            {guide.category}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow p-6">
                        <CardTitle className="font-headline text-xl text-primary mb-2 leading-tight">{guide.title}</CardTitle>
                        <CardDescription className="text-muted-foreground text-sm font-body line-clamp-4">{guide.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="p-6 pt-0 mt-auto">
                        <Button 
                            variant="default" 
                            className="w-full bg-accent text-accent-foreground hover:bg-accent/90" 
                            asChild={!!guide.downloadLink && guide.downloadLink !== '#'}
                            onClick={!guide.downloadLink || guide.downloadLink === '#' ? () => alert('Download link coming soon!') : undefined}
                        >
                          {guide.downloadLink && guide.downloadLink !== '#' ? (
                            <Link href={guide.downloadLink!} target="_blank" rel="noopener noreferrer">
                                <Download className="mr-2 h-4 w-4" /> Download Guide
                            </Link>
                          ) : (
                            <>
                                <Download className="mr-2 h-4 w-4" /> Download Guide (Soon)
                            </>
                          )}
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}

          {!isLoading && !error && guides.length === 0 && (
             <AnimatedSection>
                <div className="text-center py-10">
                <FileText className="mx-auto h-12 w-12 mb-4 text-primary/50" />
                <p className="text-lg text-muted-foreground">No guides or e-books available at the moment.</p>
                <p className="text-muted-foreground">Please check back soon for valuable resources!</p>
                </div>
            </AnimatedSection>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
