 'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Package, Clock, Truck, CheckCircle, Plus } from 'lucide-react';
import ShipmentMetricCard from '@/components/shipments/ShipmentMetricCard';
import ShipmentTableView from '@/components/shipments/ShipmentTableView';
import ShipmentGridView from '@/components/shipments/ShipmentGridView';
import ViewSwitcher from '@/components/shipments/ViewSwitcher';
import { shipmentsData, shipmentMetrics } from '@/data/shipments';

function ShipmentsContent() {
  const searchParams = useSearchParams();
  const view = searchParams.get('view') || 'table';

  return (
    <div className="p-4 md:p-6">

      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Shipments</h1>
          <div className="flex items-center gap-1.5 mt-1">
            <Link href="/dashboard" className="text-xs text-[#6C63FF] hover:underline">
              Dashboard
            </Link>
            <span className="text-xs text-gray-400">/</span>
            <span className="text-xs text-gray-500">Shipments</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* View Switcher */}
          <ViewSwitcher />

          {/* New Shipment Button */}
          <Link
            href="/shipments/new"
            className="flex items-center gap-1.5 bg-gray-900 text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Plus size={14} />
            New Shipment
          </Link>
        </div>
      </div>

      {/* Metric Cards — only in table view */}
      {view === 'table' && (
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-5">
          <ShipmentMetricCard
            title="Total Shipments"
            value={shipmentMetrics.totalShipments.value}
            change={shipmentMetrics.totalShipments.change}
            positive={shipmentMetrics.totalShipments.positive}
            label={shipmentMetrics.totalShipments.label}
            icon={<Package size={16} />}
          />
          <ShipmentMetricCard
            title="Pending"
            value={shipmentMetrics.pending.value}
            change={shipmentMetrics.pending.change}
            positive={shipmentMetrics.pending.positive}
            label={shipmentMetrics.pending.label}
            icon={<Clock size={16} />}
          />
          <ShipmentMetricCard
            title="Delivery"
            value={shipmentMetrics.delivery.value}
            change={shipmentMetrics.delivery.change}
            positive={shipmentMetrics.delivery.positive}
            label={shipmentMetrics.delivery.label}
            icon={<Truck size={16} />}
          />
          <ShipmentMetricCard
            title="Completed"
            value={shipmentMetrics.completed.value}
            change={shipmentMetrics.completed.change}
            positive={shipmentMetrics.completed.positive}
            label={shipmentMetrics.completed.label}
            icon={<CheckCircle size={16} />}
          />
        </div>
      )}

      {/* Table or Grid View */}
      {view === 'table' ? (
        <ShipmentTableView shipments={shipmentsData} />
      ) : (
        <ShipmentGridView shipments={shipmentsData} />
      )}

    </div>
  );
}

export default function ShipmentsPage() {
  return (
    <Suspense fallback={<div className="p-6 text-sm text-gray-500">Loading...</div>}>
      <ShipmentsContent />
    </Suspense>
  );
}
