
'use server';
/**
 * @fileOverview An AI agent for analyzing financial documents from text or images.
 *
 * - analyzeDocument - A function that handles the document analysis process.
 * - DocumentAnalyzerInput - The input type for the analyzeDocument function.
 * - DocumentAnalyzerOutput - The return type for the analyzeDocument function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DocumentAnalyzerInputSchema = z.object({
  documentText: z.string().optional().describe("The text content of a financial document, like a loan estimate or disclosure."),
  photoDataUri: z.string().optional().describe("An image of a financial document, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
}).superRefine((data, ctx) => {
  if (!data.documentText && !data.photoDataUri) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Either document text (documentText) or a document image (photoDataUri) must be provided.",
      path: ['documentText'], // Or a general path
    });
  }
  // Optionally, prevent both from being sent if that's a constraint,
  // but the prompt can handle it if only one is preferred.
  // For now, just ensuring at least one is there.
});
export type DocumentAnalyzerInput = z.infer<typeof DocumentAnalyzerInputSchema>;

const DocumentAnalyzerOutputSchema = z.object({
  analysis: z.string().describe("A summary of the document and an explanation of key financial terms found within it, derived from the provided text or image."),
});
export type DocumentAnalyzerOutput = z.infer<typeof DocumentAnalyzerOutputSchema>;

export async function analyzeDocument(input: DocumentAnalyzerInput): Promise<DocumentAnalyzerOutput> {
  return documentAnalyzerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'documentAnalyzerPrompt',
  input: {schema: DocumentAnalyzerInputSchema},
  output: {schema: DocumentAnalyzerOutputSchema},
  prompt: `You are an expert financial analyst. You will be provided with information from a financial document.
This information might be direct text content or an image of the document.

{{#if photoDataUri}}
The document is provided as an image. First, carefully extract all relevant text from this image:
{{media url=photoDataUri}}
Once text is extracted, use that text for your analysis.
{{else if documentText}}
The document is provided as text content:
{{{documentText}}}
Use this text for your analysis.
{{else}}
No document information (neither text nor image) was provided. Please indicate that input is missing.
{{/if}}

Based on the available document information (from text or extracted from image), perform the following tasks:
1. Provide a concise summary of the document's main purpose and key figures (e.g., loan amount, interest rate, property address if present).
2. Identify and explain any important financial terms or jargon present in the document (e.g., APR, escrow, points, amortization).
Ensure your analysis is clear, easy to understand for a layperson, and directly relevant to the provided information.
If no useful information could be extracted or provided, state that clearly.

Provide your analysis:`,
});

const documentAnalyzerFlow = ai.defineFlow(
  {
    name: 'documentAnalyzerFlow',
    inputSchema: DocumentAnalyzerInputSchema,
    outputSchema: DocumentAnalyzerOutputSchema,
  },
  async input => {
    if (!input.documentText?.trim() && !input.photoDataUri?.trim()) {
      return { analysis: "Please provide some document text or an image to analyze." };
    }
    // If an image is provided, the model with vision capabilities will handle OCR.
    // If only text is provided, it will use that.
    const {output} = await prompt(input);
    return output!;
  }
);

    