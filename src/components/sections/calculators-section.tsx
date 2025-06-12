
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MortgageCalculator from "@/components/calculators/mortgage-calculator";
import AffordabilityCalculator from "@/components/calculators/affordability-calculator";
import ClosingCostEstimator from "@/components/calculators/closing-cost-estimator";
import { Calculator, FileText, BrainCircuit, TrendingUp, Lightbulb } from "lucide-react";

export default function CalculatorsSection() {
  return (
    <section id="calculators" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <Lightbulb className="h-10 w-10 text-primary" />
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            Financial Tools & AI Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Empower your financial decisions with our suite of calculators and explore upcoming AI-powered tools designed to guide your home buying journey.
          </p>
        </div>

        <div className="space-y-16">
          {/* Calculators Section */}
          <div className="w-full">
            <Tabs defaultValue="mortgage" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-1 sm:grid-cols-3 h-auto sm:h-10 w-full max-w-lg">
                  <TabsTrigger value="mortgage" className="py-2 sm:py-0">Mortgage Payment</TabsTrigger>
                  <TabsTrigger value="affordability" className="py-2 sm:py-0">Affordability</TabsTrigger>
                  <TabsTrigger value="closing" className="py-2 sm:py-0">Closing Costs</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="mortgage">
                <Card className="shadow-lg max-w-2xl mx-auto">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary text-center">Mortgage Payment Calculator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <MortgageCalculator />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="affordability">
                <Card className="shadow-lg max-w-2xl mx-auto">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary text-center">Home Affordability Calculator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AffordabilityCalculator />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="closing">
                <Card className="shadow-lg max-w-2xl mx-auto">
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

          {/* AI Tools Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              Explore Our AI-Powered Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-lg flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                  <div className="p-2 bg-primary/10 rounded-md">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-lg text-primary">AI Document Analyzer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 flex-grow">
                  <CardDescription>
                    Securely upload a redacted loan estimate or other financial document to get an AI-powered summary and clear explanation of key terms.
                  </CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button variant="outline" disabled className="w-full">Learn More (Coming Soon)</Button>
                </div>
              </Card>

              <Card className="shadow-lg flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                  <div className="p-2 bg-primary/10 rounded-md">
                   <BrainCircuit className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-lg text-primary">Personalized Financial Plan AI</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 flex-grow">
                  <CardDescription>
                    Answer a series of targeted questions and receive an AI-generated basic financial plan, along with actionable next steps tailored to your homeownership goals.
                  </CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button variant="outline" disabled className="w-full">Try Now (Coming Soon)</Button>
                </div>
              </Card>

              <Card className="shadow-lg flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                   <div className="p-2 bg-primary/10 rounded-md">
                      <TrendingUp className="h-6 w-6 text-primary" />
                   </div>
                  <CardTitle className="font-headline text-lg text-primary">AI Market Trend Summarizer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 flex-grow">
                  <CardDescription>
                    Stay informed with AI-powered summaries of current local real estate market trends, helping you make timely and strategic decisions.
                  </CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                 <Button variant="outline" disabled className="w-full">View Trends (Coming Soon)</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
