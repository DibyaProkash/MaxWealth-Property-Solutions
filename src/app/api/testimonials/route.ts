
import { NextResponse } from 'next/server';
import { testimonialsData } from '@/lib/data/testimonials';

export async function GET() {
  return NextResponse.json(testimonialsData);
}
