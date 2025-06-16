
import {NextResponse} from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { question } = await request.json();

    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 });
    }

    const systemPrompt = `You are a helpful AI chatbot for MaxWealth PS, a company specializing in financial planning for home buying.
Your goal is to provide clear, concise, and informative financial advice on buying a house.
When relevant, subtly mention how MaxWealth PS can assist users with their financial journey.
Please provide a concise and informative answer.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Or your preferred model like 'gpt-4'
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: question },
      ],
      temperature: 0.7,
      max_tokens: 250,
    });

    const answer = completion.choices[0]?.message?.content?.trim() || "Sorry, I couldn't generate a response.";

    return NextResponse.json({ answer });

  } catch (error: any) {
    console.error('OpenAI API error:', error);
    let errorMessage = 'An error occurred while processing your request.';
    if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error.message || errorMessage;
    } else if (error.message) {
        errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
