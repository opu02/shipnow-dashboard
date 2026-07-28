 
'use client';

import { useState } from 'react';
import { warehouseMap } from '@/data/warehouse';

export default function WarehouseMap() {
  const [activeFloor, setActiveFloor] = useState('Floor 1');

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Warehouse Map</h3>
        {/* Floor Tabs */}
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          {warehouseMap.floors.map((floor) => (
            <button
              key={floor}
              onClick={() => setActiveFloor(floor)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all
                ${activeFloor === floor
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              {floor}
            </button>
          ))}
        </div>
      </div>

      {/* Sections Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {warehouseMap.sections.map((section, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-3">
            <h4 className="text-xs font-semibold text-gray-700 mb-2">{section.name}</h4>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {section.slots.map((slot) => (
                <div
                  key={slot.id}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-medium border transition-colors
                    ${slot.status === 'full'
                      ? 'bg-[#6C63FF] text-white border-[#6C63FF]'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#6C63FF]'
                    }`}
                >
                  {slot.id}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              Available Space <span className="font-medium text-gray-600">{section.availableSpace}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-100">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-white border border-gray-200" />
          <span className="text-xs text-gray-500">Available</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-gray-300" />
          <span className="text-xs text-gray-500">Full</span>
        </div>
      </div>
    </div>
  );
}