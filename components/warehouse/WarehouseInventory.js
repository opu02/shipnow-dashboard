 'use client';

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { warehouseInventory } from '@/data/warehouse';

export default function WarehouseInventory() {
  return (
    <div className="card h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Warehouse Inventory</h3>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-2xl font-bold text-gray-900">
              {warehouseInventory.total.toLocaleString()}
            </span>
            <span className="text-xs text-gray-400">packages</span>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
          </svg>
        </button>
      </div>

      {/* Bar Chart */}
      <div style={{ height: '160px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={warehouseInventory.categories}
            barSize={32}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
          >
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10, fill: '#9CA3AF' }}
              axisLine={false}
              tickLine={false}
              interval={0}
              tickFormatter={(v) => v.split(' ')[0]}
            />
            <YAxis hide />
            <Tooltip
              formatter={(value, name, props) => [
                `${props.payload.percentage}% (${props.payload.count.toLocaleString()})`,
                props.payload.name
              ]}
              contentStyle={{ fontSize: '12px', borderRadius: '8px' }}
            />
            <Bar dataKey="count" radius={[4, 4, 0, 0]}>
              {warehouseInventory.categories.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-3 gap-2 mt-3">
        {warehouseInventory.categories.map((cat, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
              style={{ backgroundColor: cat.color }}
            />
            <div>
              <p className="text-xs font-medium text-gray-700">{cat.percentage}%</p>
              <p className="text-xs text-gray-400">{cat.count.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
