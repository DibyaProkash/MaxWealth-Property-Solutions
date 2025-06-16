
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/layout/animated-section";

const NumberedListItem = ({
  number,
  title,
  description,
  isCheckmark = false,
}: {
  number: string | number;
  title: string;
  description: string;
  isCheckmark?: boolean;
}) => (
  <div className="flex items-start space-x-3">
    <div
      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md
        ${isCheckmark ? "bg-green-500" : "bg-accent"}`}
    >
      {isCheckmark ? <CheckCircle className="w-5 h-5" /> : number}
    </div>
    <div>
      <h4 className="font-headline text-md font-semibold text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const IncludedListItem = ({ text }: { text: string }) => (
  <li className="flex items-center space-x-2">
    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
    <span className="text-muted-foreground text-sm">{text}</span>
  </li>
);

export default function FeeStructureSection() {
  return (
    <AnimatedSection delay="delay-200">
      <section className="py-16 md:py-24 bg-secondary rounded-lg mt-12 md:mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Understanding Our Fee Structure
            </h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-xl mx-auto">
              Complete transparency on what you pay and when
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="shadow-lg bg-card h-full">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">When Do You Pay?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <NumberedListItem
                  number={1}
                  title="Initial Retainer"
                  description="$2,000 to commence property search (Full Service only)"
                />
                <NumberedListItem
                  number={2}
                  title="Success Fee"
                  description="Remaining balance due when contract becomes unconditional"
                />
                <NumberedListItem
                  number={3} // Visually represented by checkmark in image, but kept as 3 for consistency if needed, styling can override
                  isCheckmark={true}
                  title="No Success, No Fee"
                  description="If we don't secure a property, you only pay the initial retainer"
                />
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-card h-full">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">What's Included?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <IncludedListItem text="Unlimited property searches" />
                  <IncludedListItem text="Professional inspections" />
                  <IncludedListItem text="Market analysis reports" />
                  <IncludedListItem text="Negotiation & bidding" />
                  <IncludedListItem text="Settlement support" />
                  <IncludedListItem text="Ongoing consultation" />
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
