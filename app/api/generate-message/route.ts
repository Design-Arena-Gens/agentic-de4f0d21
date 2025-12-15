import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { leadName, companyName, industry, tone } = await request.json();

  // Simulate AI message generation
  const messages = {
    formal: `Dear ${leadName},

I hope this message finds you well. I noticed ${companyName}'s impressive work in the ${industry} sector and wanted to reach out.

We specialize in helping companies like yours streamline operations and accelerate growth through our B2B solutions. Many of our clients in ${industry} have seen significant improvements in efficiency and revenue.

Would you be open to a brief conversation to explore how we might support ${companyName}'s objectives?

Best regards`,

    casual: `Hi ${leadName},

I've been following ${companyName}'s progress in the ${industry} space - really impressive stuff!

We work with companies like yours to solve common challenges around scaling and efficiency. I think there might be a good fit here.

Would you be up for a quick 15-minute chat to see if we can help?

Cheers`,

    value: `${leadName},

Quick question: Is ${companyName} currently looking to improve [specific pain point] in your ${industry} operations?

We've helped similar companies:
• Reduce operational costs by 30-40%
• Accelerate sales cycles by 2-3 weeks
• Increase qualified lead flow by 50%

If this resonates, let's schedule 15 minutes to discuss your specific situation.`
  };

  return NextResponse.json({
    message: messages[tone as keyof typeof messages] || messages.formal,
    subject: `Partnership opportunity for ${companyName}`,
    tone
  });
}
