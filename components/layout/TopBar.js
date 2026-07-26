 'use client';

import { useState } from 'react';
import { Search, Plus, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function TopBar({ onMenuClick }) {
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname.includes('dashboard')) return 'Dashboard';
    if (pathname.includes('shipments')) return 'Shipments';
    if (pathname.includes('invoices')) return 'Invoices & Billing';
    if (pathname.includes('warehouse')) return 'Warehouse';
    if (pathname.includes('analytics')) return 'Analytics';
    if (pathname.includes('calendar')) return 'Calendar';
    if (pathname.includes('tracking')) return 'Tracking';
    if (pathname.includes('fleets')) return 'Fleets';
    if (pathname.includes('drivers')) return 'Drivers';
    return 'Dashboard';
  };

  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 flex-shrink-0">
      {/* Left - Mobile menu + Page title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="md:hidden p-1.5 rounded-lg text-gray-500 hover:bg-gray-100"
        >
          <Menu size={20} />
        </button>
        <span className="md:hidden font-semibold text-gray-800 text-sm">
          {getPageTitle()}
        </span>
      </div>

      {/* Right - Search + Button */}
      <div className="flex items-center gap-3 ml-auto">
        {/* Search - hidden on mobile */}
        <div className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 w-52">
          <Search size={14} className="text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search anything"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-sm text-gray-600 outline-none w-full placeholder-gray-400"
          />
        </div>

        {/* Add New Shipping button */}
        <button className="flex items-center gap-1.5 bg-gray-900 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          <Plus size={14} />
          <span className="hidden md:inline">Add New Shipping</span>
        </button>
      </div>
    </header>
  );
}
