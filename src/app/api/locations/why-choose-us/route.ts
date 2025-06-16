
import { NextResponse } from 'next/server';
import { whyChooseUsData } from '@/lib/data/locations';

export async function GET() {
  return NextResponse.json(whyChooseUsData);
}
