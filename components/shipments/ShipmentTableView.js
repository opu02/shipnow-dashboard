 'use client';

import { useState } from 'react';
import { Search, Filter, Calendar, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import StatusBadge from './StatusBadge';

const TABS = ['All', 'Completed', 'Delivery', 'Pending'];
const PAGE_SIZES = [12, 24, 48];

export default function ShipmentTableView({ shipments }) {
  const [activeTab, setActiveTab] = useState('All');
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState(null);
  const [sortDir, setSortDir] = useState('asc');
  const [selectedRows, setSelectedRows] = useState([]);
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
    if (!sortField) return 0;
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

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir('asc');
    }
    setPage(1);
  };

  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedRows.length === paginated.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginated.map((s) => s.id));
    }
  };

  const SortIcon = ({ field }) => (
    <ArrowUpDown
      size={10}
      className={`ml-1 ${sortField === field ? 'text-[#6C63FF]' : 'text-gray-400'}`}
    />
  );

  return (
    <div className="card">
      {/* Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
        {/* Tabs */}
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setPage(1); }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all
                ${activeTab === tab
                  ? 'bg-white text-[#6C63FF] shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search + Filter + Date */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2">
            <Search size={13} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search id, company, etc"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="text-xs text-gray-600 outline-none w-40 placeholder-gray-400 bg-transparent"
            />
          </div>
          <button className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-600 hover:bg-gray-50">
            <Filter size={13} className="text-gray-400" />
            Filter
          </button>
          <button className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-600 hover:bg-gray-50">
            <Calendar size={13} className="text-gray-400" />
            This Month
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="table-th w-10">
                <input
                  type="checkbox"
                  checked={selectedRows.length === paginated.length && paginated.length > 0}
                  onChange={toggleAll}
                  className="w-4 h-4 rounded border-gray-300"
                  style={{ accentColor: '#6C63FF' }}
                />
              </th>
              <th className="table-th cursor-pointer" onClick={() => handleSort('id')}>
                <div className="flex items-center">Shipping ID <SortIcon field="id" /></div>
              </th>
              <th className="table-th cursor-pointer" onClick={() => handleSort('company')}>
                <div className="flex items-center">Company <SortIcon field="company" /></div>
              </th>
              <th className="table-th hidden md:table-cell cursor-pointer" onClick={() => handleSort('carrier')}>
                <div className="flex items-center">Carriers <SortIcon field="carrier" /></div>
              </th>
              <th className="table-th hidden lg:table-cell cursor-pointer" onClick={() => handleSort('category')}>
                <div className="flex items-center">Product Category <SortIcon field="category" /></div>
              </th>
              <th className="table-th hidden lg:table-cell cursor-pointer" onClick={() => handleSort('weight')}>
                <div className="flex items-center">Weight <SortIcon field="weight" /></div>
              </th>
              <th className="table-th hidden xl:table-cell cursor-pointer" onClick={() => handleSort('origin')}>
                <div className="flex items-center">Route <SortIcon field="origin" /></div>
              </th>
              <th className="table-th hidden xl:table-cell cursor-pointer" onClick={() => handleSort('originDate')}>
                <div className="flex items-center">Date <SortIcon field="originDate" /></div>
              </th>
              <th className="table-th hidden lg:table-cell cursor-pointer" onClick={() => handleSort('progress')}>
                <div className="flex items-center">Progress <SortIcon field="progress" /></div>
              </th>
              <th className="table-th cursor-pointer" onClick={() => handleSort('status')}>
                <div className="flex items-center">Status <SortIcon field="status" /></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((shipment) => (
              <tr
                key={shipment.id}
                className={`border-b border-gray-50 hover:bg-gray-50 transition-colors
                  ${selectedRows.includes(shipment.id) ? 'bg-purple-50' : ''}`}
              >
                <td className="table-td">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(shipment.id)}
                    onChange={() => toggleRow(shipment.id)}
                    className="w-4 h-4 rounded border-gray-300"
                    style={{ accentColor: '#6C63FF' }}
                  />
                </td>
                <td className="table-td">
                  <p className="text-xs font-medium text-[#6C63FF]">{shipment.id}</p>
                  <p className="text-xs text-gray-400">{shipment.freightType}</p>
                </td>
                <td className="table-td">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-gray-600">
                        {shipment.company.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-800">{shipment.company}</p>
                      <p className="text-xs text-gray-400">{shipment.category}</p>
                    </div>
                  </div>
                </td>
                <td className="table-td hidden md:table-cell">
                  <span className="text-xs text-gray-600">{shipment.carrier}</span>
                </td>
                <td className="table-td hidden lg:table-cell">
                  <span className="text-xs text-gray-600">{shipment.category}</span>
                </td>
                <td className="table-td hidden lg:table-cell">
                  <span className="text-xs text-gray-600">{shipment.weight}</span>
                </td>
                <td className="table-td hidden xl:table-cell">
                  <p className="text-xs text-gray-700">{shipment.origin} <span className="text-gray-400">(Origin)</span></p>
                  <p className="text-xs text-[#6C63FF]">{shipment.destination} <span className="text-gray-400">(Destination)</span></p>
                </td>
                <td className="table-td hidden xl:table-cell">
                  <p className="text-xs text-gray-600">{shipment.originDate} <span className="text-gray-400">(ATD)</span></p>
                  <p className="text-xs text-[#6C63FF]">{shipment.destDate} <span className="text-gray-400">(ETA)</span></p>
                </td>
                <td className="table-td hidden lg:table-cell">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-1.5 w-16">
                      <div
                        className="bg-[#6C63FF] h-1.5 rounded-full"
                        style={{ width: `${shipment.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600">{shipment.progress}%</span>
                  </div>
                </td>
                <td className="table-td">
                  <StatusBadge status={shipment.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-gray-100">
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
            className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
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
                className={`w-7 h-7 flex items-center justify-center rounded-lg text-xs font-medium border border-gray-200 text-gray-600 hover:bg-gray-50`}
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
