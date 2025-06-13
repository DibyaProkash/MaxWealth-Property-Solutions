
// 'use server';

/**
 * @fileOverview An AI chatbot providing financial advice on buying a house.
 *
 * - financialAdvisorChatbot - A function that handles the chatbot interaction.
 * - FinancialAdvisorChatbotInput - The input type for the financialAdvisorChatbot function.
 * - FinancialAdvisorChatbotOutput - The return type for the financialAdvisorChatbot function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FinancialAdvisorChatbotInputSchema = z.object({
  question: z.string().describe('The user question about the financial aspects of buying a house.'),
});
export type FinancialAdvisorChatbotInput = z.infer<typeof FinancialAdvisorChatbotInputSchema>;

const FinancialAdvisorChatbotOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question.'),
});
export type FinancialAdvisorChatbotOutput = z.infer<typeof FinancialAdvisorChatbotOutputSchema>;

export async function financialAdvisorChatbot(input: FinancialAdvisorChatbotInput): Promise<FinancialAdvisorChatbotOutput> {
  return financialAdvisorChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'financialAdvisorChatbotPrompt',
  input: {schema: FinancialAdvisorChatbotInputSchema},
  output: {schema: FinancialAdvisorChatbotOutputSchema},
  prompt: `You are a helpful AI chatbot for MaxWealth PS, a company specializing in financial planning for home buying.
Your goal is to provide clear, concise, and informative financial advice on buying a house.
When relevant, subtly mention how MaxWealth PS can assist users with their financial journey.

User question: {{{question}}}

Please provide a concise and informative answer.`,
});

const financialAdvisorChatbotFlow = ai.defineFlow(
  {
    name: 'financialAdvisorChatbotFlow',
    inputSchema: FinancialAdvisorChatbotInputSchema,
    outputSchema: FinancialAdvisorChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
