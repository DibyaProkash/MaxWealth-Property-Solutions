
"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { siteSearchableContent, type SearchResultItem } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Loader2, Search as SearchIconLucide, AlertTriangle, Newspaper, Home, Users, ConciergeBell, ListChecks, CalculatorIcon, HelpCircle, BrainCircuit, Download, MessageCircle, DollarSign, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import AnimatedSection from '@/components/layout/animated-section';
import Footer from '@/components/layout/footer';

const getIconForType = (type: SearchResultItem['type']): LucideIcon => {
  switch (type) {
    case 'Page': return Home;
    case 'Media': return Newspaper;
    case 'Service Type': return ConciergeBell;
    case 'Location': return MapPin;
    case 'Team Member': return Users;
    case 'Resource': return BookOpenCheck; // Default for resource-like pages
    case 'FAQ': return HelpCircle;
    default: return SearchIconLucide; // Default search icon
  }
};


function SearchPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [displayedSearchTerm, setDisplayedSearchTerm] = useState(initialQuery);
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Update displayedSearchTerm when initialQuery (from URL) changes
    setSearchTerm(initialQuery);
    setDisplayedSearchTerm(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    setIsLoading(true);
    if (displayedSearchTerm.trim() === '') {
      setResults([]);
      setIsLoading(false);
      return;
    }

    const performSearch = () => {
      const lowerQuery = displayedSearchTerm.toLowerCase();
      const filteredResults = siteSearchableContent.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(lowerQuery);
        const descriptionMatch = item.description.toLowerCase().includes(lowerQuery);
        const keywordsMatch = item.keywords?.some(keyword => keyword.toLowerCase().includes(lowerQuery));
        const categoryMatch = item.category?.toLowerCase().includes(lowerQuery);
        // For media, check tags if they exist
        let mediaTagsMatch = false;
        if (item.type === 'Media') {
          const mediaItem = item as any; // Cast to access potential tags if not directly on SearchResultItem
          mediaTagsMatch = mediaItem.tags?.some((tag: string) => tag.toLowerCase().includes(lowerQuery));
        }
        return titleMatch || descriptionMatch || !!keywordsMatch || !!categoryMatch || mediaTagsMatch;
      });
      setResults(filteredResults);
      setIsLoading(false);
    };
    
    // Debounce search or search directly
    const timer = setTimeout(() => {
        performSearch();
    }, 300); // Small debounce

    return () => clearTimeout(timer);

  }, [displayedSearchTerm]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Update URL and trigger useEffect for search
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    setDisplayedSearchTerm(searchTerm); // This will trigger the search useEffect
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-6 py-8 md:py-16">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                <SearchIconLucide className="h-10 w-10 text-primary" />
              </div>
              <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                Search Results
              </h1>
              <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto flex gap-2">
                <Input
                  type="search"
                  value={searchTerm}
                  onChange={handleSearchInputChange}
                  placeholder="Search the site..."
                  className="flex-grow text-lg p-3"
                  aria-label="Search site"
                />
                <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Search
                </Button>
              </form>
            </div>
          </AnimatedSection>

          <AnimatedSection delay="delay-100">
            {isLoading ? (
              <div className="flex justify-center items-center py-10">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
              </div>
            ) : (
              <>
                {displayedSearchTerm.trim() !== '' && (
                   <p className="text-muted-foreground mb-6 text-center md:text-left">
                    Showing {results.length} result{results.length === 1 ? '' : 's'} for: <strong className="text-primary">{displayedSearchTerm}</strong>
                  </p>
                )}
               
                {results.length === 0 && displayedSearchTerm.trim() !== '' ? (
                  <Card className="text-center py-10 shadow-md">
                    <CardContent>
                      <AlertTriangle className="mx-auto h-12 w-12 text-destructive/50 mb-4" />
                      <h2 className="text-xl font-semibold text-destructive mb-2">No Results Found</h2>
                      <p className="text-muted-foreground">
                        Sorry, we couldn't find any content matching your search for "{displayedSearchTerm}".
                        <br />
                        Try broadening your search terms or checking for typos.
                      </p>
                    </CardContent>
                  </Card>
                ) : results.length === 0 && displayedSearchTerm.trim() === '' ? (
                    <Card className="text-center py-10 shadow-md">
                        <CardContent>
                            <SearchIconLucide className="mx-auto h-12 w-12 text-primary/50 mb-4" />
                            <h2 className="text-xl font-semibold text-primary mb-2">Start Your Search</h2>
                            <p className="text-muted-foreground">
                                Enter a term in the search bar above to find content across MaxWealth PS.
                            </p>
                        </CardContent>
                    </Card>
                ) : (
                  <div className="space-y-6">
                    {results.map((item) => {
                      const ItemIcon = item.icon || getIconForType(item.type);
                      return (
                        <Card key={item.id} className="hover:shadow-lg transition-shadow duration-200">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle className="font-headline text-xl text-primary hover:text-accent">
                                <Link href={item.href}>{item.title}</Link>
                              </CardTitle>
                              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full flex items-center gap-1.5">
                                <ItemIcon className="h-3.5 w-3.5 opacity-70" />
                                {item.type}
                                {item.category && item.type === 'Media' && ` - ${item.category}`}
                              </span>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground text-sm line-clamp-3">{item.description}</p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Wrap the component with Suspense for useSearchParams
export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex items-center justify-center bg-background">
          <Loader2 className="h-16 w-16 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    }>
      <SearchPageContent />
    </Suspense>
  );
}
