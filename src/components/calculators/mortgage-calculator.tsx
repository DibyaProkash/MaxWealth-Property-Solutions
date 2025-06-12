
"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState<string>('300000');
  const [interestRate, setInterestRate] = useState<string>('6.5');
  const [loanTerm, setLoanTerm] = useState<string>('30');
  const [monthlyPayment, setMonthlyPayment] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  const calculateMortgage = () => {
    setError('');
    setMonthlyPayment(null);

    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const termYears = parseInt(loanTerm);

    if (isNaN(P) || P <= 0) {
      setError('Please enter a valid loan amount.');
      return;
    }
    if (isNaN(annualRate) || annualRate <= 0) {
      setError('Please enter a valid annual interest rate.');
      return;
    }
    if (isNaN(termYears) || termYears <= 0) {
      setError('Please enter a valid loan term in years.');
      return;
    }

    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = termYears * 12;

    if (monthlyRate === 0) { // Handle zero interest rate
        const payment = P / numberOfPayments;
        setMonthlyPayment(payment.toFixed(2));
        return;
    }
    
    const M = P * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    setMonthlyPayment(M.toFixed(2));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="loanAmount" className="text-sm font-medium">Loan Amount ($)</Label>
          <Input
            id="loanAmount"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="e.g., 300000"
            min="1"
          />
        </div>
        <div>
          <Label htmlFor="interestRate" className="text-sm font-medium">Annual Interest Rate (%)</Label>
          <Input
            id="interestRate"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="e.g., 6.5"
            step="0.01"
            min="0.01"
          />
        </div>
        <div>
          <Label htmlFor="loanTerm" className="text-sm font-medium">Loan Term (Years)</Label>
          <Input
            id="loanTerm"
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            placeholder="e.g., 30"
            min="1"
          />
        </div>
      </div>

      <Button onClick={calculateMortgage} className="w-full shadow-md hover:shadow-lg transition-shadow">
        Calculate Monthly Payment
      </Button>

      {error && (
        <p className="text-sm text-center text-destructive">{error}</p>
      )}

      {monthlyPayment && (
        <Card className="mt-6 bg-secondary border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-primary text-center font-headline">Estimated Monthly Payment</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold text-primary">
              ${parseFloat(monthlyPayment).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <CardDescription className="text-xs mt-1">
              This is an estimate of principal and interest. It does not include taxes, insurance, or PMI.
            </CardDescription>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
