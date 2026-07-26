 import StatusBadge from './StatusBadge';

export default function ShipmentCard({ shipment }) {
  return (
    <div className="card hover:shadow-md transition-shadow cursor-pointer">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs font-bold text-[#6C63FF]">{shipment.id}</p>
          <p className="text-xs text-gray-400">{shipment.freightType}</p>
        </div>
        <StatusBadge status={shipment.status} />
      </div>

      {/* Company */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-bold text-gray-600">
            {shipment.company.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-800">{shipment.company}</p>
          <p className="text-xs text-gray-400">{shipment.category}</p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-xs text-gray-400">Carrier</p>
          <p className="text-xs font-medium text-gray-700">{shipment.carrier}</p>
        </div>
      </div>

      {/* Route */}
      <div className="bg-gray-50 rounded-lg p-2.5 mb-3">
        <div className="flex justify-between mb-1.5">
          <div>
            <p className="text-xs font-medium text-gray-700">{shipment.origin}</p>
            <p className="text-xs text-gray-400">{shipment.originDate}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium text-[#6C63FF]">{shipment.destination}</p>
            <p className="text-xs text-gray-400">{shipment.destDate}</p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex-1 bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-[#6C63FF] h-1.5 rounded-full transition-all"
              style={{ width: `${shipment.progress}%` }}
            />
          </div>
          <span className="text-xs text-gray-500 font-medium">{shipment.progress}%</span>
        </div>
      </div>

      {/* Weight */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">Weight</span>
        <span className="text-xs font-medium text-gray-700">{shipment.weight}</span>
      </div>
    </div>
  );
}
