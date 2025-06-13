
'use server';
/**
 * @fileOverview An AI agent for assessing home buying readiness based on user-provided financial and situational data.
 *
 * - homeReadinessQuiz - A function that handles the quiz assessment.
 * - HomeReadinessQuizInput - The input type for the homeReadinessQuiz function.
 * - HomeReadinessQuizOutput - The return type for the homeReadinessQuiz function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HomeReadinessQuizInputSchema = z.object({
  savingsAmount: z.string().describe("User's approximate savings for down payment and closing costs, as a string (e.g., '20000')."),
  monthlyDebtPayments: z.string().describe("User's total monthly debt payments (excluding rent/current mortgage), as a string (e.g., '500')."),
  estimatedCreditScore: z.string().describe("User's estimated credit score category (e.g., 'excellent', 'good', 'fair', 'poor', 'unknown')."),
  incomeStability: z.string().describe("User's assessment of their income stability (e.g., 'very_stable', 'stable', 'less_stable', 'unstable')."),
  buyingTimeline: z.string().describe("User's desired timeline for buying a home (e.g., 'asap', '3-6_months', '6-12_months', '1-2_years', '2+_years')."),
  additionalContext: z.string().optional().describe("Any additional context or specific concerns the user wants to share."),
});
export type HomeReadinessQuizInput = z.infer<typeof HomeReadinessQuizInputSchema>;

const HomeReadinessQuizOutputSchema = z.object({
  assessment: z.string().describe("A brief overall assessment of the user's home buying readiness based on their inputs."),
  recommendations: z.array(z.string()).describe("A list of actionable recommendations or key considerations for the user."),
});
export type HomeReadinessQuizOutput = z.infer<typeof HomeReadinessQuizOutputSchema>;

export async function homeReadinessQuiz(input: HomeReadinessQuizInput): Promise<HomeReadinessQuizOutput> {
  return homeReadinessQuizFlow(input);
}

const prompt = ai.definePrompt({
  name: 'homeReadinessQuizPrompt',
  input: {schema: HomeReadinessQuizInputSchema},
  output: {schema: HomeReadinessQuizOutputSchema},
  prompt: `You are an AI financial assistant for MaxWealth PS, specializing in home buying readiness.
A user has provided the following information through a quiz:
- Approximate Savings for Down Payment & Closing: \${{{savingsAmount}}}
- Total Monthly Debt Payments (excluding rent/mortgage): \${{{monthlyDebtPayments}}}
- Estimated Credit Score: {{{estimatedCreditScore}}}
- Income Stability: {{{incomeStability}}}
- Desired Buying Timeline: {{{buyingTimeline}}}
- Additional Context/Concerns: "{{{additionalContext}}}"

Based on this information, provide:
1.  **Assessment**: A brief (1-2 sentences) overall assessment of their current home buying readiness. Be realistic but encouraging.
2.  **Recommendations**: A list of 3-5 concise, actionable recommendations or key considerations tailored to their situation. These should help them improve their readiness or guide their next steps.

Example Output Format:
Assessment: Based on your savings and stable income, you're on a good track. Focusing on your credit score could further strengthen your position.
Recommendations:
- Continue building your savings towards your down payment goal.
- Review your credit report for any inaccuracies and explore ways to boost your score.
- Research mortgage pre-approval options to understand your borrowing capacity.

IMPORTANT: Frame your response in a helpful and advisory tone. Do not make definitive financial decisions for the user. Always subtly remind them that a consultation with a MaxWealth PS advisor is recommended for a comprehensive plan.
Avoid overly generic advice. Tailor it to the specifics provided.
If information is missing or unclear (e.g., 'unknown' credit score), acknowledge that and provide more general advice for that aspect, suggesting they find out that information.
Keep recommendations actionable and clear.
`,
});

const homeReadinessQuizFlow = ai.defineFlow(
  {
    name: 'homeReadinessQuizFlow',
    inputSchema: HomeReadinessQuizInputSchema,
    outputSchema: HomeReadinessQuizOutputSchema,
  },
  async input => {
    // Basic validation, more can be added
    if (!input.savingsAmount || !input.monthlyDebtPayments) {
      return {
        assessment: "Please provide information on your savings and monthly debts to get a more accurate assessment.",
        recommendations: ["Ensure you fill out all required fields in the quiz.", "Understanding your savings and debts is crucial for financial planning."]
      };
    }

    const {output} = await prompt(input);

    if (!output) {
        return {
            assessment: "We encountered an issue generating your assessment. Please try again or contact support.",
            recommendations: ["Ensure all your inputs are clear.", "Try rephrasing any additional context you provided."]
        };
    }
    
    // Ensure recommendations always include a suggestion to consult
    const finalRecommendations = [...output.recommendations];
    if (!output.recommendations.some(rec => rec.toLowerCase().includes("maxwealth ps"))) {
        finalRecommendations.push("For a comprehensive, personalized financial plan, we highly recommend scheduling a consultation with a MaxWealth PS advisor.");
    }
    
    return {
        assessment: output.assessment,
        recommendations: finalRecommendations
    };
  }
);
