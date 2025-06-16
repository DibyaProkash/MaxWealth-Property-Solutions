
import { NextResponse } from 'next/server';
import { servicePageAdvocates } from '@/lib/data/team';

export async function GET() {
  return NextResponse.json(servicePageAdvocates);
}
