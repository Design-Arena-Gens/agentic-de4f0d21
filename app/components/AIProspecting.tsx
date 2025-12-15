'use client';

import { useState } from 'react';
import { Search, Sparkles, Target, Plus, X } from 'lucide-react';

export default function AIProspecting() {
  const [industry, setIndustry] = useState<string[]>([]);
  const [companySize, setCompanySize] = useState<string[]>([]);
  const [location, setLocation] = useState<string[]>([]);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [prospects, setProspects] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [newKeyword, setNewKeyword] = useState('');

  const industryOptions = [
    'Software Development', 'Healthcare', 'Financial Services', 'Marketing & Advertising',
    'Manufacturing', 'Retail', 'Education', 'Real Estate', 'Consulting'
  ];

  const sizeOptions = ['1-20', '20-50', '50-200', '200-500', '500-1000', '1000+'];

  const locationOptions = ['United States', 'United Kingdom', 'Canada', 'Germany', 'Australia'];

  const addKeyword = () => {
    if (newKeyword && !keywords.includes(newKeyword)) {
      setKeywords([...keywords, newKeyword]);
      setNewKeyword('');
    }
  };

  const runProspecting = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/prospect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          industry,
          companySize,
          location,
          keywords
        })
      });
      const data = await response.json();
      setProspects(data.prospects);
    } catch (error) {
      console.error('Prospecting error:', error);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <Sparkles className="w-8 h-8 mr-3 text-blue-600" />
          AI Prospecting Engine
        </h1>
        <p className="text-gray-600 mt-1">Let AI find and score ideal prospects for your business</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Define Target Criteria</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {industryOptions.map(ind => (
                <label key={ind} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={industry.includes(ind)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setIndustry([...industry, ind]);
                      } else {
                        setIndustry(industry.filter(i => i !== ind));
                      }
                    }}
                    className="rounded text-blue-600"
                  />
                  <span className="text-sm text-gray-700">{ind}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Size <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {sizeOptions.map(size => (
                <label key={size} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={companySize.includes(size)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCompanySize([...companySize, size]);
                      } else {
                        setCompanySize(companySize.filter(s => s !== size));
                      }
                    }}
                    className="rounded text-blue-600"
                  />
                  <span className="text-sm text-gray-700">{size}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {locationOptions.map(loc => (
                <label key={loc} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={location.includes(loc)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setLocation([...location, loc]);
                      } else {
                        setLocation(location.filter(l => l !== loc));
                      }
                    }}
                    className="rounded text-blue-600"
                  />
                  <span className="text-sm text-gray-700">{loc}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Keywords (Technologies, Pain Points, etc.)
            </label>
            <div className="flex space-x-2 mb-2">
              <input
                type="text"
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addKeyword()}
                placeholder="e.g., 'scaling challenges', 'automation'"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={addKeyword}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {keywords.map((kw, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                  <span>{kw}</span>
                  <button
                    onClick={() => setKeywords(keywords.filter((_, i) => i !== idx))}
                    className="hover:text-blue-900"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={runProspecting}
            disabled={loading || industry.length === 0 || companySize.length === 0}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                AI Analyzing Prospects...
              </>
            ) : (
              <>
                <Search className="w-5 h-5 mr-2" />
                Find Prospects with AI
              </>
            )}
          </button>
        </div>
      </div>

      {prospects.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Target className="w-6 h-6 mr-2 text-green-600" />
            AI-Generated Prospects ({prospects.length})
          </h2>

          <div className="space-y-4">
            {prospects.map((prospect, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{prospect.companyName}</h3>
                    <p className="text-sm text-gray-600 mt-1">{prospect.contactName} • {prospect.email}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm text-gray-500">{prospect.industry}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{prospect.companySize} employees</span>
                    </div>
                    <div className="mt-3 bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">AI Insight:</span> {prospect.reason}
                      </p>
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <div className="text-2xl font-bold text-green-600">{prospect.score}</div>
                    <div className="text-xs text-gray-500">Lead Score</div>
                    <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                      Add to Pipeline
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
