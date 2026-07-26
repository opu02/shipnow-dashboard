 
'use client';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import { shipmentStatisticData } from '@/data/dashboard';

export default function ShipmentStatChart() {
  const activeIndex = 4; // May - highlighted bar

  return (
    <div className="card h-full">
      <div className="flex items-center justify-between mb-1">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Shipment Statistic</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-2xl font-bold text-gray-900">4,352</span>
            <span className="text-xs text-green-500 font-medium bg-green-50 px-1.5 py-0.5 rounded-full">
              +8.7%
            </span>
          </div>
        </div>
        <select className="text-xs text-gray-600 border border-gray-200 rounded-lg px-2 py-1.5 outline-none bg-white">
          <option>Last Year</option>
          <option>Last Month</option>
          <option>Last Week</option>
        </select>
      </div>

      <div style={{ height: '160px' }} className="mt-3">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={shipmentStatisticData} barSize={20} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
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
              tickFormatter={(v) => `${v / 1000}K`}
            />
            <Tooltip
              formatter={(value) => [value.toLocaleString(), 'Shipments']}
              contentStyle={{ fontSize: '12px', borderRadius: '8px', border: '1px solid #E5E7EB' }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {shipmentStatisticData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={index === activeIndex ? '#6C63FF' : '#E5E7EB'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}