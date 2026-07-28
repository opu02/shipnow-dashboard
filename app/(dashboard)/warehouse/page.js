 
'use client';

import { useState } from 'react';
import Link from 'next/link';
import WarehouseStats from '@/components/warehouse/WarehouseStats';
import WarehouseInventory from '@/components/warehouse/WarehouseInventory';
import CapacityUsage from '@/components/warehouse/CapacityUsage';
import PackageStatus from '@/components/warehouse/PackageStatus';
import WarehouseStorage from '@/components/warehouse/WarehouseStorage';
import WarehouseMap from '@/components/warehouse/WarehouseMap';
import ActivityLog from '@/components/warehouse/ActivityLog';

const freightTypes = [
  { label: 'Road Freight', icon: '🚛' },
  { label: 'Rail Freight', icon: '🚂' },
  { label: 'Ocean Freight', icon: '🚢' },
  { label: 'Air Freight', icon: '✈️' },
];

export default function WarehousePage() {
  const [activeFreight, setActiveFreight] = useState('Road Freight');

  return (
    <div className="p-4 md:p-6">

      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Warehouse</h1>
          <div className="flex items-center gap-1.5 mt-1">
            <Link href="/dashboard" className="text-xs text-[#6C63FF] hover:underline">
              Dashboard
            </Link>
            <span className="text-xs text-gray-400">/</span>
            <span className="text-xs text-gray-500">Warehouse</span>
          </div>
        </div>

        {/* Freight Type Tabs */}
        <div className="flex items-center gap-2 flex-wrap justify-end">
          {freightTypes.map((type) => (
            <button
              key={type.label}
              onClick={() => setActiveFreight(type.label)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all border
                ${activeFreight === type.label
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
            >
              <span>{type.icon}</span>
              <span className="hidden sm:inline">{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Row 1: Stats + Inventory + Capacity */}
      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-4 mb-4">
        {/* Stats */}
        <div className="md:col-span-1">
          <WarehouseStats />
        </div>

        {/* Warehouse Inventory */}
        <div className="md:col-span-2 xl:col-span-3">
          <WarehouseInventory />
        </div>

        {/* Capacity Usage */}
        <div className="md:col-span-1">
          <CapacityUsage />
        </div>
      </div>

      {/* Row 2: Storage + Package Status */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4">
        <div className="xl:col-span-2">
          <WarehouseStorage />
        </div>
        <div className="xl:col-span-1">
          <PackageStatus />
        </div>
      </div>

      {/* Row 3: Warehouse Map + Activity Log */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2">
          <WarehouseMap />
        </div>
        <div className="xl:col-span-1">
          <ActivityLog />
        </div>
      </div>

    </div>
  );
}