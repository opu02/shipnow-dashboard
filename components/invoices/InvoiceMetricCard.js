 export default function InvoiceMetricCard({ title, value, label, icon, color }) {
  return (
    <div className="card flex items-center gap-4">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: color + '20' }}
      >
        <span style={{ color }}>{icon}</span>
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">{title}</p>
        <h3 className="text-xl font-bold text-gray-900">{value}</h3>
        <p className="text-xs text-gray-400 mt-0.5">{label}</p>
      </div>
    </div>
  );
}
