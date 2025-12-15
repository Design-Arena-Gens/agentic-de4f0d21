'use client';

import { TrendingUp, Users, Target, DollarSign, Activity } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change: string;
  icon: React.ReactNode;
  positive?: boolean;
}

function MetricCard({ title, value, change, icon, positive = true }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="text-gray-500">{icon}</div>
        <span className={`text-sm font-semibold ${positive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">AI-powered B2B sales performance overview</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Leads"
          value="847"
          change="+12.5%"
          icon={<Users className="w-6 h-6" />}
        />
        <MetricCard
          title="Qualified Leads"
          value="234"
          change="+8.2%"
          icon={<Target className="w-6 h-6" />}
        />
        <MetricCard
          title="Pipeline Value"
          value="$2.4M"
          change="+18.7%"
          icon={<DollarSign className="w-6 h-6" />}
        />
        <MetricCard
          title="Response Rate"
          value="18.5%"
          change="+3.1%"
          icon={<TrendingUp className="w-6 h-6" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {[
              { lead: 'TechCorp Solutions', action: 'Call scheduled', time: '2 hours ago', type: 'success' },
              { lead: 'Global Marketing Inc', action: 'Email opened', time: '4 hours ago', type: 'info' },
              { lead: 'FinanceHub LLC', action: 'Demo completed', time: '1 day ago', type: 'success' },
              { lead: 'HealthTech Innovations', action: 'New lead generated', time: '1 day ago', type: 'new' },
              { lead: 'RetailPro Systems', action: 'Deal closed - $150K', time: '2 days ago', type: 'closed' }
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'success' ? 'bg-green-500' :
                    activity.type === 'closed' ? 'bg-purple-500' :
                    activity.type === 'new' ? 'bg-blue-500' : 'bg-gray-400'
                  }`} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.lead}</p>
                    <p className="text-xs text-gray-500">{activity.action}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Lead Status Distribution</h2>
          <div className="space-y-3">
            {[
              { status: 'Qualified', count: 234, percentage: 28, color: 'bg-green-500' },
              { status: 'Contacted', count: 312, percentage: 37, color: 'bg-blue-500' },
              { status: 'Nurturing', count: 189, percentage: 22, color: 'bg-yellow-500' },
              { status: 'New', count: 87, percentage: 10, color: 'bg-purple-500' },
              { status: 'Converted', count: 25, percentage: 3, color: 'bg-indigo-500' }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{item.status}</span>
                  <span className="text-sm text-gray-600">{item.count}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${item.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-md p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">AI Agent Performance</h2>
            <p className="text-blue-100">Working 24/7 to generate and qualify leads</p>
          </div>
          <Activity className="w-12 h-12 text-blue-200" />
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div>
            <p className="text-3xl font-bold">1,247</p>
            <p className="text-blue-100 text-sm">Prospects analyzed today</p>
          </div>
          <div>
            <p className="text-3xl font-bold">89</p>
            <p className="text-blue-100 text-sm">Outreach emails sent</p>
          </div>
          <div>
            <p className="text-3xl font-bold">34</p>
            <p className="text-blue-100 text-sm">Follow-ups scheduled</p>
          </div>
        </div>
      </div>
    </div>
  );
}
