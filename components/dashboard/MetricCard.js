 export default function MetricCard({ title, value, label, change, changeLabel, positive, icon }) {
  return (
    <div className="card flex items-start justify-between">
      <div>
        <p className="text-xs text-gray-500 mb-1">{title}</p>
        <div className="flex items-baseline gap-1.5">
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
          {label && <span className="text-xs text-gray-500">{label}</span>}
        </div>
        <div className="flex items-center gap-1 mt-1.5">
          <span className={`text-xs font-medium ${positive ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </span>
          <span className="text-xs text-gray-400">{changeLabel}</span>
        </div>
      </div>
      {icon && (
        <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
          <span className="text-[#6C63FF]">{icon}</span>
        </div>
      )}
    </div>
  );
}
