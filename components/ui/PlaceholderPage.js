 
import { Construction } from 'lucide-react';

export default function PlaceholderPage({ title, description }) {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-96 p-6">
      <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-4">
        <Construction size={32} className="text-[#6C63FF]" />
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-500 text-center max-w-sm">
        {description || 'This page is coming soon. Check back later!'}
      </p>
    </div>
  );
}