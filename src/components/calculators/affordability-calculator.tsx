
"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function AffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState<string>('75000');
  const [monthlyDebts, setMonthlyDebts] = useState<string>('500');
  const [recommendedPITI, setRecommendedPITI] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  const calculateAffordability = () => {
    setError('');
    setRecommendedPITI(null);

    const income = parseFloat(annualIncome);
    const debts = parseFloat(monthlyDebts);

    if (isNaN(income) || income <= 0) {
      setError('Please enter a valid gross annual income.');
      return;
    }
    if (isNaN(debts) || debts < 0) {
      setError('Please enter a valid total for monthly debts (can be 0).');
      return;
    }

    const grossMonthlyIncome = income / 12;
    
    // Rule 1: Housing costs (PITI) should not exceed 28% of GMI
    const maxHousingCostRule1 = grossMonthlyIncome * 0.28;
    
    // Rule 2: Total debt (including PITI) should not exceed 36% of GMI
    // So, PITI should not exceed 36% of GMI minus existing debts
    const maxHousingCostRule2 = (grossMonthlyIncome * 0.36) - debts;

    let calculatedPITI = Math.min(maxHousingCostRule1, maxHousingCostRule2);

    if (calculatedPITI < 0) {
        calculatedPITI = 0; // Cannot have negative PITI
        setError("Your current monthly debts are high relative to your income according to standard guidelines. Reducing existing debts may improve affordability.");
    }
    
    setRecommendedPITI(calculatedPITI.toFixed(2));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="annualIncome" className="text-sm font-medium">Gross Annual Income ($)</Label>
          <Input
            id="annualIncome"
            type="number"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(e.target.value)}
            placeholder="e.g., 75000"
            min="1"
          />
        </div>
        <div>
          <Label htmlFor="monthlyDebts" className="text-sm font-medium">Total Monthly Debts ($)</Label>
          <Input
            id="monthlyDebts"
            type="number"
            value={monthlyDebts}
            onChange={(e) => setMonthlyDebts(e.target.value)}
            placeholder="e.g., 500 (car, student loans, etc.)"
            min="0"
          />
        </div>
      </div>
      
      <Button onClick={calculateAffordability} className="w-full shadow-md hover:shadow-lg transition-shadow">
        Calculate Recommended PITI
      </Button>

      {error && !recommendedPITI && ( // Show general error if PITI calculation itself failed
         <p className="text-sm text-center text-destructive">{error}</p>
      )}


      {recommendedPITI !== null && (
        <Card className="mt-6 bg-secondary border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-primary text-center font-headline">Recommended Max Monthly Housing Payment (PITI)</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold text-primary">
              ${parseFloat(recommendedPITI).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <CardDescription className="text-xs mt-1">
              PITI = Principal, Interest, Taxes, and Insurance. This is a guideline based on common lending standards (28/36 rule).
            </CardDescription>
            {error && parseFloat(recommendedPITI) === 0 && ( // Specific error about high debts if PITI is 0
                <p className="text-sm text-center text-destructive mt-2">{error}</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
