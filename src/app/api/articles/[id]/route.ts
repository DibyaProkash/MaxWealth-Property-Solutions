
import { NextResponse } from 'next/server';
import { articlesData } from '@/lib/data/articles';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const article = articlesData.find(a => a.id === params.id);
  if (article) {
    // Omit the 'icon' component property for API response
    const { icon, ...articleForApi } = article;
    return NextResponse.json(articleForApi);
  }
  return NextResponse.json({ message: 'Article not found' }, { status: 404 });
}
