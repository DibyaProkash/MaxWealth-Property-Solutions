
import { NextResponse } from 'next/server';
import { serviceLocationsData } from '@/lib/data/locations';

export async function GET() {
  return NextResponse.json(serviceLocationsData);
}
