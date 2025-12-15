import { NextResponse } from 'next/server';
import { mockLeads } from '@/app/data/mockData';

export async function GET() {
  return NextResponse.json(mockLeads);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newLead = {
    id: Date.now().toString(),
    ...body,
    status: 'new',
    score: Math.floor(Math.random() * 40) + 60, // Random score 60-100
    createdAt: new Date().toISOString().split('T')[0],
  };

  return NextResponse.json(newLead, { status: 201 });
}
