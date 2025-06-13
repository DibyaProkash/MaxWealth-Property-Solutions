
'use server';
/**
 * @fileOverview An AI agent for analyzing financial documents.
 *
 * - analyzeDocument - A function that handles the document analysis process.
 * - DocumentAnalyzerInput - The input type for the analyzeDocument function.
 * - DocumentAnalyzerOutput - The return type for the analyzeDocument function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DocumentAnalyzerInputSchema = z.object({
  documentText: z.string().describe("The text content of a financial document, like a loan estimate or disclosure."),
});
export type DocumentAnalyzerInput = z.infer<typeof DocumentAnalyzerInputSchema>;

const DocumentAnalyzerOutputSchema = z.object({
  analysis: z.string().describe("A summary of the document and an explanation of key financial terms found within it."),
});
export type DocumentAnalyzerOutput = z.infer<typeof DocumentAnalyzerOutputSchema>;

export async function analyzeDocument(input: DocumentAnalyzerInput): Promise<DocumentAnalyzerOutput> {
  return documentAnalyzerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'documentAnalyzerPrompt',
  input: {schema: DocumentAnalyzerInputSchema},
  output: {schema: DocumentAnalyzerOutputSchema},
  prompt: `You are an expert financial analyst. You will be provided with the text content of a financial document.
Your task is to:
1. Provide a concise summary of the document's main purpose and key figures.
2. Identify and explain any important financial terms or jargon present in the document.
Ensure your analysis is clear, easy to understand for a layperson, and directly relevant to the provided text.

Document Text:
{{{documentText}}}

Provide your analysis:`,
});

const documentAnalyzerFlow = ai.defineFlow(
  {
    name: 'documentAnalyzerFlow',
    inputSchema: DocumentAnalyzerInputSchema,
    outputSchema: DocumentAnalyzerOutputSchema,
  },
  async input => {
    if (!input.documentText.trim()) {
      return { analysis: "Please provide some document text to analyze." };
    }
    const {output} = await prompt(input);
    return output!;
  }
);
