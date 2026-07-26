 'use client';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { profitSummaryData } from '@/data/dashboard';

export default function ProfitSummaryChart() {
  return (
    <div className="card h-full">
      <div className="flex items-center justify-between mb-1">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Profit Summary</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-2xl font-bold text-gray-900">$624,550</span>
            <span className="text-xs text-green-500 font-medium bg-green-50 px-1.5 py-0.5 rounded-full">
              +5.62%
            </span>
          </div>
        </div>
        <select className="text-xs text-gray-600 border border-gray-200 rounded-lg px-2 py-1.5 outline-none bg-white">
          <option>Last 8 Months</option>
          <option>Last 6 Months</option>
          <option>Last Year</option>
        </select>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-2 mb-3">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#6C63FF]" />
          <span className="text-xs text-gray-500">Revenue</span>
          <span className="text-xs font-semibold text-gray-700">$87,524</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1F2937]" />
          <span className="text-xs text-gray-500">Cost</span>
          <span className="text-xs font-semibold text-gray-700">$45,880</span>
        </div>
      </div>

      <div style={{ height: '150px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={profitSummaryData}
            barSize={10}
            barGap={2}
            margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 10, fill: '#9CA3AF' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 10, fill: '#9CA3AF' }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `$${v / 1000}K`}
            />
            <Tooltip
              formatter={(value, name) => [`$${value.toLocaleString()}`, name === 'revenue' ? 'Revenue' : 'Cost']}
              contentStyle={{ fontSize: '12px', borderRadius: '8px', border: '1px solid #E5E7EB' }}
            />
            <Bar dataKey="revenue" fill="#6C63FF" radius={[4, 4, 0, 0]} />
            <Bar dataKey="cost" fill="#1F2937" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
