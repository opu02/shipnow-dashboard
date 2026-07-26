 'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { shipmentTypeData } from '@/data/dashboard';

export default function ShipmentTypeChart() {
  const total = 2500;

  return (
    <div className="card h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Shipment Type</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
          </svg>
        </button>
      </div>

      {/* Donut Chart */}
      <div className="relative flex justify-center items-center mb-4" style={{ height: '160px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={shipmentTypeData}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={75}
              paddingAngle={2}
              dataKey="value"
            >
              {shipmentTypeData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [`${value}%`, '']}
              contentStyle={{ fontSize: '12px' }}
            />
          </PieChart>
        </ResponsiveContainer>
        {/* Center text */}
        <div className="absolute text-center pointer-events-none">
          <p className="text-xs text-gray-500">Total Shipment</p>
          <p className="text-2xl font-bold text-gray-900">{total.toLocaleString()}</p>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-2">
        {shipmentTypeData.map((item, index) => (
          <div key={index} className="flex items-start gap-2 p-2 bg-gray-50 rounded-lg">
            <div
              className="w-3 h-3 rounded-sm flex-shrink-0 mt-0.5"
              style={{ backgroundColor: item.color }}
            />
            <div>
              <p className="text-xs font-semibold text-gray-700">{item.value}%</p>
              <p className="text-xs text-gray-500">{item.name}</p>
              <p className="text-xs text-gray-400">{item.count.toLocaleString()} shipment</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
