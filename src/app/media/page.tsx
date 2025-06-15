
"use client";

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { articlesData, type Article } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, NewspaperIcon as PageIcon, ListFilter, ArrowDownUp, Mail, Eye, CalendarDays, User } from 'lucide-react'; // Changed Newspaper to PageIcon
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/layout/animated-section';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

type SortOption = 'date-desc' | 'date-asc' | 'category-asc';

export default function AllMediaPage() {
  const [sortOption, setSortOption] = React.useState<SortOption>('date-desc');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');

  const categories = React.useMemo(() => {
    const counts: { [key: string]: number } = { 'All': articlesData.length };
    articlesData.forEach(article => {
      counts[article.category] = (counts[article.category] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name === 'All' ? -1 : b.name === 'All' ? 1 : a.name.localeCompare(b.name));
  }, []);

  const displayedArticles = React.useMemo(() => {
    let processedArticles = [...articlesData];

    if (selectedCategory !== 'All') {
      processedArticles = processedArticles.filter(article => article.category === selectedCategory);
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
    }
    return processedArticles;
  }, [sortOption, selectedCategory]);

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
              <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-0">
                  Recent Media
                </h1>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="sortOptionMedia" className="text-sm text-muted-foreground">Sort by:</Label>
                  <Select value={sortOption} onValueChange={(value: string) => setSortOption(value as SortOption)}>
                    <SelectTrigger id="sortOptionMedia" className="w-[180px] bg-card">
                      <SelectValue placeholder="Select sort order" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date-desc">Most Recent</SelectItem>
                      <SelectItem value="date-asc">Oldest First</SelectItem>
                      <SelectItem value="category-asc">Category (A-Z)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {displayedArticles.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {displayedArticles.map((article) => (
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
                        <Badge variant="secondary" className="absolute top-3 left-3 bg-card/80 text-foreground backdrop-blur-sm text-xs">
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
                                <ClockIcon className="w-3 h-3 mr-1.5" /> {article.readTime}
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
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-card rounded-lg shadow-md">
                  <PageIcon className="mx-auto h-12 w-12 mb-4 text-primary/50" />
                  <p className="text-lg text-muted-foreground">No media items match your current filter.</p>
                  <p className="text-muted-foreground">Try selecting a different category.</p>
                </div>
              )}
            </AnimatedSection>
          </main>
        </div>
      </div>
    </div>
  );
}

// Helper icon for read time (if not available in lucide-react directly in older versions)
function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
