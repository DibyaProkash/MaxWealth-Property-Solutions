
"use client";

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { homeReadinessQuiz, type HomeReadinessQuizInput, type HomeReadinessQuizOutput } from '@/ai/flows/home-readiness-quiz-flow';
import { useToast } from '@/hooks/use-toast';

interface QuizFormData {
  savings: string;
  debt: string;
  creditScore: string;
  incomeStability: string;
  timeToBuy: string;
  additionalInfo: string;
}

const initialFormData: QuizFormData = {
  savings: '',
  debt: '',
  creditScore: 'good', // Default value
  incomeStability: 'stable', // Default value
  timeToBuy: '6-12_months', // Default value
  additionalInfo: '',
};

export default function QuizSection() {
  const [formData, setFormData] = useState<QuizFormData>(initialFormData);
  const [quizResult, setQuizResult] = useState<HomeReadinessQuizOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof QuizFormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setQuizResult(null);

    const inputForAI: HomeReadinessQuizInput = {
      savingsAmount: formData.savings,
      monthlyDebtPayments: formData.debt,
      estimatedCreditScore: formData.creditScore,
      incomeStability: formData.incomeStability,
      buyingTimeline: formData.timeToBuy,
      additionalContext: formData.additionalInfo,
    };

    try {
      const result = await homeReadinessQuiz(inputForAI);
      setQuizResult(result);
      toast({
        title: "Quiz Assessment Complete!",
        description: "Check out your home readiness insights below.",
      });
    } catch (err: any) {
      console.error("Error submitting quiz:", err);
      setError(err.message || "Failed to get assessment. Please try again.");
      toast({
        title: "Assessment Error",
        description: err.message || "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary flex items-center">
          <Sparkles className="mr-2 h-6 w-6" />
          Home Readiness Quiz
        </CardTitle>
        <CardDescription>
          Answer a few questions to get an AI-powered assessment of your home buying preparedness.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="savings">Approximate Savings for Down Payment & Closing ($)</Label>
              <Input
                id="savings"
                name="savings"
                type="number"
                placeholder="e.g., 20000"
                value={formData.savings}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="debt">Total Monthly Debt Payments (excluding rent/mortgage) ($)</Label>
              <Input
                id="debt"
                name="debt"
                type="number"
                placeholder="e.g., 500 (car, student loans, credit cards)"
                value={formData.debt}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="creditScore">Estimated Credit Score</Label>
              <Select
                name="creditScore"
                value={formData.creditScore}
                onValueChange={handleSelectChange('creditScore')}
                disabled={isLoading}
              >
                <SelectTrigger id="creditScore">
                  <SelectValue placeholder="Select score range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excellent (740+)</SelectItem>
                  <SelectItem value="good">Good (670-739)</SelectItem>
                  <SelectItem value="fair">Fair (580-669)</SelectItem>
                  <SelectItem value="poor">&lt;580</SelectItem>
                  <SelectItem value="unknown">I don't know</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="incomeStability">Income Stability</Label>
              <Select
                name="incomeStability"
                value={formData.incomeStability}
                onValueChange={handleSelectChange('incomeStability')}
                disabled={isLoading}
              >
                <SelectTrigger id="incomeStability">
                  <SelectValue placeholder="Select stability level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="very_stable">Very Stable (Salaried, long-term)</SelectItem>
                  <SelectItem value="stable">Stable (Regular employment/contract)</SelectItem>
                  <SelectItem value="less_stable">Less Stable (Freelance, gig work, new job)</SelectItem>
                  <SelectItem value="unstable">Unstable/Irregular</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeToBuy">Buying Timeline</Label>
              <Select
                name="timeToBuy"
                value={formData.timeToBuy}
                onValueChange={handleSelectChange('timeToBuy')}
                disabled={isLoading}
              >
                <SelectTrigger id="timeToBuy">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">ASAP (0-3 Months)</SelectItem>
                  <SelectItem value="3-6_months">3-6 Months</SelectItem>
                  <SelectItem value="6-12_months">6-12 Months</SelectItem>
                  <SelectItem value="1-2_years">1-2 Years</SelectItem>
                  <SelectItem value="2+_years">More than 2 Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="additionalInfo">Anything else to share? (Optional)</Label>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              placeholder="E.g., Gift for down payment, specific loan type interest, etc."
              value={formData.additionalInfo}
              onChange={handleChange}
              rows={3}
              disabled={isLoading}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? <Loader2 className="animate-spin" /> : "Get My Readiness Assessment"}
          </Button>
        </form>

        {error && (
          <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-md text-destructive">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <p className="font-medium">Error</p>
            </div>
            <p className="text-sm ml-7">{error}</p>
          </div>
        )}

        {quizResult && (
          <Card className="mt-8 bg-secondary border-primary/20">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary flex items-center">
                <CheckCircle2 className="mr-2 h-6 w-6" />
                Your Home Readiness Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary">Overall Assessment:</h4>
                <p className="text-muted-foreground">{quizResult.assessment}</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Key Considerations & Next Steps:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {quizResult.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-muted-foreground italic pt-2">
                This is a preliminary assessment. For a comprehensive financial plan, please consult with a MaxWealth PS advisor.
              </p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
