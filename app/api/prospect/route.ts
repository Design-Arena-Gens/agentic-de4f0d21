import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const criteria = await request.json();

  // Simulate AI prospecting engine
  const simulatedProspects = [
    {
      companyName: `${criteria.industry[0]} Solutions Co`,
      contactName: 'Alex Martinez',
      email: 'alex.m@example.com',
      industry: criteria.industry[0],
      companySize: criteria.companySize[0],
      score: 82,
      reason: 'High engagement on LinkedIn, recently posted about scaling challenges'
    },
    {
      companyName: `${criteria.industry[0]} Technologies`,
      contactName: 'Jennifer Lee',
      email: 'jlee@example.com',
      industry: criteria.industry[0],
      companySize: criteria.companySize[0],
      score: 75,
      reason: 'Company expanding into new markets, hiring for key positions'
    },
    {
      companyName: `Global ${criteria.industry[0]} Group`,
      contactName: 'Robert Kim',
      email: 'rkim@example.com',
      industry: criteria.industry[0],
      companySize: criteria.companySize[0],
      score: 88,
      reason: 'Recent funding round, looking for automation solutions'
    }
  ];

  return NextResponse.json({
    prospects: simulatedProspects,
    count: simulatedProspects.length,
    criteria
  });
}
