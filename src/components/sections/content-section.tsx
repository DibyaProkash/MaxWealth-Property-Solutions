
"use client";

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Newspaper, Video } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const articles = [
  {
    title: 'Understanding Mortgage Rates in 2024',
    description: 'A deep dive into current mortgage trends and how they affect your buying power.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'finance graph',
    type: 'Blog',
    icon: Newspaper,
    link: '#',
  },
  {
    title: 'First-Time Home Buyer? Watch This First!',
    description: 'Our latest vlog covers essential tips for navigating your first home purchase.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'home keys',
    type: 'Vlog',
    icon: Video,
    link: '#',
  },
  {
    title: 'Saving Strategies for Your Down Payment',
    description: 'Practical advice on building your down payment fund effectively.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'savings money',
    type: 'Blog',
    icon: Newspaper,
    link: '#',
  },
  {
    title: 'The Future of Real Estate Technology',
    description: 'Exploring how tech is shaping the home buying and selling process.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'technology real estate',
    type: 'Blog',
    icon: Newspaper,
    link: '#',
  },
  {
    title: 'Navigating Closing Costs: A Complete Guide',
    description: 'Understand all the fees involved when you close on your new home.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'documents signature',
    type: 'Vlog',
    icon: Video,
    link: '#',
  },
];

export default function ContentSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 4500, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section id="content" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Financial Insights & Updates</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our latest articles, guides, and company news on home financing.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {articles.map((article, index) => (
              <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
        
        <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="shadow-md hover:shadow-lg transition-shadow">
                View All Insights
            </Button>
        </div>
      </div>
    </section>
  );
}

