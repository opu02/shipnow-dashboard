 
import { activityLog } from '@/data/warehouse';
import { CheckSquare, Plus, Truck, FileText } from 'lucide-react';

const iconMap = {
  check: CheckSquare,
  plus: Plus,
  truck: Truck,
  file: FileText,
};

export default function ActivityLog() {
  return (
    <div className="card h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Warehouse Activity Log</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        {activityLog.map((log) => {
          const Icon = iconMap[log.icon];
          return (
            <div key={log.id} className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: log.color + '20' }}
              >
                <Icon size={14} style={{ color: log.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-700 leading-relaxed">
                  <span className="font-semibold" style={{ color: log.color }}>
                    {log.user}
                  </span>{' '}
                  {log.action}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{log.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}