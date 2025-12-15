import { NextResponse } from 'next/server';
import { mockActivities } from '@/app/data/mockData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const leadId = searchParams.get('leadId');

  if (leadId) {
    const filtered = mockActivities.filter(a => a.leadId === leadId);
    return NextResponse.json(filtered);
  }

  return NextResponse.json(mockActivities);
}
