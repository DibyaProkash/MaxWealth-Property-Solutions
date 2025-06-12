
import { articlesData, type Article } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, UserCircle, Tag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface InsightPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    id: article.id,
  }));
}

export default function InsightPage({ params }: InsightPageProps) {
  const article = articlesData.find((a) => a.id === params.id);

  if (!article) {
    notFound();
  }

  const contentToDisplay = article.fullContent || article.description;

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
      <div className="mb-8">
        <Link href="/#content" passHref>
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
          <Badge variant="secondary" className="capitalize">{article.type}</Badge>
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
        {/* Render paragraphs from fullContent if available, otherwise description */}
        {contentToDisplay.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>

      <Separator className="my-12" />

      <div className="mt-12 p-6 bg-secondary/50 rounded-lg">
        <h3 className="font-headline text-2xl font-semibold text-primary mb-4">Comments</h3>
        <p className="text-muted-foreground">
          Comments section coming soon! We'd love to hear your thoughts.
        </p>
        {/* Placeholder for future comment form and display */}
      </div>
    </div>
  );
}
