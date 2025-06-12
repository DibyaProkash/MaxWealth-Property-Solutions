
"use client";

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, ListFilter, ArrowDownUp, Search as SearchIcon, Newspaper } from 'lucide-react'; // Added Newspaper
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { articlesData, type Article } from '@/lib/data';

type SortOption = 'date-desc' | 'date-asc' | 'type-asc';
type FilterType = string; 

export default function ContentSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [sortOption, setSortOption] = React.useState<SortOption>('date-desc');
  const [filterType, setFilterType] = React.useState<FilterType>('all');
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const availableTypes = React.useMemo(() => {
    const types = new Set<string>(['all']);
    articlesData.forEach(article => types.add(article.type));
    return Array.from(types).sort((a, b) => {
      if (a === 'all') return -1;
      if (b === 'all') return 1;
      return a.localeCompare(b);
    });
  }, []);

  const displayedArticles = React.useMemo(() => {
    let processedArticles = [...articlesData];

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
  }, [sortOption, filterType, searchTerm]);

  // Determine carousel item count based on screen size for responsive looping and button display
  const [itemsPerView, setItemsPerView] = React.useState(3);

  React.useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) { // sm
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) { // md
        setItemsPerView(2);
      } else { // lg and up
        setItemsPerView(3);
      }
    };
    window.addEventListener('resize', updateItemsPerView);
    updateItemsPerView(); // Initial call
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);


  return (
    <section id="content" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Financial Insights & Updates</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our latest articles, guides, and company news on home financing.
          </p>
        </div>

        <div className="mb-10 p-4 border rounded-lg bg-background/50 shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                <div className="space-y-2">
                    <Label htmlFor="searchTerm" className="text-md font-semibold text-primary flex items-center">
                        <SearchIcon className="mr-2 h-5 w-5" /> Search Content:
                    </Label>
                    <Input
                        id="searchTerm"
                        type="text"
                        placeholder="e.g., mortgage rates, buyer tips..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-background"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="filterType" className="text-md font-semibold text-primary flex items-center">
                        <ListFilter className="mr-2 h-5 w-5" /> Filter by Type:
                    </Label>
                    <RadioGroup
                        id="filterType"
                        value={filterType}
                        onValueChange={(value: string) => setFilterType(value as FilterType)}
                        className="flex flex-wrap gap-x-4 gap-y-2 pt-2"
                    >
                        {availableTypes.map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                            <RadioGroupItem value={type} id={`filter-${type}`} />
                            <Label htmlFor={`filter-${type}`} className="font-normal cursor-pointer hover:text-primary capitalize">{type}</Label>
                        </div>
                        ))}
                    </RadioGroup>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="sortOption" className="text-md font-semibold text-primary flex items-center">
                        <ArrowDownUp className="mr-2 h-5 w-5" /> Sort by:
                    </Label>
                    <Select value={sortOption} onValueChange={(value: string) => setSortOption(value as SortOption)}>
                        <SelectTrigger id="sortOption" className="w-full bg-background">
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
              loop: displayedArticles.length > itemsPerView, 
            }}
            plugins={plugin.current ? [plugin.current] : []}
            onMouseEnter={() => plugin.current?.stop()}
            onMouseLeave={() => plugin.current?.reset()}
            className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
            // Adding a key to force re-render when itemsPerView changes for opts.loop to update
            key={displayedArticles.map(a => a.id).join('-') + '-' + sortOption + '-' + filterType + '-' + searchTerm + '-' + itemsPerView} 
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
                          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded font-medium flex items-center capitalize">
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
                          <Link href={`/insights/${article.id}`}>
                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {displayedArticles.length > itemsPerView && <CarouselPrevious className="hidden sm:flex" />}
            {displayedArticles.length > itemsPerView && <CarouselNext className="hidden sm:flex" />}
          </Carousel>
        ) : (
          <div className="text-center py-10 text-muted-foreground">
            <Newspaper className="mx-auto h-12 w-12 mb-4 text-primary/50" />
            <p className="text-lg">No articles match your current filter and search criteria.</p>
            <p>Try adjusting your selection or view all articles.</p>
          </div>
        )}
        
        <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="shadow-md hover:shadow-lg transition-shadow" 
                onClick={() => { 
                    setFilterType('all'); 
                    setSortOption('date-desc'); 
                    setSearchTerm(''); 
                }}>
                View All Insights
            </Button>
        </div>
      </div>
    </section>
  );
}

