import { NextResponse } from 'next/server';
import { mockCampaigns } from '@/app/data/mockData';

export async function GET() {
  return NextResponse.json(mockCampaigns);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newCampaign = {
    id: Date.now().toString(),
    ...body,
    status: 'draft',
    sentCount: 0,
    responseRate: 0,
    createdAt: new Date().toISOString().split('T')[0],
  };

  return NextResponse.json(newCampaign, { status: 201 });
}
