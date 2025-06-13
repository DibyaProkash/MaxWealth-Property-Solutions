
'use server';
/**
 * @fileOverview An AI agent for generating basic personalized financial plans for home buying.
 *
 * - generateFinancialPlan - A function that handles the financial plan generation.
 * - PersonalizedFinancialPlanInput - The input type for the generateFinancialPlan function.
 * - PersonalizedFinancialPlanOutput - The return type for the generateFinancialPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedFinancialPlanInputSchema = z.object({
  userSituation: z.string().describe("A brief description of the user's current financial situation, savings, income, debts, and home buying goals."),
});
export type PersonalizedFinancialPlanInput = z.infer<typeof PersonalizedFinancialPlanInputSchema>;

const PersonalizedFinancialPlanOutputSchema = z.object({
  plan: z.string().describe("A basic financial plan with actionable next steps tailored to the user's described situation, including advice on savings, debt management, and mortgage readiness. It should also state that this is a preliminary guide and a professional consultation is recommended for a comprehensive plan."),
});
export type PersonalizedFinancialPlanOutput = z.infer<typeof PersonalizedFinancialPlanOutputSchema>;

export async function generateFinancialPlan(input: PersonalizedFinancialPlanInput): Promise<PersonalizedFinancialPlanOutput> {
  return personalizedFinancialPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedFinancialPlanPrompt',
  input: {schema: PersonalizedFinancialPlanInputSchema},
  output: {schema: PersonalizedFinancialPlanOutputSchema},
  prompt: `You are an AI financial assistant for MaxWealth PS, specializing in home buying.
A user has provided the following description of their financial situation and goals:
"{{{userSituation}}}"

Based on this, generate a basic financial plan with actionable next steps. The plan should cover:
1.  An assessment of their readiness based on the information provided.
2.  Suggestions for savings strategies.
3.  Advice on managing any mentioned debts.
4.  Steps towards mortgage pre-approval.
5.  Emphasize that this is a preliminary guide and a consultation with a MaxWealth PS financial advisor is highly recommended for a comprehensive, personalized plan.

Keep the tone encouraging and informative.
`,
});

const personalizedFinancialPlanFlow = ai.defineFlow(
  {
    name: 'personalizedFinancialPlanFlow',
    inputSchema: PersonalizedFinancialPlanInputSchema,
    outputSchema: PersonalizedFinancialPlanOutputSchema,
  },
  async input => {
    if (!input.userSituation.trim()) {
      return { plan: "Please describe your financial situation and goals to get a personalized plan." };
    }
    const {output} = await prompt(input);
    return output!;
  }
);
