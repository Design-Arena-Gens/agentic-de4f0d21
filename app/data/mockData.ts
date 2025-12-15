import { Lead, Campaign, Activity } from '../types';

export const mockLeads: Lead[] = [
  {
    id: '1',
    companyName: 'TechCorp Solutions',
    contactName: 'Sarah Johnson',
    email: 'sarah.johnson@techcorp.com',
    phone: '+1-555-0123',
    industry: 'Software Development',
    companySize: '50-200',
    status: 'qualified',
    score: 85,
    lastContact: '2025-12-10',
    notes: 'Interested in enterprise solutions. Budget confirmed for Q1 2026.',
    createdAt: '2025-12-01',
    source: 'LinkedIn Prospecting'
  },
  {
    id: '2',
    companyName: 'Global Marketing Inc',
    contactName: 'Michael Chen',
    email: 'mchen@globalmarketing.com',
    phone: '+1-555-0124',
    industry: 'Marketing & Advertising',
    companySize: '200-500',
    status: 'contacted',
    score: 72,
    lastContact: '2025-12-12',
    notes: 'Requested demo. Decision maker is CMO.',
    createdAt: '2025-12-05',
    source: 'Cold Outreach'
  },
  {
    id: '3',
    companyName: 'FinanceHub LLC',
    contactName: 'Emily Rodriguez',
    email: 'e.rodriguez@financehub.com',
    industry: 'Financial Services',
    companySize: '500-1000',
    status: 'nurturing',
    score: 68,
    lastContact: '2025-12-08',
    notes: 'Still evaluating options. Follow up in January.',
    createdAt: '2025-11-28',
    source: 'Referral'
  },
  {
    id: '4',
    companyName: 'HealthTech Innovations',
    contactName: 'David Park',
    email: 'dpark@healthtech.com',
    phone: '+1-555-0125',
    industry: 'Healthcare',
    companySize: '50-200',
    status: 'new',
    score: 78,
    notes: 'AI-generated prospect. High fit based on company profile.',
    createdAt: '2025-12-14',
    source: 'AI Prospecting'
  },
  {
    id: '5',
    companyName: 'RetailPro Systems',
    contactName: 'Lisa Thompson',
    email: 'lthompson@retailpro.com',
    industry: 'Retail',
    companySize: '1000+',
    status: 'converted',
    score: 95,
    lastContact: '2025-12-13',
    notes: 'Deal closed! $150K annual contract.',
    createdAt: '2025-11-15',
    source: 'Conference'
  },
  {
    id: '6',
    companyName: 'EduSoft Platform',
    contactName: 'James Wilson',
    email: 'jwilson@edusoft.com',
    industry: 'Education Technology',
    companySize: '20-50',
    status: 'disqualified',
    score: 35,
    lastContact: '2025-12-09',
    notes: 'Budget constraints. Not a fit right now.',
    createdAt: '2025-12-03',
    source: 'Cold Outreach'
  }
];

export const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Q4 SaaS Enterprise Outreach',
    targetIndustry: 'Software Development',
    targetCompanySize: '200-500',
    message: 'Personalized outreach focusing on enterprise automation solutions',
    status: 'active',
    sentCount: 245,
    responseRate: 18.5,
    createdAt: '2025-11-01'
  },
  {
    id: '2',
    name: 'Healthcare Decision Makers',
    targetIndustry: 'Healthcare',
    targetCompanySize: '50-200',
    message: 'HIPAA-compliant solutions pitch to CTOs and VPs',
    status: 'active',
    sentCount: 128,
    responseRate: 22.3,
    createdAt: '2025-11-15'
  },
  {
    id: '3',
    name: 'Financial Services Security',
    targetIndustry: 'Financial Services',
    targetCompanySize: '500-1000',
    message: 'Security-first messaging for financial institutions',
    status: 'paused',
    sentCount: 87,
    responseRate: 15.2,
    createdAt: '2025-10-20'
  }
];

export const mockActivities: Activity[] = [
  {
    id: '1',
    leadId: '1',
    type: 'email_sent',
    description: 'Initial outreach email sent',
    timestamp: '2025-12-01T10:30:00Z'
  },
  {
    id: '2',
    leadId: '1',
    type: 'email_opened',
    description: 'Email opened by recipient',
    timestamp: '2025-12-01T14:22:00Z'
  },
  {
    id: '3',
    leadId: '1',
    type: 'email_replied',
    description: 'Positive response received',
    timestamp: '2025-12-02T09:15:00Z'
  },
  {
    id: '4',
    leadId: '1',
    type: 'call_scheduled',
    description: 'Discovery call scheduled for Dec 10',
    timestamp: '2025-12-03T11:00:00Z'
  },
  {
    id: '5',
    leadId: '2',
    type: 'email_sent',
    description: 'Follow-up email sent',
    timestamp: '2025-12-12T08:00:00Z'
  },
  {
    id: '6',
    leadId: '5',
    type: 'meeting_held',
    description: 'Contract signed - deal closed',
    timestamp: '2025-12-13T15:30:00Z'
  }
];
