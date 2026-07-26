 import { trackingData } from '@/data/dashboard';

export default function TrackingPanel() {
  return (
    <div className="card h-full">
      {/* Search */}
      <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 mb-3">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          type="text"
          placeholder="Search by Shipping ID..."
          className="text-xs text-gray-600 outline-none flex-1 bg-transparent placeholder-gray-400"
        />
      </div>

      {/* Map placeholder */}
      <div className="relative rounded-xl overflow-hidden mb-3 bg-gray-100" style={{ height: '160px' }}>
        {/* Static map background */}
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
          {/* Grid lines to simulate map */}
          <svg width="100%" height="100%" className="absolute inset-0 opacity-20">
            {[...Array(8)].map((_, i) => (
              <line key={`h${i}`} x1="0" y1={`${i * 14}%`} x2="100%" y2={`${i * 14}%`} stroke="#6B7280" strokeWidth="0.5" />
            ))}
            {[...Array(12)].map((_, i) => (
              <line key={`v${i}`} x1={`${i * 9}%`} y1="0" x2={`${i * 9}%`} y2="100%" stroke="#6B7280" strokeWidth="0.5" />
            ))}
          </svg>

          {/* Route line */}
          <svg width="100%" height="100%" className="absolute inset-0">
            <path
              d="M 60 120 Q 200 40 340 80"
              stroke="#1F2937"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 180 70 Q 260 55 340 80"
              stroke="#6C63FF"
              strokeWidth="2.5"
              fill="none"
            />
            {/* Origin dot */}
            <circle cx="60" cy="120" r="5" fill="#1F2937" />
            {/* Destination dot */}
            <circle cx="340" cy="80" r="5" fill="#1F2937" />
            {/* Truck icon position */}
            <circle cx="220" cy="58" r="10" fill="#6C63FF" />
          </svg>

          {/* Truck emoji at progress point */}
          <div className="absolute text-white text-xs font-bold" style={{ left: '52%', top: '28%', transform: 'translate(-50%, -50%)' }}>
            ✈
          </div>

          {/* Zoom controls */}
          <div className="absolute top-2 right-2 flex flex-col gap-1">
            <button className="w-6 h-6 bg-white rounded shadow text-gray-600 text-xs font-bold flex items-center justify-center hover:bg-gray-50">+</button>
            <button className="w-6 h-6 bg-white rounded shadow text-gray-600 text-xs font-bold flex items-center justify-center hover:bg-gray-50">-</button>
          </div>
        </div>
      </div>

      {/* Shipment info */}
      <div className="bg-gray-50 rounded-xl p-3">
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-bold text-gray-900">{trackingData.shipmentId}</span>
              <span className="badge-transit">{trackingData.status}</span>
            </div>
            <p className="text-xs text-gray-500">{trackingData.schedule}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Courier</p>
            <p className="text-xs font-semibold text-gray-800">{trackingData.courier}</p>
            <p className="text-xs text-gray-400">{trackingData.courierCompany}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative mb-2">
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-[#6C63FF] h-1.5 rounded-full"
              style={{ width: `${trackingData.progress}%` }}
            />
          </div>
          <div
            className="absolute -top-1 w-3.5 h-3.5 bg-[#6C63FF] rounded-full border-2 border-white shadow"
            style={{ left: `${trackingData.progress}%`, transform: 'translateX(-50%)' }}
          />
        </div>

        {/* Origin & Destination */}
        <div className="flex justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-800">{trackingData.origin}</p>
            <p className="text-xs text-gray-400">{trackingData.originDate}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold text-gray-800">{trackingData.destination}</p>
            <p className="text-xs text-gray-400">{trackingData.destinationDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
