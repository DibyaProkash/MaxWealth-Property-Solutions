
import { NextResponse } from 'next/server';
import { articlesData } from '@/lib/data/articles';

export async function GET() {
  // Omit the 'icon' component property as it's not serializable for API responses
  const articlesForApi = articlesData.map(({ icon, ...article }) => article);
  return NextResponse.json(articlesForApi);
}
