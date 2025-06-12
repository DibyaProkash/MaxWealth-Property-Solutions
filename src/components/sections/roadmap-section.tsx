
"use client";

import { useState, useMemo, type FC } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
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
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  completed: boolean;
}

const initialRoadmapSteps: RoadmapStep[] = [
  { id: '1', title: 'Assess Your Finances', description: 'Review your budget, credit score, and savings to understand your financial standing.', icon: Wallet, completed: false },
  { id: '2', title: 'Get Pre-Approved for a Mortgage', description: 'Work with a lender to determine how much you can borrow for a home.', icon: FileText, completed: false },
  { id: '3', title: 'Find a Real Estate Agent', description: 'Partner with a knowledgeable agent to guide your home search and negotiations.', icon: Users, completed: false },
  { id: '4', title: 'Search for Homes', description: 'Explore listings that meet your criteria and attend open houses or schedule viewings.', icon: Search, completed: false },
  { id: '5', title: 'Make an Offer', description: 'When you find the right home, submit a competitive offer based on market conditions.', icon: Edit3, completed: false },
  { id: '6', title: 'Home Inspection & Appraisal', description: 'Conduct a thorough inspection and get an appraisal to ensure the home\'s value.', icon: CheckSquare, completed: false },
  { id: '7', title: 'Secure Your Loan & Insurance', description: 'Finalize your mortgage details and secure homeowners insurance.', icon: ShieldCheck, completed: false },
  { id: '8', title: 'Closing Day', description: 'Sign the final paperwork, pay closing costs, and officially become a homeowner!', icon: KeyRound, completed: false },
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Navigate the path to homeownership with our interactive step-by-step guide. Track your progress as you complete each milestone.
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
                "shadow-lg transition-all duration-300",
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
              <CardContent>
                <CardDescription className={cn(step.completed ? "text-muted-foreground/70" : "text-muted-foreground")}>
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
