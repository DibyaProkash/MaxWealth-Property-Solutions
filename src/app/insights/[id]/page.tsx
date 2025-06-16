
"use client"; // Required for useEffect and useState

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, UserCircle, Tag, MessageSquare, Type, Loader2, AlertTriangle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { mediaTypeIcons, type MediaType } from '@/lib/data/media-types'; // Import from new location
import Footer from '@/components/layout/footer'; // Assuming Footer is needed

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

// This function is for static generation, if you still want to use it.
// It needs to fetch from the API.
export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/articles`);
    if (!res.ok) {
      console.error("Failed to fetch articles for static params (insights):", res.status, await res.text());
      return [];
    }
    const articles: ArticleForPage[] = await res.json();
    return articles.map((article) => ({
      id: article.id,
    }));
  } catch (error) {
    console.error("Error in generateStaticParams for insights/[id]:", error);
    return [];
  }
}

export default function InsightPage() {
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
            notFound();
            return;
          }
          throw new Error(`Failed to fetch insight: ${res.statusText}`);
        }
        const data: ArticleForPage = await res.json();
        setArticle(data);
      } catch (err: any) {
        console.error("Error fetching insight:", err);
        setError(err.message || "Could not load the insight.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);


  if (isLoading) {
    return (
      <div className="container mx-auto px-6 py-8 md:py-16 max-w-4xl bg-background flex items-center justify-center" style={{minHeight: 'calc(100vh - 200px)'}}>
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
     return (
      <div className="container mx-auto px-6 py-8 md:py-16 max-w-4xl bg-background flex flex-col items-center justify-center text-center" style={{minHeight: 'calc(100vh - 200px)'}}>
        <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
        <h1 className="text-2xl font-bold text-destructive mb-2">Error Loading Insight</h1>
        <p className="text-muted-foreground mb-4">{error}</p>
        <Button asChild variant="outline">
          <Link href="/insights">Back to All Insights</Link>
        </Button>
      </div>
    );
  }

  if (!article) {
    notFound();
    return null;
  }

  const contentToDisplay = article.fullContent || article.description;
  const ArticleTypeIcon = mediaTypeIcons[article.type] || Type;


  return (
    <div className="container mx-auto px-6 py-8 md:py-16 max-w-4xl bg-background">
      <div className="mb-8">
        <Link href="/insights" passHref>
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Insights
          </Button>
        </Link>
        <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
          {article.title}
        </h1>
        <div className="flex flex-wrap items-center space-x-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <CalendarDays className="mr-1.5 h-4 w-4" />
            <span>Published: {new Date(article.date).toLocaleDateString()}</span>
          </div>
          <Badge variant="secondary" className="capitalize flex items-center">
            <ArticleTypeIcon className="mr-1.5 h-3.5 w-3.5" /> {article.type}
          </Badge>
          {article.author && (
            <div className="flex items-center">
              <UserCircle className="mr-1.5 h-4 w-4" />
              <span>By: {article.author}</span>
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
  );
}
