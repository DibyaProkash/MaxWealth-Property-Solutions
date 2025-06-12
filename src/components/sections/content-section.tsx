
"use client";

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Newspaper, Video, ListFilter, ArrowDownUp } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { articlesData, type Article } from '@/lib/data';

type SortOption = 'date-desc' | 'date-asc' | 'type-asc';
type FilterType = 'all' | 'Blog' | 'Vlog';

export default function ContentSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [currentArticles, setCurrentArticles] = React.useState<Article[]>(articlesData);
  const [sortOption, setSortOption] = React.useState<SortOption>('date-desc');
  const [filterType, setFilterType] = React.useState<FilterType>('all');

  const displayedArticles = React.useMemo(() => {
    let processedArticles = [...currentArticles];

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
  }, [currentArticles, sortOption, filterType]);

  return (
    <section id="content" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Financial Insights & Updates</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our latest articles, guides, and company news on home financing.
          </p>
        </div>

        <div className="mb-10">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-8">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Label htmlFor="filterType" className="text-md font-semibold text-primary flex items-center shrink-0">
                        <ListFilter className="mr-2 h-5 w-5" /> Filter by Type:
                    </Label>
                    <RadioGroup
                        id="filterType"
                        value={filterType}
                        onValueChange={(value: string) => setFilterType(value as FilterType)}
                        className="flex flex-wrap gap-x-4 gap-y-2 justify-center"
                    >
                        {(['all', 'Blog', 'Vlog'] as FilterType[]).map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                            <RadioGroupItem value={type} id={`filter-${type}`} />
                            <Label htmlFor={`filter-${type}`} className="font-normal cursor-pointer hover:text-primary">{type}</Label>
                        </div>
                        ))}
                    </RadioGroup>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Label htmlFor="sortOption" className="text-md font-semibold text-primary flex items-center shrink-0">
                        <ArrowDownUp className="mr-2 h-5 w-5" /> Sort by:
                    </Label>
                    <Select value={sortOption} onValueChange={(value: string) => setSortOption(value as SortOption)}>
                        <SelectTrigger id="sortOption" className="w-full sm:w-[200px] bg-background">
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
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
            key={displayedArticles.map(a => a.id).join('-') + '-' + sortOption + '-' + filterType} 
          >
            <CarouselContent className="-ml-4">
              {displayedArticles.map((article) => (
                <CarouselItem key={article.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
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
                          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded font-medium flex items-center">
                            <article.icon className="w-4 h-4 mr-1" />
                            {article.type}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow p-6">
                        <CardTitle className="font-headline text-xl text-primary mb-2 leading-tight">{article.title}</CardTitle>
                        <p className="text-xs text-muted-foreground mb-2">Published: {new Date(article.date).toLocaleDateString()}</p>
                        <p className="text-muted-foreground text-sm font-body line-clamp-3">{article.description}</p>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button variant="link" className="text-accent p-0 h-auto" asChild>
                          <a href={article.link}>
                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        ) : (
          <div className="text-center py-10 text-muted-foreground">
            <Newspaper className="mx-auto h-12 w-12 mb-4 text-primary/50" />
            <p className="text-lg">No articles match your current filter and sort criteria.</p>
            <p>Try adjusting your selection or view all articles.</p>
          </div>
        )}
        
        <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="shadow-md hover:shadow-lg transition-shadow" onClick={() => { setFilterType('all'); setSortOption('date-desc'); }}>
                View All Insights
            </Button>
        </div>
      </div>
    </section>
  );
}
