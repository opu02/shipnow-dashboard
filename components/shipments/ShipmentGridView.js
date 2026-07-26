 'use client';

import { useState } from 'react';
import { Search, Filter, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import ShipmentCard from './ShipmentCard';

const TABS = ['All', 'Completed', 'Delivery', 'Pending'];
const PAGE_SIZES = [12, 24, 48];

export default function ShipmentGridView({ shipments }) {
  const [activeTab, setActiveTab] = useState('All');
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState('id');
  const [sortDir, setSortDir] = useState('asc');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  // Filter by tab
  const tabFiltered = shipments.filter((s) => {
    if (activeTab === 'All') return true;
    return s.status === activeTab;
  });

  // Filter by search
  const searched = tabFiltered.filter((s) =>
    s.id.toLowerCase().includes(search.toLowerCase()) ||
    s.company.toLowerCase().includes(search.toLowerCase()) ||
    s.category.toLowerCase().includes(search.toLowerCase())
  );

  // Sort
  const sorted = [...searched].sort((a, b) => {
    const aVal = a[sortField] || '';
    const bVal = b[sortField] || '';
    return sortDir === 'asc'
      ? aVal.toString().localeCompare(bVal.toString())
      : bVal.toString().localeCompare(aVal.toString());
  });

  // Pagination
  const total = sorted.length;
  const totalPages = Math.ceil(total / pageSize);
  const paginated = sorted.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div>
      {/* Toolbar */}
      <div className="card mb-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Status chips */}
          <div className="flex items-center gap-1 flex-wrap">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setPage(1); }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all
                  ${activeTab === tab
                    ? 'bg-[#6C63FF] text-white'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search + Filter + Sort */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2">
              <Search size={13} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search shipment..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="text-xs text-gray-600 outline-none w-32 placeholder-gray-400 bg-transparent"
              />
            </div>
            <button className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-600 hover:bg-gray-50">
              <Filter size={13} className="text-gray-400" />
              Filter
            </button>
            <select
              value={sortField}
              onChange={(e) => setSortField(e.target.value)}
              className="text-xs border border-gray-200 rounded-lg px-2 py-2 outline-none bg-white text-gray-600"
            >
              <option value="id">Sort by ID</option>
              <option value="company">Sort by Company</option>
              <option value="status">Sort by Status</option>
              <option value="progress">Sort by Progress</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
        {paginated.map((shipment) => (
          <ShipmentCard key={shipment.id} shipment={shipment} />
        ))}
      </div>

      {/* Pagination */}
      <div className="card">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Show</span>
            <select
              value={pageSize}
              onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
              className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 outline-none bg-white text-gray-600"
            >
              {PAGE_SIZES.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
            <span className="text-xs text-gray-500">of {total} results</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40"
            >
              <ChevronLeft size={14} />
            </button>

            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  className={`w-7 h-7 flex items-center justify-center rounded-lg text-xs font-medium transition-all
                    ${page === pageNum
                      ? 'bg-[#6C63FF] text-white'
                      : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {totalPages > 5 && (
              <>
                <span className="text-gray-400 text-xs px-1">...</span>
                <button
                  onClick={() => setPage(totalPages)}
                  className="w-7 h-7 flex items-center justify-center rounded-lg text-xs font-medium border border-gray-200 text-gray-600 hover:bg-gray-50"
                >
                  {totalPages}
                </button>
              </>
            )}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
