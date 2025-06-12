
"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function ClosingCostEstimator() {
  const [homePrice, setHomePrice] = useState<string>('350000');
  const [estimatedCosts, setEstimatedCosts] = useState<{ min: string; max: string } | null>(null);
  const [error, setError] = useState<string>('');

  const estimateCosts = () => {
    setError('');
    setEstimatedCosts(null);

    const price = parseFloat(homePrice);

    if (isNaN(price) || price <= 0) {
      setError('Please enter a valid home purchase price.');
      return;
    }

    // Closing costs are typically 2% to 5% of the home's purchase price.
    const minCost = price * 0.02;
    const maxCost = price * 0.05;

    setEstimatedCosts({
      min: minCost.toFixed(2),
      max: maxCost.toFixed(2),
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="homePrice" className="text-sm font-medium">Home Purchase Price ($)</Label>
        <Input
          id="homePrice"
          type="number"
          value={homePrice}
          onChange={(e) => setHomePrice(e.target.value)}
          placeholder="e.g., 350000"
          min="1"
          className="max-w-xs mx-auto"
        />
      </div>
      
      <Button onClick={estimateCosts} className="w-full max-w-xs mx-auto flex justify-center shadow-md hover:shadow-lg transition-shadow">
        Estimate Closing Costs
      </Button>

      {error && (
        <p className="text-sm text-center text-destructive">{error}</p>
      )}

      {estimatedCosts && (
        <Card className="mt-6 bg-secondary border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-primary text-center font-headline">Estimated Closing Costs Range</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold text-primary">
              ${parseFloat(estimatedCosts.min).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} - ${parseFloat(estimatedCosts.max).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <CardDescription className="text-xs mt-1">
              This is a general estimate (2-5% of home price). Actual costs can vary by location and lender.
            </CardDescription>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
