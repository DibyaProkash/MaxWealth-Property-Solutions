
"use client";

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, NewspaperIcon, TrendingUp, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { MediaType } from '@/lib/data/media-types'; // Import MediaType

// Define Article type for this component, matching API response
interface ArticleForSection {
  id: string;
  title: string;
  description: string;
  image: string;
  dataAiHint: string;
  type: MediaType;
  author?: string;
}

interface StoryCardProps {
  article: ArticleForSection;
  className?: string;
  large?: boolean;
}

const StoryCard: React.FC<StoryCardProps> = ({ article, className, large = false }) => {
  return (
    <Link 
      href={`/media/${article.id}`} 
      className={cn("block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative group", className)}
    >
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes={large ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
          data-ai-hint={article.dataAiHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white w-full">
          <h3 className={cn("font-headline font-semibold", large ? "text-xl md:text-2xl lg:text-3xl" : "text-lg md:text-xl")}>
            {article.title}
          </h3>
          {article.author && (
            <p className={cn("text-xs md:text-sm mt-1 opacity-80", large ? "md:text-base" : "md:text-sm")}>
              By {article.author}
            </p>
          )}
        </div>
    </Link>
  );
};


export default function ContentSection() {
  const [featuredStories, setFeaturedStories] = React.useState<ArticleForSection[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchFeaturedArticles = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/articles?limit=3'); // Assuming API can take a limit
        if (!response.ok) throw new Error('Failed to fetch articles');
        let articles: ArticleForSection[] = await response.json();
        // If API doesn't support limit, slice here.
        if (!response.url.includes('limit=3')) {
            articles = articles.slice(0, 3);
        }
        setFeaturedStories(articles);
      } catch (error) {
        console.error("Error fetching featured articles:", error);
        // Optionally set an error state to display to user
      } finally {
        setIsLoading(false);
      }
    };
    fetchFeaturedArticles();
  }, []);

  const storyTopLeft = featuredStories[0];
  const storyBottomLeft = featuredStories[1];
  const storyRightLarge = featuredStories[2];

  return (
    <section id="content" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Client Success & Media Updates</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At MaxWealth PS, we don't just talk about excellence, we achieve it. Our dedication to exceptional service and client satisfaction is reflected in their stories and our expert media content.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-10">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        ) : featuredStories.length >= 3 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            <div className="md:col-span-1 flex flex-col gap-6 md:gap-8">
              {storyTopLeft && (
                <StoryCard article={storyTopLeft} className="aspect-[4/3]" />
              )}
              
              {storyBottomLeft && (
                <StoryCard article={storyBottomLeft} className="aspect-[4/3]" />
              )}

              <Card className="bg-primary text-primary-foreground p-6 md:p-8 rounded-lg shadow-xl flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-headline text-4xl md:text-5xl font-bold mb-2">4500+</h3>
                  <p className="font-headline text-xl text-primary-foreground/80 mb-3">Success Stories</p>
                  <p className="text-sm text-primary-foreground/70 mb-6">
                    Discover real success through stories of impact and achievement from clients like you.
                  </p>
                </div>
                <Button variant="default" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-md" asChild>
                  <Link href="/media">
                     <span className="flex items-center">
                        Explore All Media <ArrowRight className="ml-2 h-4 w-4" />
                     </span>
                  </Link>
                </Button>
              </Card>
            </div>

            <div className="md:col-span-2">
              {storyRightLarge && (
                <StoryCard article={storyRightLarge} className="h-full min-h-[300px] md:min-h-full aspect-[4/3] md:aspect-auto" large />
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-10">
            <NewspaperIcon className="mx-auto h-12 w-12 mb-4 text-primary/50" />
            <p className="text-lg text-muted-foreground">More media content coming soon!</p>
            <Button size="lg" className="mt-6 shadow-md hover:shadow-lg transition-shadow bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="/media">
                  <span className="flex items-center">
                    View All Available Media <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
