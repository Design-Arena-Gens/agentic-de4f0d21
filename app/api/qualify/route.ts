import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { leadId, responses } = await request.json();

  // Simulate AI qualification scoring
  const qualificationScore = {
    budget: responses.budget ? 25 : 0,
    authority: responses.authority ? 25 : 0,
    need: responses.need ? 25 : 0,
    timeline: responses.timeline ? 25 : 0,
  };

  const totalScore = Object.values(qualificationScore).reduce((a, b) => a + b, 0);

  const qualification = {
    leadId,
    score: totalScore,
    breakdown: qualificationScore,
    recommendation: totalScore >= 75 ? 'qualified' : totalScore >= 50 ? 'nurturing' : 'disqualified',
    reasoning: totalScore >= 75
      ? 'Strong fit - proceed to demo/proposal stage'
      : totalScore >= 50
      ? 'Moderate fit - continue nurturing with targeted content'
      : 'Poor fit - disqualify or long-term nurture'
  };

  return NextResponse.json(qualification);
}
