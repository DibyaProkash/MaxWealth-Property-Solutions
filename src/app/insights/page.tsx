
import Image from 'next/image';
import Link from 'next/link';
import { articlesData, type Article } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Newspaper } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import QuizSection from '@/components/sections/quiz-section'; // Added import
import AnimatedSection from '@/components/layout/animated-section'; // Added import

export default function AllInsightsPage() {
  const sortedArticles = [...articlesData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="mb-12 text-center">
        <Link href="/" passHref>
          <Button variant="outline" className="mb-6 float-left">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <div className="inline-block p-3 bg-primary/10 rounded-full mb-4 clear-both">
            <Newspaper className="h-10 w-10 text-primary" />
        </div>
        <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
          All Financial Insights & Updates
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse our collection of articles, guides, and company news on home financing.
        </p>
      </div>

      {sortedArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sortedArticles.map((article) => (
            <div key={article.id} className="h-full">
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
                    <Badge variant="secondary" className="absolute top-2 right-2 capitalize flex items-center bg-primary/80 text-primary-foreground">
                      <article.icon className="w-4 h-4 mr-1.5" />
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
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-muted-foreground">No insights available at the moment. Please check back later.</p>
        </div>
      )}

      {/* Added Quiz Section */}
      <AnimatedSection className="my-16 md:my-24" delay="delay-100">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
                Test Your Home Buying Readiness
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Answer a few questions to get an AI-powered assessment of your preparedness for homeownership.
            </p>
        </div>
        <QuizSection />
      </AnimatedSection>

    </div>
  );
}
