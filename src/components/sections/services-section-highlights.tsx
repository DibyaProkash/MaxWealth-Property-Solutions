
"use client";

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Briefcase, SearchCheck, TrendingUp } from 'lucide-react';
import { servicesData, type ServiceOffering } from '@/lib/data';

export default function ServicesSectionHighlights() {
  return (
    <section className="py-12 md:py-16"> {/* Added padding for standalone use */}
        <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
            Our Comprehensive Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service) => {
            const Icon = service.icon;
            return (
                <Card key={service.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card flex flex-col">
                <CardHeader className="items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-3">
                    <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-4 text-center font-body">{service.intro.replace('MaxWealth PS', 'MaxWealth Property Services')}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                    <Button variant="outline" className="w-full mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                    <Link href="/fees-explained#feesContactFormContainer">Book Free Strategy Call</Link>
                    </Button>
                </div>
                </Card>
            );
            })}
        </div>
    </section>
  );
}
