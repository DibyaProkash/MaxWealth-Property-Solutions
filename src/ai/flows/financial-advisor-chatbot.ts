
'use server';
/**
 * @fileOverview An AI chatbot for providing financial advice related to home buying,
 * with optional document analysis capabilities.
 *
 * - financialAdvisorChatbot - A function that handles user questions and document context.
 * - FinancialAdvisorChatbotInput - The input type for the chatbot.
 * - FinancialAdvisorChatbotOutput - The return type for the chatbot.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FinancialAdvisorChatbotInputSchema = z.object({
  question: z.string().describe("The user's question about financial planning for home buying."),
  documentText: z.string().optional().describe("Text content of an uploaded document, if any."),
  photoDataUri: z.string().optional().describe("Image of an uploaded document as a data URI, if any. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
});
export type FinancialAdvisorChatbotInput = z.infer<typeof FinancialAdvisorChatbotInputSchema>;

const FinancialAdvisorChatbotOutputSchema = z.object({
  answer: z.string().describe("The AI's answer to the user's question, considering any document provided."),
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

{{#if photoDataUri}}
The user has uploaded a document image for context.
First, carefully extract relevant text and key information from this image: {{media url=photoDataUri}}
Then, use this extracted information along with the user's question below to formulate your answer.
If the document seems to be a financial statement, loan estimate, or similar, briefly summarize its purpose or key figures if directly relevant to the question.
{{else if documentText}}
The user has provided the following document text for context:
"{{{documentText}}}"
Use this text and the user's question below to formulate your answer.
If the document text appears to be from a financial statement, loan estimate, or similar, briefly summarize its purpose or key figures if directly relevant to the question.
{{/if}}

Please provide a concise and informative answer to the user's question, taking into account any document context provided:
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
    if (!input.question.trim() && !input.documentText?.trim() && !input.photoDataUri?.trim()) {
      return { answer: "Please ask a question or upload a document for analysis." };
    }
    if (!input.question.trim() && (input.documentText?.trim() || input.photoDataUri?.trim())) {
      // If only a document is provided, we modify the question to be about analyzing it.
      input.question = "Please analyze this document and provide a summary of its key financial aspects relevant to home buying.";
    }
    const {output} = await prompt(input);
    return output!;
  }
);

