
"use client"; // Required for useEffect and useState

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation'; // useParams for client component
import { Badge } from '@/components/ui/badge';
import { CalendarDays, UserCircle, Tag, MessageSquare, Clock, Eye, Type, Loader2, AlertTriangle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/layout/footer';
import { mediaTypeIcons, type MediaType } from '@/lib/data/media-types'; // Import from new location
import BackButton from '@/components/layout/back-button';

// Define Article type for this page, matching API response
interface ArticleForPage {
  id: string;
  title: string;
  description: string;
  fullContent?: string;
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

// generateStaticParams removed as this is a client component

export default function MediaPage() {
  const params = useParams();
  const articleId = typeof params.id === 'string' ? params.id : undefined;

  const [article, setArticle] = useState<ArticleForPage | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!articleId) {
      setError("Article ID is missing.");
      setIsLoading(false);
      return;
    }

    const fetchArticle = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/articles/${articleId}`);
        if (!res.ok) {
          if (res.status === 404) {
            notFound(); // Trigger Next.js notFound behavior
            return;
          }
          throw new Error(`Failed to fetch article: ${res.statusText}`);
        }
        const data: ArticleForPage = await res.json();
        setArticle(data);
      } catch (err: any) {
        console.error("Error fetching article:", err);
        setError(err.message || "Could not load the article.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow bg-background flex items-center justify-center">
          <Loader2 className="h-16 w-16 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow bg-background flex flex-col items-center justify-center text-center p-4">
          <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
          <h1 className="text-2xl font-bold text-destructive mb-2">Error Loading Article</h1>
          <p className="text-muted-foreground mb-4">{error}</p>
          <BackButton />
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!article) {
    // This case should ideally be handled by notFound() triggered in useEffect
    // or if generateStaticParams returns an empty array for this ID.
    // But as a fallback:
    notFound();
    return null; 
  }


  const contentToDisplay = article.fullContent || article.description;
  const MediaTypeIcon = mediaTypeIcons[article.type] || Type;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-6 py-8 md:py-16 max-w-4xl">
          <div className="mb-8">
            <div className="mb-6">
              <BackButton />
            </div>
            <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <CalendarDays className="mr-1.5 h-4 w-4" />
                <span>Published: {new Date(article.date).toLocaleDateString()}</span>
              </div>
              <Badge variant="secondary" className="capitalize flex items-center">
                <MediaTypeIcon className="mr-1.5 h-3.5 w-3.5" /> {article.type}
              </Badge>
              <Badge variant="outline" className="capitalize">{article.category}</Badge>
              {article.author && (
                <div className="flex items-center">
                  <UserCircle className="mr-1.5 h-4 w-4" />
                  <span>By: {article.author}</span>
                </div>
              )}
              {article.readTime && (
                <div className="flex items-center">
                  <Clock className="mr-1.5 h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
              )}
              {article.views && (
                <div className="flex items-center">
                  <Eye className="mr-1.5 h-4 w-4" />
                  <span>{article.views} views</span>
                </div>
              )}
            </div>
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {article.image && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 896px"
                style={{ objectFit: 'cover' }}
                priority
                data-ai-hint={article.dataAiHint}
              />
            </div>
          )}

          <article className="prose dark:prose-invert prose-lg max-w-none font-body text-foreground leading-relaxed">
            {contentToDisplay.split('\\n').map((paragraph, index) => (
              paragraph.trim() !== '' && <p key={index}>{paragraph}</p>
            ))}
          </article>

          <Separator className="my-12" />

          <Card className="mt-12 shadow-lg bg-card">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary flex items-center">
                <MessageSquare className="mr-3 h-6 w-6" />
                Leave a Comment
              </CardTitle>
              <CardDescription>
                Share your thoughts or ask questions about this {article.type.toLowerCase()}.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-muted/30 rounded-lg border border-dashed border-border text-center">
                <p className="text-muted-foreground mb-2">
                  Comment system integration (e.g., Disqus, custom solution) coming soon!
                </p>
                <p className="text-xs text-muted-foreground">
                  We value your feedback and look forward to enabling discussions here.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
