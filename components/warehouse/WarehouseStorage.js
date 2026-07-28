 
import { warehouseStorage } from '@/data/warehouse';
import { Filter } from 'lucide-react';

export default function WarehouseStorage() {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Warehouse Storage</h3>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-50">
            <Filter size={12} className="text-gray-400" />
            Filter
          </button>
          <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-600">
            Sort by:
            <select className="outline-none bg-transparent text-xs text-gray-600">
              <option>Section</option>
              <option>Floor</option>
              <option>Category</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="table-th">Floor ↕</th>
              <th className="table-th">Section ↕</th>
              <th className="table-th">Category ↕</th>
              <th className="table-th">Storage Used ↕</th>
              <th className="table-th">Percentage ↕</th>
              <th className="table-th">Available Space ↕</th>
            </tr>
          </thead>
          <tbody>
            {warehouseStorage.map((row, index) => (
              <tr key={index} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="table-td">
                  <span className="text-xs text-gray-700">{row.floor}</span>
                </td>
                <td className="table-td">
                  <span className="text-xs text-gray-700">{row.section}</span>
                </td>
                <td className="table-td">
                  <span className="text-xs text-gray-700">{row.category}</span>
                </td>
                <td className="table-td">
                  <div className="w-32 bg-gray-200 rounded-full h-1.5">
                    <div
                      className="h-1.5 rounded-full bg-[#6C63FF]"
                      style={{ width: `${row.percentage}%` }}
                    />
                  </div>
                </td>
                <td className="table-td">
                  <span className="text-xs text-gray-700">{row.percentage}%</span>
                </td>
                <td className="table-td">
                  <span className="text-xs text-gray-500">{row.available}/{row.total}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}