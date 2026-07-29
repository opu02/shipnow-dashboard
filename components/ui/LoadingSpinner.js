 
export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-96 p-6">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
        <div className="absolute inset-0 rounded-full border-4 border-[#6C63FF] border-t-transparent animate-spin" />
      </div>
      <p className="text-xs text-gray-400 mt-4">Loading...</p>
    </div>
  );
}