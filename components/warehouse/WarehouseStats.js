 import { warehouseStats } from '@/data/warehouse';
import { TrendingUp } from 'lucide-react';

export default function WarehouseStats() {
  return (
    <div className="flex flex-col gap-3">
      {/* Total SKU */}
      <div className="card">
        <p className="text-xs text-gray-500 mb-1">Total SKU</p>
        <h3 className="text-2xl font-bold text-gray-900">{warehouseStats.totalSKU.value}</h3>
        <div className="flex items-center gap-1 mt-1">
          <TrendingUp size={12} className="text-green-500" />
          <span className="text-xs text-green-500 font-medium">{warehouseStats.totalSKU.change}</span>
        </div>
      </div>

      {/* Quantity on Hand */}
      <div className="card">
        <p className="text-xs text-gray-500 mb-1">Quantity on Hand</p>
        <div className="flex items-baseline gap-1">
          <h3 className="text-2xl font-bold text-gray-900">{warehouseStats.quantityOnHand.value}</h3>
          <span className="text-xs text-gray-400">{warehouseStats.quantityOnHand.unit}</span>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <TrendingUp size={12} className="text-green-500" />
          <span className="text-xs text-green-500 font-medium">{warehouseStats.quantityOnHand.change}</span>
        </div>
      </div>

      {/* Capacity Usage */}
      <div className="card">
        <p className="text-xs text-gray-500 mb-1">Capacity Usage</p>
        <div className="flex items-baseline gap-1">
          <h3 className="text-2xl font-bold text-gray-900">{warehouseStats.capacityUsage.value}</h3>
          <span className="text-xs text-gray-400">{warehouseStats.capacityUsage.label}</span>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <TrendingUp size={12} className="text-green-500" />
          <span className="text-xs text-green-500 font-medium">{warehouseStats.capacityUsage.change}</span>
        </div>
      </div>
    </div>
  );
}
