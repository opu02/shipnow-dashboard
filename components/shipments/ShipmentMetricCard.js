 import { TrendingUp, TrendingDown } from 'lucide-react';

export default function ShipmentMetricCard({ title, value, change, positive, label, icon }) {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {icon && (
            <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
              <span className="text-[#6C63FF]">{icon}</span>
            </div>
          )}
          <span className="text-xs text-gray-500">{title}</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
          </svg>
        </button>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{value}</h3>
      <div className="flex items-center gap-1.5">
        {positive ? (
          <TrendingUp size={12} className="text-green-500" />
        ) : (
          <TrendingDown size={12} className="text-red-500" />
        )}
        <span className={`text-xs font-medium ${positive ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </span>
        <span className="text-xs text-gray-400">{label}</span>
      </div>
    </div>
  );
}
