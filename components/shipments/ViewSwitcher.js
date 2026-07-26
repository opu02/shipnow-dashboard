 'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { LayoutList, LayoutGrid } from 'lucide-react';

export default function ViewSwitcher() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentView = searchParams.get('view') || 'table';

  const switchView = (view) => {
    router.push(`/shipments?view=${view}`, { scroll: false });
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1 gap-1">
      <button
        onClick={() => switchView('table')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all
          ${currentView === 'table'
            ? 'bg-white text-[#6C63FF] shadow-sm'
            : 'text-gray-500 hover:text-gray-700'
          }`}
        title="Table View"
      >
        <LayoutList size={14} />
        <span className="hidden sm:inline">Table</span>
      </button>
      <button
        onClick={() => switchView('grid')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all
          ${currentView === 'grid'
            ? 'bg-white text-[#6C63FF] shadow-sm'
            : 'text-gray-500 hover:text-gray-700'
          }`}
        title="Grid View"
      >
        <LayoutGrid size={14} />
        <span className="hidden sm:inline">Grid</span>
      </button>
    </div>
  );
}
