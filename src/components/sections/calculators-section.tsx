
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MortgageCalculator from "@/components/calculators/mortgage-calculator";
import AffordabilityCalculator from "@/components/calculators/affordability-calculator";
import ClosingCostEstimator from "@/components/calculators/closing-cost-estimator";

import { Calculator } from "lucide-react";


export default function CalculatorsSection() {
  return (
    <section id="calculators" className="py-16 md:py-24 bg-secondary"> {/* Changed to bg-secondary for visual distinction */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <Calculator className="h-10 w-10 text-primary" />
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            Financial Calculators
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Use our simple calculators to estimate mortgage payments, home affordability, and closing costs.
          </p>
        </div>

        <div className="mb-16">
          <Tabs defaultValue="mortgage" className="w-full max-w-2xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-1 sm:grid-cols-3 h-auto sm:h-10 w-full">
                <TabsTrigger value="mortgage" className="py-2 sm:py-0">Mortgage Payment</TabsTrigger>
                <TabsTrigger value="affordability" className="py-2 sm:py-0">Affordability</TabsTrigger>
                <TabsTrigger value="closing" className="py-2 sm:py-0">Closing Costs</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="mortgage">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <CardHeader><CardTitle className="font-headline text-xl text-primary text-center">Mortgage Payment Calculator</CardTitle></CardHeader>
                <CardContent><MortgageCalculator /></CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="affordability">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <CardHeader><CardTitle className="font-headline text-xl text-primary text-center">Home Affordability Calculator</CardTitle></CardHeader>
                <CardContent><AffordabilityCalculator /></CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="closing">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <CardHeader><CardTitle className="font-headline text-xl text-primary text-center">Closing Cost Estimator</CardTitle></CardHeader>
                <CardContent><ClosingCostEstimator /></CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <p className="text-center text-muted-foreground">
          For AI-powered tools, including document analysis and personalized financial planning, please visit our <Link href="/resources/ai-tools" className="text-accent hover:underline">AI Tools page</Link>.
        </p>
      </div>
    </section>
  );
}
