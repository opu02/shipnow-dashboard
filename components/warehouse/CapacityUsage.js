 'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { capacityData } from '@/data/warehouse';

export default function CapacityUsage() {
  const data = [
    { name: 'Used', value: capacityData.totalUsage },
    { name: 'Empty', value: 100 - capacityData.totalUsage },
  ];

  return (
    <div className="card h-full bg-[#13131A] text-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-white">Capacity Usage</h3>
        <button className="text-gray-400 hover:text-gray-300">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
          </svg>
        </button>
      </div>

      {/* Donut Chart */}
      <div className="relative flex justify-center items-center" style={{ height: '180px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              strokeWidth={0}
            >
              <Cell fill="#6C63FF" />
              <Cell fill="#2A2A3D" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* Center text */}
        <div className="absolute text-center pointer-events-none">
          <p className="text-xs text-gray-400">Total Usage</p>
          <p className="text-3xl font-bold text-white">{capacityData.totalUsage}%</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-between mt-4 pt-4 border-t border-[#2A2A3D]">
        <div className="text-center">
          <p className="text-xl font-bold text-white">{capacityData.loaded}</p>
          <p className="text-xs text-gray-400 mt-0.5">Loaded</p>
          <p className="text-xs text-gray-400">shelves</p>
        </div>
        <div className="w-px bg-[#2A2A3D]" />
        <div className="text-center">
          <p className="text-xl font-bold text-white">{capacityData.empty}</p>
          <p className="text-xs text-gray-400 mt-0.5">Empty</p>
          <p className="text-xs text-gray-400">shelves</p>
        </div>
      </div>
    </div>
  );
}
