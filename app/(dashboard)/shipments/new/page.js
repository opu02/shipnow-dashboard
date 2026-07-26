 import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import CreateShipmentForm from '@/components/create-shipment/CreateShipmentForm';

export default function CreateShipmentPage() {
  return (
    <div className="p-4 md:p-6">

      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <Link
          href="/shipments"
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={18} className="text-gray-600" />
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Create New Shipment</h1>
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 mb-6 ml-9">
        <Link href="/dashboard" className="text-xs text-[#6C63FF] hover:underline">
          Dashboard
        </Link>
        <span className="text-xs text-gray-400">/</span>
        <Link href="/shipments" className="text-xs text-[#6C63FF] hover:underline">
          Shipments
        </Link>
        <span className="text-xs text-gray-400">/</span>
        <span className="text-xs text-gray-500">Create New Shipment</span>
      </div>

      {/* Form */}
      <CreateShipmentForm />

    </div>
  );
}
