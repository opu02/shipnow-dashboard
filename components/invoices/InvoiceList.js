 
'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

const statusClass = {
  'Paid': 'bg-green-100 text-green-700',
  'Unpaid': 'bg-purple-100 text-purple-700',
  'Overdue': 'bg-red-100 text-red-700',
  'Pending': 'bg-yellow-100 text-yellow-700',
};

export default function InvoiceList({ invoices, selectedId, onSelect }) {
  const [search, setSearch] = useState('');

  const filtered = invoices.filter((inv) =>
    inv.id.toLowerCase().includes(search.toLowerCase()) ||
    inv.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Invoices</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-2.5 py-1.5">
            <Search size={12} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search Invoices"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-xs text-gray-600 outline-none w-28 placeholder-gray-400 bg-transparent"
            />
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6"/>
              <line x1="4" y1="12" x2="20" y2="12"/>
              <line x1="4" y1="18" x2="20" y2="18"/>
            </svg>
          </button>
          <button className="flex items-center gap-1 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-gray-800">
            + New Invoice
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto flex-1">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="table-th">
                <div className="flex items-center gap-1">Invoice ID ↕</div>
              </th>
              <th className="table-th hidden md:table-cell">
                <div className="flex items-center gap-1">Company ↕</div>
              </th>
              <th className="table-th hidden lg:table-cell">
                <div className="flex items-center gap-1">Shipping ID ↕</div>
              </th>
              <th className="table-th hidden lg:table-cell">
                <div className="flex items-center gap-1">Date ↕</div>
              </th>
              <th className="table-th">
                <div className="flex items-center gap-1">Amount ↕</div>
              </th>
              <th className="table-th">
                <div className="flex items-center gap-1">Status ↕</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((invoice) => (
              <tr
                key={invoice.id}
                onClick={() => onSelect(invoice)}
                className={`border-b border-gray-50 cursor-pointer transition-colors
                  ${selectedId === invoice.id
                    ? 'bg-purple-50 border-l-2 border-l-[#6C63FF]'
                    : 'hover:bg-gray-50'
                  }`}
              >
                <td className="table-td">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-[#6C63FF]">
                        {invoice.companyInitial}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-[#6C63FF]">{invoice.id}</span>
                  </div>
                </td>
                <td className="table-td hidden md:table-cell">
                  <span className="text-xs text-gray-700">{invoice.company}</span>
                </td>
                <td className="table-td hidden lg:table-cell">
                  <span className="text-xs text-gray-500">{invoice.shipmentId}</span>
                </td>
                <td className="table-td hidden lg:table-cell">
                  <p className="text-xs text-gray-600">{invoice.issuedDate} (Issued)</p>
                  <p className="text-xs text-[#6C63FF]">{invoice.dueDate} (Due)</p>
                </td>
                <td className="table-td">
                  <span className="text-xs font-medium text-gray-800">{invoice.amount}</span>
                </td>
                <td className="table-td">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusClass[invoice.status]}`}>
                    {invoice.status}
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