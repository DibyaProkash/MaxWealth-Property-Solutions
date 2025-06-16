
import { NextResponse } from 'next/server';
import { teamMembersDetailedData } from '@/lib/data/team';

export async function GET() {
  return NextResponse.json(teamMembersDetailedData);
}
