
"use client";

import { useState, useMemo, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import Link from 'next/link';
import {
  Wallet,
  FileText,
  Users,
  Search,
  Edit3,
  CheckSquare,
  ShieldCheck,
  KeyRound,
  ListChecks,
  Lightbulb,
  Save,
  ArrowLeft,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import AnimatedSection from '@/components/layout/animated-section';
import Footer from '@/components/layout/footer';

interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  aiTip: string; 
  icon: LucideIcon;
  completed: boolean;
}

const initialRoadmapStepsData: RoadmapStep[] = [
  { 
    id: '1', 
    title: 'Assess Your Finances', 
    description: 'Understand your budget, credit, and savings.',
    longDescription: 'Thoroughly review your income, expenses, debts, and credit report. Calculate your debt-to-income ratio (DTI) and identify areas for savings. A clear financial picture is the foundation of your home buying journey.',
    aiTip: "AI Tip: Use a budgeting app to track spending for a month. Aim for a credit score above 620 (higher is better!). Lenders prefer a Debt-to-Income (DTI) ratio below 43%. We can help analyze your credit report.",
    icon: Wallet, 
    completed: false 
  },
  { 
    id: '2', 
    title: 'Get Pre-Approved for a Mortgage', 
    description: 'Know how much you can borrow.',
    longDescription: 'Submit financial documents to a lender for a preliminary assessment of how much they might lend you. A pre-approval letter strengthens your position when making offers.',
    aiTip: "AI Tip: Gather recent pay stubs, W-2s/tax returns (last 2 years), and bank statements to speed up pre-approval. Avoid applying for new credit during this stage, as it can impact your score.",
    icon: FileText, 
    completed: false 
  },
  { 
    id: '3', 
    title: 'Find a Real Estate Agent', 
    description: 'Partner with an expert guide.',
    longDescription: 'A good agent provides local market expertise, negotiates on your behalf, and helps navigate paperwork. Interview a few agents to find a good fit.',
    aiTip: "AI Tip: Seek agents specializing in your target neighborhood and property type. Check references and online reviews. Ensure they're good communicators and discuss commission upfront.",
    icon: Users, 
    completed: false 
  },
  { 
    id: '4', 
    title: 'Search for Homes', 
    description: 'Explore listings and attend viewings.',
    longDescription: 'Define your needs and wants in a home. Use online portals, work with your agent, and visit properties. Consider location, size, condition, and resale potential.',
    aiTip: "AI Tip: Create 'must-have' vs. 'nice-to-have' lists. Attend open houses and schedule private viewings for serious contenders. Take photos/notes for comparison. Think long-term suitability.",
    icon: Search, 
    completed: false 
  },
  { 
    id: '5', 
    title: 'Make an Offer', 
    description: 'Submit a competitive offer.',
    longDescription: 'Based on market analysis and the home\'s condition, work with your agent to craft an offer. This includes price, contingencies (like inspection and financing), and proposed closing date.',
    aiTip: "AI Tip: Your offer includes price and contingencies (financing, inspection). A personal letter to the seller can sometimes help in competitive markets. Your agent will guide you on local customs.",
    icon: Edit3, 
    completed: false 
  },
  { 
    id: '6', 
    title: 'Home Inspection & Appraisal', 
    description: 'Ensure home value and condition.',
    longDescription: 'An inspection reveals potential issues with the property. An appraisal, required by the lender, confirms the home\'s market value. These are crucial protection steps.',
    aiTip: "AI Tip: Attend the end of the inspection to ask questions. Focus on major structural, safety, or costly repair items in the report. The appraisal protects you from overpaying; if it's low, renegotiate or cover the difference.",
    icon: CheckSquare, 
    completed: false 
  },
  { 
    id: '7', 
    title: 'Secure Your Loan & Insurance', 
    description: 'Finalize mortgage and homeowners insurance.',
    longDescription: 'Complete the formal mortgage application, providing all necessary documentation. Simultaneously, shop for and secure a homeowners insurance policy, which is required before closing.',
    aiTip: "AI Tip: Respond promptly to lender requests during underwriting to avoid delays. Get multiple quotes for homeowners insurance and ensure it meets lender requirements before closing.",
    icon: ShieldCheck, 
    completed: false 
  },
  { 
    id: '8', 
    title: 'Closing Day', 
    description: 'Sign papers and get your keys!',
    longDescription: 'Review and sign all legal documents. Pay closing costs and your down payment. Once everything is finalized, you\'ll receive the keys to your new home!',
    aiTip: "AI Tip: Review your Closing Disclosure (CD) at least 3 days before closing; compare it to your Loan Estimate. Arrange funds (certified check/wire) for closing costs. Do a final walk-through before signing.",
    icon: KeyRound, 
    completed: false 
  },
];

const LOCAL_STORAGE_KEY = 'roadmapProgress_local';

export default function RoadmapPage() {
  const { toast } = useToast();
  
  const [steps, setSteps] = useState<RoadmapStep[]>(() => 
    initialRoadmapStepsData.map(step => ({ ...step })) 
  );

  useEffect(() => {
    const storedProgressJson = localStorage.getItem(LOCAL_STORAGE_KEY);
    
    let currentSteps = initialRoadmapStepsData.map(s => ({ ...s, completed: s.completed }));

    if (storedProgressJson) {
      try {
        const storedProgress: Array<{ id: string, completed: boolean }> = JSON.parse(storedProgressJson);
        
        currentSteps = currentSteps.map(initialStep => {
          const progressForThisStep = storedProgress.find(p => p.id === initialStep.id);
          return {
            ...initialStep,
            completed: progressForThisStep ? progressForThisStep.completed : initialStep.completed,
          };
        });
        toast({ title: "Roadmap Loaded", description: "Your previous progress has been loaded locally.", variant: "default" });
      } catch (error) {
        console.error("Failed to parse roadmap progress from localStorage:", error);
        toast({ title: "Error Loading Progress", description: "Could not load saved roadmap progress.", variant: "destructive" });
      }
    }
    setSteps(currentSteps);
  }, [toast]);


  const completedStepsCount = useMemo(() => steps.filter(step => step.completed).length, [steps]);
  const totalSteps = steps.length;
  const progressPercentage = totalSteps > 0 ? (completedStepsCount / totalSteps) * 100 : 0;

  const handleStepToggle = (stepId: string) => {
    const newSteps = steps.map(step =>
      step.id === stepId ? { ...step, completed: !step.completed } : step
    );
    setSteps(newSteps);

    const progressToStore = newSteps.map(s => ({ id: s.id, completed: s.completed }));
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progressToStore));
       toast({
        title: "Progress Saved",
        description: `Step "${newSteps.find(s => s.id === stepId)?.title}" status updated locally.`,
        variant: "default",
        duration: 2000,
      });
    } catch (error) {
      console.error("Failed to save roadmap progress to localStorage:", error);
      toast({ title: "Save Error", description: "Could not save progress to local storage. Your browser might be full or in private mode.", variant: "destructive" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-8 md:py-16 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection>
              <div className="mb-12">
                  <Button variant="outline" className="mb-6" asChild>
                    <Link href="/resources">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Resources
                    </Link>
                  </Button>
                  <div className="text-center">
                      <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                          <ListChecks className="h-10 w-10 text-primary" />
                      </div>
                      <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Your Home Buying Roadmap</h1>
                      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                          Navigate the path to homeownership with our interactive step-by-step guide. Track your progress and get insights for each milestone.
                      </p>
                      <div className="mt-4 p-3 bg-accent/10 border border-accent/30 rounded-md text-sm text-accent flex items-center justify-center max-w-md mx-auto">
                          <Save className="h-5 w-5 mr-2" />
                          Your progress is saved locally in this browser.
                      </div>
                  </div>
              </div>
          </AnimatedSection>

          <AnimatedSection delay="delay-100">
              <div className="max-w-3xl mx-auto space-y-4 mb-8">
              <Label className="text-sm text-muted-foreground">Overall Progress: {completedStepsCount} of {totalSteps} steps completed</Label>
              <Progress value={progressPercentage} aria-label={`${progressPercentage.toFixed(0)}% complete`} className="w-full h-3" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {steps.map((step, index) => {
                  const IconComponent = step.icon; 
                  return (
                  <Card 
                  key={step.id} 
                  className={cn(
                      "shadow-lg transition-all duration-300 flex flex-col group hover:shadow-xl",
                      step.completed ? "bg-card/70 border-primary/40 opacity-75" : "bg-card" 
                  )}
                  >
                  <CardHeader className="flex flex-row items-start space-x-4 pb-3">
                      <div className={cn(
                          "p-2.5 rounded-lg flex items-center justify-center transition-colors", 
                          step.completed ? "bg-primary/70 text-primary-foreground/90" : "bg-primary/10 text-primary group-hover:bg-primary/20"
                      )}>
                      {IconComponent ? <IconComponent className="h-7 w-7" /> : <ListChecks className="h-7 w-7" /> }
                      </div>
                      <div className="flex-1">
                      <CardTitle className={cn(
                          "font-headline text-xl transition-colors", 
                          step.completed ? "text-primary/70 line-through" : "text-primary group-hover:text-primary/90"
                      )}>
                          {index + 1}. {step.title}
                      </CardTitle>
                      </div>
                      <Checkbox
                      id={`step-${step.id}`}
                      checked={step.completed}
                      onCheckedChange={() => handleStepToggle(step.id)}
                      aria-label={`Mark step ${step.title} as ${step.completed ? 'incomplete' : 'complete'}`}
                      className="mt-1 h-5 w-5 rounded border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus:ring-primary/50"
                      />
                  </CardHeader>
                  <CardContent className="flex-grow pb-4">
                      <CardDescription className={cn(
                          "text-sm transition-opacity", 
                          step.completed ? "text-muted-foreground/70" : "text-muted-foreground"
                      )}>
                      {step.longDescription}
                      </CardDescription>
                  </CardContent>
                  <div className="px-6 pb-5 pt-0 mt-auto">
                      <Dialog>
                          <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="w-full text-xs hover:bg-accent/5 hover:border-accent/30 transition-colors text-accent">
                              <Lightbulb className="mr-2 h-4 w-4 text-accent/70" /> Get AI Tip (Concept)
                          </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md bg-card">
                          <DialogHeader>
                              <DialogTitle className="flex items-center text-primary font-headline">
                              <Lightbulb className="mr-2 h-5 w-5 text-primary" />
                              AI Tip for: {step.title}
                              </DialogTitle>
                          </DialogHeader>
                          <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground py-2 space-y-2">
                              <p>{step.aiTip}</p>
                              <p className="text-xs italic mt-4">
                              This is a conceptual demonstration. Full AI personalization would require connecting to our Genkit services.
                              </p>
                          </div>
                          <div className="flex justify-end pt-2">
                              <DialogClose asChild>
                                  <Button type="button" variant="secondary">Close</Button>
                              </DialogClose>
                          </div>
                          </DialogContent>
                      </Dialog>
                      </div>
                  </Card>
              )})}
              </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
