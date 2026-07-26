 'use client';

import { useState } from 'react';
import { recentShipments } from '@/data/dashboard';
import { Search, ArrowUpDown } from 'lucide-react';

const statusClass = {
  'In Transit': 'badge-transit',
  'Out for Delivery': 'badge-outfordelivery',
  'Delivered': 'badge-delivered',
  'Processing': 'badge-processing',
};

export default function RecentShipments() {
  const [search, setSearch] = useState('');

  const filtered = recentShipments.filter((s) =>
    s.id.toLowerCase().includes(search.toLowerCase()) ||
    s.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Recent Shipments</h3>
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-2.5 py-1.5">
            <Search size={12} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search shipment..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-xs text-gray-600 outline-none w-32 placeholder-gray-400 bg-transparent"
            />
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="table-th">
                <div className="flex items-center gap-1">
                  Shipping ID <ArrowUpDown size={10} className="text-gray-400" />
                </div>
              </th>
              <th className="table-th">
                <div className="flex items-center gap-1">
                  Company <ArrowUpDown size={10} className="text-gray-400" />
                </div>
              </th>
              <th className="table-th hidden md:table-cell">
                <div className="flex items-center gap-1">
                  Carriers <ArrowUpDown size={10} className="text-gray-400" />
                </div>
              </th>
              <th className="table-th hidden lg:table-cell">
                <div className="flex items-center gap-1">
                  Route <ArrowUpDown size={10} className="text-gray-400" />
                </div>
              </th>
              <th className="table-th hidden lg:table-cell">
                <div className="flex items-center gap-1">
                  Shipping Date <ArrowUpDown size={10} className="text-gray-400" />
                </div>
              </th>
              <th className="table-th">
                <div className="flex items-center gap-1">
                  Status <ArrowUpDown size={10} className="text-gray-400" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((shipment) => (
              <tr key={shipment.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="table-td">
                  <span className="text-[#6C63FF] font-medium text-xs">{shipment.id}</span>
                </td>
                <td className="table-td">
                  <p className="text-xs font-medium text-gray-800">{shipment.company}</p>
                  <p className="text-xs text-gray-400">{shipment.category}</p>
                </td>
                <td className="table-td hidden md:table-cell">
                  <span className="text-xs text-gray-600">{shipment.carrier}</span>
                </td>
                <td className="table-td hidden lg:table-cell">
                  <span className="text-xs text-gray-600">{shipment.route}</span>
                </td>
                <td className="table-td hidden lg:table-cell">
                  <span className="text-xs text-gray-600">{shipment.date}</span>
                </td>
                <td className="table-td">
                  <span className={statusClass[shipment.status]}>
                    {shipment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
