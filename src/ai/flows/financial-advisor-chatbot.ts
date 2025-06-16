'use server';
/**
 * @fileOverview An AI chatbot for providing financial advice related to home buying.
 *
 * - financialAdvisorChatbot - A function that handles user questions.
 * - FinancialAdvisorChatbotInput - The input type for the chatbot.
 * - FinancialAdvisorChatbotOutput - The return type for the chatbot.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FinancialAdvisorChatbotInputSchema = z.object({
  question: z.string().describe("The user's question about financial planning for home buying."),
});
export type FinancialAdvisorChatbotInput = z.infer<typeof FinancialAdvisorChatbotInputSchema>;

const FinancialAdvisorChatbotOutputSchema = z.object({
  answer: z.string().describe("The AI's answer to the user's question."),
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
Please provide a concise and informative answer to the user's question:
"{{{question}}}"
`,
});

const financialAdvisorChatbotFlow = ai.defineFlow(
  {
    name: 'financialAdvisorChatbotFlow',
    inputSchema: FinancialAdvisorChatbotInputSchema,
    outputSchema: FinancialAdvisorChatbotOutputSchema,
  },
  async input => {
    if (!input.question.trim()) {
      return { answer: "Please ask a question about home buying or financial planning." };
    }
    const {output} = await prompt(input);
    return output!;
  }
);
