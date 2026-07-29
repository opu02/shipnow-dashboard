 
import { SearchX } from 'lucide-react';

export default function EmptyState({ title = 'No results found', description = 'Try adjusting your search or filter.' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-4">
        <SearchX size={28} className="text-[#6C63FF]" />
      </div>
      <h3 className="text-sm font-semibold text-gray-700 mb-1">{title}</h3>
      <p className="text-xs text-gray-400 text-center max-w-xs">{description}</p>
    </div>
  );
}