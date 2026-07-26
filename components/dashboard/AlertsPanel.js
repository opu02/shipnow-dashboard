 import { shipmentAlerts } from '@/data/dashboard';
import { AlertTriangle, MapPin, Cloud, ExternalLink } from 'lucide-react';

const iconMap = {
  customs: <AlertTriangle size={14} className="text-orange-500" />,
  address: <MapPin size={14} className="text-red-500" />,
  weather: <Cloud size={14} className="text-blue-500" />,
};

export default function AlertsPanel() {
  return (
    <div className="card h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Shipment Alerts</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
          </svg>
        </button>
      </div>

      {/* Total delays */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold text-gray-900">{shipmentAlerts.total}</span>
        <span className="text-sm text-gray-500">Delays Detected</span>
      </div>

      {/* Alert type cards */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-purple-50 rounded-xl p-3 text-center">
          <p className="text-xl font-bold text-[#6C63FF]">{shipmentAlerts.customsClearance}</p>
          <p className="text-xs text-gray-500 mt-1 leading-tight">Customs Clearance Delay</p>
        </div>
        <div className="bg-red-50 rounded-xl p-3 text-center">
          <p className="text-xl font-bold text-red-500">{shipmentAlerts.incorrectAddress}</p>
          <p className="text-xs text-gray-500 mt-1 leading-tight">Incorrect Address Provided</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-3 text-center">
          <p className="text-xl font-bold text-blue-500">{shipmentAlerts.weatherRelated}</p>
          <p className="text-xs text-gray-500 mt-1 leading-tight">Weather Related Hold</p>
        </div>
      </div>

      {/* Alert list */}
      <div className="space-y-2">
        {shipmentAlerts.items.map((alert) => (
          <div key={alert.id} className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              {iconMap[alert.icon]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-800">{alert.type}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-xs text-[#6C63FF] font-medium">{alert.shipmentId}</span>
                <span className="text-xs text-gray-400">·</span>
                <span className="text-xs text-gray-400">{alert.carrier}</span>
                <span className="text-xs text-gray-400">·</span>
                <span className="text-xs text-gray-400">{alert.date}</span>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
              <ExternalLink size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
