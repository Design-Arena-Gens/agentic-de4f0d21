export interface Lead {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone?: string;
  industry: string;
  companySize: string;
  status: 'new' | 'contacted' | 'qualified' | 'nurturing' | 'converted' | 'disqualified';
  score: number;
  lastContact?: string;
  notes: string;
  createdAt: string;
  source: string;
}

export interface Campaign {
  id: string;
  name: string;
  targetIndustry: string;
  targetCompanySize: string;
  message: string;
  status: 'draft' | 'active' | 'paused' | 'completed';
  sentCount: number;
  responseRate: number;
  createdAt: string;
}

export interface Activity {
  id: string;
  leadId: string;
  type: 'email_sent' | 'email_opened' | 'email_replied' | 'call_scheduled' | 'meeting_held' | 'note_added';
  description: string;
  timestamp: string;
}

export interface ProspectingCriteria {
  industry: string[];
  companySize: string[];
  location: string[];
  keywords: string[];
}
