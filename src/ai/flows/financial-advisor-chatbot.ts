
// This file is no longer needed as the chatbot functionality has been migrated to use OpenAI via /api/chat.
// It can be safely deleted. To prevent build errors if it's still imported somewhere unexpectedly,
// this content is minimal.

'use server';
/**
 * @fileOverview This Genkit flow is deprecated and has been replaced by an OpenAI API route.
 */

export async function financialAdvisorChatbot_DEPRECATED() {
  // Deprecated: Functionality moved to /api/chat
  console.warn("financialAdvisorChatbot Genkit flow is deprecated.");
  return { answer: "This chatbot functionality has been moved." };
}
