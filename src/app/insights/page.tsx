
"use client";

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Newspaper, Search as SearchIcon, ListFilter, ArrowDownUp, Loader2, HomeIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/layout/animated-section';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mediaTypeIcons, type MediaType } from '@/lib/data/media-types'; // Import from new location
import Footer from '@/components/layout/footer'; // Assuming Footer is needed
import BackButton from '@/components/layout/back-button';

// Define Article type for this page, matching API response (no icon component)
export interface ArticleForPage {
  id: string;
  title: string;
  description: string;
  image: string;
  dataAiHint: string;
  type: MediaType;
  category: string;
  date: string;
  author?: string;
  tags?: string[];
  readTime?: string;
  views?: string;
}

type SortOption = 'date-desc' | 'date-asc' | 'type-asc';
type FilterType = string; 

export default function AllInsightsPage() {
  const [sortOption, setSortOption] = React.useState<SortOption>('date-desc');
  const [filterType, setFilterType] = React.useState<FilterType>('all');
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const [allArticles, setAllArticles] = React.useState<ArticleForPage[]>([]);
  const [isLoadingData, setIsLoadingData] = React.useState(true);
  const [fetchError, setFetchError] = React.useState<string | null>(null);


  React.useEffect(() => {
    const fetchArticles = async () => {
      setIsLoadingData(true);
      setFetchError(null);
      try {
        const response = await fetch('/api/articles');
        if (!response.ok) {
            throw new Error(`Failed to fetch insights: ${response.statusText}`);
        }
        const data: ArticleForPage[] = await response.json();
        setAllArticles(data);
      } catch (error: any) {
        console.error("Error fetching insights:", error);
        setFetchError(error.message || 'Could not load insights. Please try again later.');
      } finally {
        setIsLoadingData(false);
      }
    };
    fetchArticles();
  }, []);

  const availableTypes = React.useMemo(() => {
    const types = new Set<string>(['all']);
    allArticles.forEach(article => types.add(article.type));
    return Array.from(types).sort((a, b) => {
      if (a === 'all') return -1;
      if (b === 'all') return 1;
      return a.localeCompare(b);
    });
  }, [allArticles]);

  const displayedArticles = React.useMemo(() => {
    let processedArticles = [...allArticles];

    if (searchTerm.trim() !== '') {
      const lowerSearchTerm = searchTerm.toLowerCase();
      processedArticles = processedArticles.filter(article =>
        article.title.toLowerCase().includes(lowerSearchTerm) ||
        article.description.toLowerCase().includes(lowerSearchTerm) ||
        (article.tags && article.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm)))
      );
    }

    if (filterType !== 'all') {
      processedArticles = processedArticles.filter(article => article.type === filterType);
    }

    switch (sortOption) {
      case 'date-desc':
        processedArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'date-asc':
        processedArticles.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'type-asc':
        processedArticles.sort((a, b) => a.type.localeCompare(b.type));
        break;
    }
    return processedArticles;
  }, [sortOption, filterType, searchTerm, allArticles]);

  if (isLoadingData) {
    return (
      <div className="container mx-auto px-6 py-8 md:py-16 bg-background flex items-center justify-center" style={{minHeight: 'calc(100vh - 200px)'}}> {/* Adjust minHeight as needed */}
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (fetchError) {
     return (
      <div className="container mx-auto px-6 py-8 md:py-16 bg-background flex flex-col items-center justify-center text-center" style={{minHeight: 'calc(100vh - 200px)'}}>
        <Newspaper className="mx-auto h-12 w-12 mb-4 text-destructive/50" />
        <p className="text-lg text-destructive mb-2">{fetchError}</p>
        <p className="text-muted-foreground">Please try refreshing the page.</p>
      </div>
    );
  }


  return (
    <div className="container mx-auto px-6 py-8 md:py-16 bg-background">
      <AnimatedSection>
        <div className="mb-12">
          <div className="mb-6 flex flex-wrap gap-4">
            <BackButton />
            <Button variant="outline" asChild>
                <Link href="/">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </Button>
          </div>
          <div className="text-center">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                <Newspaper className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              All Financial Insights & Updates
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our collection of articles, guides, and company news on home financing.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="mb-10 p-4 border rounded-lg bg-card shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              <div className="space-y-2">
                  <Label htmlFor="searchTermInsights" className="text-md font-semibold text-primary flex items-center">
                      <SearchIcon className="mr-2 h-5 w-5" /> Search Content:
                  </Label>
                  <Input
                      id="searchTermInsights"
                      type="text"
                      placeholder="e.g., mortgage rates, buyer tips..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-background"
                  />
              </div>
              <div className="space-y-2">
                  <Label htmlFor="filterTypeInsights" className="text-md font-semibold text-primary flex items-center">
                      <ListFilter className="mr-2 h-5 w-5" /> Filter by Type:
                  </Label>
                  <RadioGroup
                      id="filterTypeInsights"
                      value={filterType}
                      onValueChange={(value: string) => setFilterType(value as FilterType)}
                      className="flex flex-wrap gap-x-4 gap-y-2 pt-2"
                  >
                      {availableTypes.map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                          <RadioGroupItem value={type} id={`filter-insights-${type}`} />
                          <Label htmlFor={`filter-insights-${type}`} className="font-normal cursor-pointer hover:text-primary capitalize">{type}</Label>
                      </div>
                      ))}
                  </RadioGroup>
              </div>
              <div className="space-y-2">
                  <Label htmlFor="sortOptionInsights" className="text-md font-semibold text-primary flex items-center">
                      <ArrowDownUp className="mr-2 h-5 w-5" /> Sort by:
                  </Label>
                  <Select value={sortOption} onValueChange={(value: string) => setSortOption(value as SortOption)}>
                      <SelectTrigger id="sortOptionInsights" className="w-full bg-background">
                      <SelectValue placeholder="Select sort order" />
                      </SelectTrigger>
                      <SelectContent>
                      <SelectItem value="date-desc">Newest First</SelectItem>
                      <SelectItem value="date-asc">Oldest First</SelectItem>
                      <SelectItem value="type-asc">Type (A-Z)</SelectItem>
                      </SelectContent>
                  </Select>
              </div>
          </div>
      </div>

      {displayedArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedArticles.map((article) => {
            const ArticleIcon = mediaTypeIcons[article.type] || Newspaper;
            return (
            <AnimatedSection key={article.id} delay="delay-100">
              <div className="h-full">
                <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-card">
                  <CardHeader className="p-0">
                    <div className="relative h-52 w-full">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        data-ai-hint={article.dataAiHint}
                      />
                      <Badge variant="secondary" className="absolute top-2 right-2 capitalize flex items-center bg-secondary text-secondary-foreground">
                        <ArticleIcon className="w-4 h-4 mr-1.5" />
                        {article.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow p-6">
                    <CardTitle className="font-headline text-xl text-primary mb-2 leading-tight">{article.title}</CardTitle>
                    <p className="text-xs text-muted-foreground mb-3">
                      Published: {new Date(article.date).toLocaleDateString()}
                      {article.author && ` by ${article.author}`}
                    </p>
                    <p className="text-muted-foreground text-sm font-body line-clamp-4">{article.description}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 mt-auto">
                    <Button variant="link" className="text-accent p-0 h-auto" asChild>
                      <Link href={`/insights/${article.id}`}>
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </AnimatedSection>
          );
        })}
        </div>
      ) : (
        <div className="text-center py-10">
          <Newspaper className="mx-auto h-12 w-12 mb-4 text-primary/50" />
          <p className="text-lg text-muted-foreground">No insights match your current filter and search criteria.</p>
          <p className="text-muted-foreground">Try adjusting your selection.</p>
        </div>
      )}
    </div>
  );
}
