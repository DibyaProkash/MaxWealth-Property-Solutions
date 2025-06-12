
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MortgageCalculator from "@/components/calculators/mortgage-calculator";
import AffordabilityCalculator from "@/components/calculators/affordability-calculator";
import ClosingCostEstimator from "@/components/calculators/closing-cost-estimator";
import { Calculator } from "lucide-react";

export default function CalculatorsSection() {
  return (
    <section id="calculators" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <Calculator className="h-10 w-10 text-primary" />
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            Financial Calculators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empower your financial decisions with our easy-to-use calculators.
            Estimate payments, understand affordability, and plan for closing costs.
          </p>
        </div>

        <Tabs defaultValue="mortgage" className="w-full max-w-2xl mx-auto">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8 h-auto sm:h-10">
            <TabsTrigger value="mortgage" className="py-2 sm:py-0">Mortgage Payment</TabsTrigger>
            <TabsTrigger value="affordability" className="py-2 sm:py-0">Affordability</TabsTrigger>
            <TabsTrigger value="closing" className="py-2 sm:py-0">Closing Costs</TabsTrigger>
          </TabsList>

          <TabsContent value="mortgage">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary text-center">Mortgage Payment Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <MortgageCalculator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="affordability">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary text-center">Home Affordability Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <AffordabilityCalculator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="closing">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary text-center">Closing Cost Estimator</CardTitle>
              </CardHeader>
              <CardContent>
                <ClosingCostEstimator />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
