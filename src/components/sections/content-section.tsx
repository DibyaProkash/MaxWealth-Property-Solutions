import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Newspaper, Video } from 'lucide-react';

const articles = [
  {
    title: 'Understanding Mortgage Rates in 2024',
    description: 'A deep dive into current mortgage trends and how they affect your buying power.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'interest rates graph',
    type: 'Blog',
    icon: Newspaper,
    link: '#',
  },
  {
    title: 'First-Time Home Buyer? Watch This First!',
    description: 'Our latest vlog covers essential tips for navigating your first home purchase.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'happy couple new home',
    type: 'Vlog',
    icon: Video,
    link: '#',
  },
  {
    title: 'Saving Strategies for Your Down Payment',
    description: 'Practical advice on building your down payment fund effectively.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'piggy bank coins',
    type: 'Blog',
    icon: Newspaper,
    link: '#',
  },
];

export default function ContentSection() {
  return (
    <section id="content" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Financial Insights & Updates</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our latest articles, guides, and company news on home financing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative h-52 w-full">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    layout="fill" 
                    objectFit="cover" 
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
          ))}
        </div>
        <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="shadow-md hover:shadow-lg transition-shadow">
                View All Insights
            </Button>
        </div>
      </div>
    </section>
  );
}
