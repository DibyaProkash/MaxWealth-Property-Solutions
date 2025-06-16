
import { NextResponse } from 'next/server';
import { locationDetailsData } from '@/lib/data/locations';

export async function GET(
  request: Request,
  { params }: { params: { cityName: string } }
) {
  const cityDetail = locationDetailsData.find(loc => loc.slug === params.cityName);
  if (cityDetail) {
    return NextResponse.json(cityDetail);
  }
  return NextResponse.json({ message: 'City details not found' }, { status: 404 });
}
