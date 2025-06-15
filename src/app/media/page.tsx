
"use client";

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { articlesData, type Article, type MediaType, mediaTypeIcons } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Newspaper, ListFilter, ArrowDownUp, Mail, Eye, CalendarDays, User, Search as SearchIcon, Clock, BookText, Clapperboard, Video as VideoIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/layout/animated-section';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type SortOption = 'date-desc' | 'date-asc' | 'category-asc' | 'type-asc';

export default function AllMediaPage() {
  const [sortOption, setSortOption] = React.useState<SortOption>('date-desc');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const [selectedType, setSelectedType] = React.useState<MediaType | 'All'>('All');
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const categories = React.useMemo(() => {
    const counts: { [key: string]: number } = { 'All': 0 }; // Will sum all articles for "All"
    articlesData.forEach(article => {
      counts[article.category] = (counts[article.category] || 0) + 1;
    });
    counts['All'] = articlesData.length;
    return Object.entries(counts).map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name === 'All' ? -1 : b.name === 'All' ? 1 : a.name.localeCompare(b.name));
  }, []);

  const availableTypes = React.useMemo(() => {
    const types = new Set<MediaType>(articlesData.map(article => article.type));
    return ['All', ...Array.from(types).sort()] as (MediaType | 'All')[];
  }, []);


  const displayedArticles = React.useMemo(() => {
    let processedArticles = [...articlesData];

    if (selectedCategory !== 'All') {
      processedArticles = processedArticles.filter(article => article.category === selectedCategory);
    }

    if (selectedType !== 'All') {
      processedArticles = processedArticles.filter(article => article.type === selectedType);
    }

    if (searchTerm.trim() !== '') {
      const lowerSearchTerm = searchTerm.toLowerCase();
      processedArticles = processedArticles.filter(article =>
        article.title.toLowerCase().includes(lowerSearchTerm) ||
        article.description.toLowerCase().includes(lowerSearchTerm) ||
        (article.tags && article.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm)))
      );
    }

    switch (sortOption) {
      case 'date-desc':
        processedArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'date-asc':
        processedArticles.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'category-asc':
        processedArticles.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case 'type-asc':
        processedArticles.sort((a, b) => a.type.localeCompare(b.type));
        break;
    }
    return processedArticles;
  }, [sortOption, selectedCategory, selectedType, searchTerm]);

  return (
    <div className="bg-muted min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <AnimatedSection>
          <div className="mb-8">
            <Link href="/" passHref>
              <Button variant="outline" className="mb-6 bg-card hover:bg-card/90">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-3 space-y-8">
            <AnimatedSection delay="delay-50">
              <Card className="shadow-md bg-card">
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-primary">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {categories.map(cat => (
                      <li key={cat.name}>
                        <Button
                          variant="ghost"
                          className={`w-full justify-between hover:bg-primary/5 ${selectedCategory === cat.name ? 'bg-primary/10 text-primary font-semibold' : 'text-muted-foreground'}`}
                          onClick={() => setSelectedCategory(cat.name)}
                        >
                          <span>{cat.name}</span>
                          <Badge variant={selectedCategory === cat.name ? "default" : "secondary"} className="text-xs">{cat.count}</Badge>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay="delay-100">
              <Card className="shadow-md bg-card p-6">
                 <h3 className="font-headline text-lg text-primary mb-2">Stay Informed</h3>
                 <p className="text-sm text-muted-foreground mb-4">Get weekly market insights and property tips delivered to your inbox.</p>
                 <form className="space-y-3">
                   <div>
                     <Label htmlFor="subscribeEmailMedia" className="sr-only">Your email address</Label>
                     <Input type="email" id="subscribeEmailMedia" placeholder="Your email address" className="bg-background" />
                   </div>
                   <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/80">Subscribe</Button>
                 </form>
                 <p className="text-xs text-muted-foreground mt-3 text-center">No spam, unsubscribe anytime.</p>
              </Card>
            </AnimatedSection>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-9">
            <AnimatedSection delay="delay-150">
              <div className="mb-8">
                <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">
                  Recent Media
                </h1>
                <Card className="p-4 sm:p-6 bg-card shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-4 items-end">
                    <div className="lg:col-span-3 space-y-2">
                      <Label htmlFor="searchTermMedia" className="text-sm font-semibold text-primary flex items-center">
                          <SearchIcon className="mr-2 h-4 w-4" /> Search Content:
                      </Label>
                      <Input
                          id="searchTermMedia"
                          type="text"
                          placeholder="e.g., mortgage rates, buyer tips..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="bg-background"
                      />
                    </div>
                    <div className="lg:col-span-2 space-y-2">
                        <Label htmlFor="filterTypeMedia" className="text-sm font-semibold text-primary flex items-center">
                            <ListFilter className="mr-2 h-4 w-4" /> Filter by Type:
                        </Label>
                        <RadioGroup
                            id="filterTypeMedia"
                            value={selectedType}
                            onValueChange={(value: string) => setSelectedType(value as MediaType | 'All')}
                            className="flex flex-wrap gap-x-3 gap-y-2 pt-1"
                        >
                            {availableTypes.map((type) => (
                            <div key={type} className="flex items-center space-x-1.5">
                                <RadioGroupItem value={type} id={`filter-media-${type}`} />
                                <Label htmlFor={`filter-media-${type}`} className="font-normal text-xs sm:text-sm cursor-pointer hover:text-primary capitalize">{type}</Label>
                            </div>
                            ))}
                        </RadioGroup>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="sortOptionMedia" className="text-sm font-semibold text-primary flex items-center">
                            <ArrowDownUp className="mr-2 h-4 w-4" /> Sort by:
                        </Label>
                        <Select value={sortOption} onValueChange={(value: string) => setSortOption(value as SortOption)}>
                            <SelectTrigger id="sortOptionMedia" className="w-full bg-background">
                            <SelectValue placeholder="Select sort order" />
                            </SelectTrigger>
                            <SelectContent>
                            <SelectItem value="date-desc">Most Recent</SelectItem>
                            <SelectItem value="date-asc">Oldest First</SelectItem>
                            <SelectItem value="category-asc">Category (A-Z)</SelectItem>
                            <SelectItem value="type-asc">Type (A-Z)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                  </div>
                </Card>
              </div>

              {displayedArticles.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {displayedArticles.map((article) => {
                    const TypeIcon = mediaTypeIcons[article.type] || Newspaper;
                    return (
                      <Card key={article.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-card flex flex-col">
                        <div className="relative w-full aspect-[16/9]">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                            data-ai-hint={article.dataAiHint}
                          />
                          <Badge variant="secondary" className="absolute top-3 right-3 bg-card/80 text-foreground backdrop-blur-sm text-xs capitalize flex items-center">
                             <TypeIcon className="w-3 h-3 mr-1.5 opacity-75" />
                             {article.type}
                          </Badge>
                          <Badge variant="default" className="absolute top-3 left-3 bg-primary/80 text-primary-foreground backdrop-blur-sm text-xs capitalize">
                            {article.category}
                          </Badge>
                        </div>
                        <CardContent className="p-5 flex-grow">
                          <Link href={`/media/${article.id}`} passHref>
                            <h2 className="font-headline text-xl text-primary hover:text-accent transition-colors mb-2 cursor-pointer line-clamp-2">
                              {article.title}
                            </h2>
                          </Link>
                          <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{article.description}</p>
                          <div className="text-xs text-muted-foreground space-y-1">
                            {article.author && (
                              <div className="flex items-center">
                                <User className="w-3 h-3 mr-1.5" /> {article.author}
                              </div>
                            )}
                             <div className="flex items-center">
                               <CalendarDays className="w-3 h-3 mr-1.5" /> {new Date(article.date).toLocaleDateString()}
                             </div>
                            <div className="flex items-center space-x-3">
                              {article.readTime && (
                                <div className="flex items-center">
                                  <Clock className="w-3 h-3 mr-1.5" /> {article.readTime}
                                </div>
                              )}
                              {article.views && (
                                <div className="flex items-center">
                                  <Eye className="w-3 h-3 mr-1.5" /> {article.views}
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="p-5 pt-0">
                          <Link href={`/media/${article.id}`} passHref>
                             <Button variant="link" className="text-accent p-0 h-auto text-sm">
                              Read More <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-10 bg-card rounded-lg shadow-md">
                  <Newspaper className="mx-auto h-12 w-12 mb-4 text-primary/50" />
                  <p className="text-lg text-muted-foreground">No media items match your current filters.</p>
                  <p className="text-muted-foreground">Try adjusting your selection or search term.</p>
                </div>
              )}
            </AnimatedSection>
          </main>
        </div>
      </div>
    </div>
  );
}

