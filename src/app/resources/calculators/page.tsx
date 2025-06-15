
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MortgageCalculator from "@/components/calculators/mortgage-calculator";
import AffordabilityCalculator from "@/components/calculators/affordability-calculator";
import ClosingCostEstimator from "@/components/calculators/closing-cost-estimator";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calculator } from "lucide-react";
import AnimatedSection from "@/components/layout/animated-section";

export default function CalculatorsPage() {
  return (
    <div className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="mb-12">
            <Link href="/resources" passHref>
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resources
              </Button>
            </Link>
            <div className="text-center">
                <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                <Calculator className="h-10 w-10 text-primary" />
                </div>
                <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Financial Calculators
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Use our simple calculators to estimate mortgage payments, home affordability, and closing costs. These tools provide quick insights to help you plan your finances for buying a home.
                </p>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay="delay-100">
            <div className="mb-10"> {/* Adjusted margin bottom from mb-16 */}
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
            
            <p className="text-center text-muted-foreground text-sm mt-8">
            Note: These calculators provide estimates for informational purposes only. Consult with a MaxWealth PS financial advisor for personalized advice.
            </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
