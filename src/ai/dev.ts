
import { config } from 'dotenv';
config();

// Removed: import '@/ai/flows/financial-advisor-chatbot.ts';
import '@/ai/flows/document-analyzer-flow.ts';
import '@/ai/flows/personalized-financial-plan-flow.ts';
import '@/ai/flows/market-trend-summarizer-flow.ts';
// Note: home-readiness-quiz-flow.ts was missing from the original dev.ts, 
// if it exists and is used by Genkit, it should be imported here.
// Assuming it was an oversight in the provided file list and adding it based on other existing flows.
import '@/ai/flows/home-readiness-quiz-flow.ts'; 
