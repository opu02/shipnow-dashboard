 'use client';

import { useState } from 'react';
import { packageStatusData } from '@/data/warehouse';
import { Package } from 'lucide-react';

const tabs = ['All', 'Expected', 'Received', 'Sent'];

const statusClass = {
  'Sent': 'bg-purple-100 text-purple-700',
  'Received': 'bg-green-100 text-green-700',
  'Expected': 'bg-gray-100 text-gray-600',
};

export default function PackageStatus() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = packageStatusData.filter((pkg) => {
    if (activeTab === 'All') return true;
    return pkg.status === activeTab;
  });

  return (
    <div className="card h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Package Status</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-all
              ${activeTab === tab
                ? 'bg-white text-gray-800 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Package List */}
      <div className="space-y-3">
        {filtered.map((pkg) => (
          <div key={pkg.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
              <Package size={16} className="text-[#6C63FF]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-800">{pkg.id}</p>
              <p className="text-xs text-gray-400 mt-0.5">{pkg.date}</p>
            </div>
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full flex-shrink-0 ${statusClass[pkg.status]}`}>
              {pkg.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
