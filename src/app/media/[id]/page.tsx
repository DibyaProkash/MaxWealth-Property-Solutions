
import { articlesData, type Article, mediaTypeIcons } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, UserCircle, Tag, MessageSquare, Clock, Eye, Type } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/layout/footer';

interface MediaPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    id: article.id,
  }));
}

export default function MediaPage({ params }: MediaPageProps) {
  const article = articlesData.find((a) => a.id === params.id);

  if (!article) {
    notFound();
  }

  const contentToDisplay = article.fullContent || article.description;
  const MediaTypeIcon = mediaTypeIcons[article.type] || Type;


  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
          <div className="mb-8">
            <Link href="/media" passHref>
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Media
              </Button>
            </Link>
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
