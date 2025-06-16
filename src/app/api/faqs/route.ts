
import { NextResponse } from 'next/server';
import { faqData } from '@/lib/data/faqs';

export async function GET() {
  return NextResponse.json(faqData);
}
