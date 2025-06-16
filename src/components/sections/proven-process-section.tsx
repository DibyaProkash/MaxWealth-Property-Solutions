
"use client";

import { provenProcessStepsData, type ProcessStepItem } from '@/lib/data';
import { Workflow } from 'lucide-react'; // Or any other relevant icon

export default function ProvenProcessSection() {
  if (!provenProcessStepsData || provenProcessStepsData.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <Workflow className="h-10 w-10 text-primary" />
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-3">
            Our Proven 5-Step Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A streamlined approach that takes you from initial consultation to keys in hand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 text-center">
          {provenProcessStepsData.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mb-5 shadow-md">
                {step.stepNumber}
              </div>
              <h3 className="font-headline text-lg font-semibold text-primary mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
