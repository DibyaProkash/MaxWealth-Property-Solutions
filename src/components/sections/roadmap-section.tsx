
"use client";

import { useState, useMemo, type FC } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // For more extensive content
  aiTip?: string; // For personalized guidance concept
  icon: LucideIcon;
  completed: boolean;
}

const initialRoadmapSteps: RoadmapStep[] = [
  { 
    id: '1', 
    title: 'Assess Your Finances', 
    description: 'Understand your budget, credit, and savings.',
    longDescription: 'Thoroughly review your income, expenses, debts, and credit report. Calculate your debt-to-income ratio (DTI) and identify areas for savings. A clear financial picture is the foundation of your home buying journey.',
    aiTip: "Consider using a budgeting app to track your spending for a month. For credit, aim for a score above 620 for conventional loans, but higher is better. Lenders typically like to see a DTI below 43%. We can help you analyze your credit report for free!",
    icon: Wallet, 
    completed: false 
  },
  { 
    id: '2', 
    title: 'Get Pre-Approved for a Mortgage', 
    description: 'Know how much you can borrow.',
    longDescription: 'Submit financial documents to a lender for a preliminary assessment of how much they might lend you. A pre-approval letter strengthens your position when making offers.',
    icon: FileText, 
    completed: false 
  },
  { 
    id: '3', 
    title: 'Find a Real Estate Agent', 
    description: 'Partner with an expert guide.',
    longDescription: 'A good agent provides local market expertise, negotiates on your behalf, and helps navigate paperwork. Interview a few agents to find a good fit.',
    icon: Users, 
    completed: false 
  },
  { 
    id: '4', 
    title: 'Search for Homes', 
    description: 'Explore listings and attend viewings.',
    longDescription: 'Define your needs and wants in a home. Use online portals, work with your agent, and visit properties. Consider location, size, condition, and resale potential.',
    icon: Search, 
    completed: false 
  },
  { 
    id: '5', 
    title: 'Make an Offer', 
    description: 'Submit a competitive offer.',
    longDescription: 'Based on market analysis and the home\'s condition, work with your agent to craft an offer. This includes price, contingencies (like inspection and financing), and proposed closing date.',
    icon: Edit3, 
    completed: false 
  },
  { 
    id: '6', 
    title: 'Home Inspection & Appraisal', 
    description: 'Ensure home value and condition.',
    longDescription: 'An inspection reveals potential issues with the property. An appraisal, required by the lender, confirms the home\'s market value. These are crucial protection steps.',
    icon: CheckSquare, 
    completed: false 
  },
  { 
    id: '7', 
    title: 'Secure Your Loan & Insurance', 
    description: 'Finalize mortgage and homeowners insurance.',
    longDescription: 'Complete the formal mortgage application, providing all necessary documentation. Simultaneously, shop for and secure a homeowners insurance policy, which is required before closing.',
    icon: ShieldCheck, 
    completed: false 
  },
  { 
    id: '8', 
    title: 'Closing Day', 
    description: 'Sign papers and get your keys!',
    longDescription: 'Review and sign all legal documents. Pay closing costs and your down payment. Once everything is finalized, you\'ll receive the keys to your new home!',
    icon: KeyRound, 
    completed: false 
  },
];

export default function RoadmapSection() {
  const [steps, setSteps] = useState<RoadmapStep[]>(initialRoadmapSteps);

  const completedStepsCount = useMemo(() => steps.filter(step => step.completed).length, [steps]);
  const totalSteps = steps.length;
  const progressPercentage = totalSteps > 0 ? (completedStepsCount / totalSteps) * 100 : 0;

  const handleStepToggle = (stepId: string) => {
    setSteps(prevSteps =>
      prevSteps.map(step =>
        step.id === stepId ? { ...step, completed: !step.completed } : step
      )
    );
  };

  return (
    <section id="roadmap" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <ListChecks className="h-10 w-10 text-primary" />
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Your Home Buying Roadmap</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Navigate the path to homeownership with our interactive step-by-step guide. Track your progress, get insights, and prepare for each milestone. True security and proof-oriented features would require user accounts, which can be a future enhancement.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 mb-8">
          <Label className="text-sm text-muted-foreground">Overall Progress: {completedStepsCount} of {totalSteps} steps completed</Label>
          <Progress value={progressPercentage} aria-label={`${progressPercentage.toFixed(0)}% complete`} className="w-full h-3" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={step.id} 
              className={cn(
                "shadow-lg transition-all duration-300 flex flex-col",
                step.completed ? "bg-card/70 border-primary/30" : "bg-card"
              )}
            >
              <CardHeader className="flex flex-row items-start space-x-4 pb-4">
                <div className={cn("p-2 rounded-md", step.completed ? "bg-primary/20" : "bg-primary/10")}>
                  <step.icon className={cn("h-7 w-7", step.completed ? "text-primary/80" : "text-primary")} />
                </div>
                <div className="flex-1">
                  <CardTitle className={cn("font-headline text-xl", step.completed ? "text-primary/80 line-through" : "text-primary")}>
                    {index + 1}. {step.title}
                  </CardTitle>
                </div>
                <Checkbox
                  id={`step-${step.id}`}
                  checked={step.completed}
                  onCheckedChange={() => handleStepToggle(step.id)}
                  aria-label={`Mark step ${step.title} as ${step.completed ? 'incomplete' : 'complete'}`}
                  className="mt-1 h-5 w-5 rounded data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className={cn(step.completed ? "text-muted-foreground/70" : "text-muted-foreground")}>
                  {step.longDescription || step.description}
                </CardDescription>
              </CardContent>
              {step.aiTip && step.id === '1' && ( // Only show for the first step as a concept
                <div className="p-6 pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full text-xs">
                        <Lightbulb className="mr-2 h-4 w-4" /> Get AI Tip (Concept)
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center">
                          <Lightbulb className="mr-2 h-5 w-5 text-primary" />
                          AI Tip for: {step.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground py-2">
                        <p>{step.aiTip}</p>
                        <p className="text-xs italic mt-4">
                          This is a conceptual demonstration. Full AI personalization would require connecting to our Genkit services and potentially user-specific data (with your permission).
                        </p>
                      </div>
                      <div className="flex justify-end pt-2">
                        <DialogTrigger asChild>
                            <Button type="button" variant="secondary">Close</Button>
                        </DialogTrigger>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

    