 import { productCategories } from '@/data/dashboard';

export default function ProductCategories() {
  return (
    <div className="card h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Product Categories</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
          </svg>
        </button>
      </div>

      {/* Total */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-gray-500">Total Products</span>
        <span className="text-2xl font-bold text-gray-900">1,000</span>
      </div>

      {/* Stacked bar */}
      <div className="flex rounded-lg overflow-hidden h-8 mb-4 gap-0.5">
        {productCategories.map((cat, index) => (
          <div
            key={index}
            style={{
              width: `${cat.percentage}%`,
              backgroundColor: cat.color,
            }}
            title={`${cat.name}: ${cat.percentage}%`}
          />
        ))}
      </div>

      {/* List */}
      <div className="space-y-2.5">
        {productCategories.map((cat, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: cat.color }}
              />
              <span className="text-xs text-gray-700">{cat.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500">{cat.products} products</span>
              <span className="text-xs font-semibold text-gray-700 w-8 text-right">
                {cat.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
