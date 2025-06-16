
import { NextResponse } from 'next/server';
import { guidesData } from '@/lib/data/guides';

export async function GET() {
  return NextResponse.json(guidesData);
}
