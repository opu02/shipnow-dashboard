'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, Clock, AlertCircle } from 'lucide-react';
import InvoiceMetricCard from '@/components/invoices/InvoiceMetricCard';
import InvoiceList from '@/components/invoices/InvoiceList';
import InvoiceDetail from '@/components/invoices/InvoiceDetail';
import { invoicesData, invoiceMetrics } from '@/data/invoices';

export default function InvoicesPage() {
  const [selectedInvoice, setSelectedInvoice] = useState(invoicesData[7]);
  const [showDetail, setShowDetail] = useState(false);

  const handleSelect = (invoice) => {
    setSelectedInvoice(invoice);
    setShowDetail(true);
  };

  return (
    <div className="p-4 md:p-6">

      {/* Header */}
      <div className="mb-5">
        <h1 className="text-xl font-bold text-gray-900">Invoices & Billing</h1>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="text-xs text-[#6C63FF]">Dashboard</span>
          <span className="text-xs text-gray-400">/</span>
          <span className="text-xs text-gray-500">Invoices & Billing</span>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-5">
        <InvoiceMetricCard
          title="Paid Invoices"
          value={invoiceMetrics.paid.value}
          label={invoiceMetrics.paid.label}
          color="#10B981"
          icon={<CheckCircle size={18} />}
        />
        <InvoiceMetricCard
          title="Unpaid Invoices"
          value={invoiceMetrics.unpaid.value}
          label={invoiceMetrics.unpaid.label}
          color="#6C63FF"
          icon={<XCircle size={18} />}
        />
        <InvoiceMetricCard
          title="Pending Invoices"
          value={invoiceMetrics.pending.value}
          label={invoiceMetrics.pending.label}
          color="#F59E0B"
          icon={<Clock size={18} />}
        />
        <InvoiceMetricCard
          title="Overdue Invoices"
          value={invoiceMetrics.overdue.value}
          label={invoiceMetrics.overdue.label}
          color="#EF4444"
          icon={<AlertCircle size={18} />}
        />
      </div>

      {/* Master Detail Layout */}
      {/* Mobile/Tablet: show list OR detail */}
      {/* Mobile/Tablet: show list AND detail stacked */}
<div className="xl:hidden flex flex-col gap-4">
  <InvoiceList
    invoices={invoicesData}
    selectedId={selectedInvoice?.id}
    onSelect={handleSelect}
  />
  {selectedInvoice && (
    <InvoiceDetail
      invoice={selectedInvoice}
      onClose={() => setShowDetail(false)}
    />
  )}
</div>

      {/* Desktop: show both side by side */}
      <div className="hidden xl:grid xl:grid-cols-2 gap-4">
        <InvoiceList
          invoices={invoicesData}
          selectedId={selectedInvoice?.id}
          onSelect={handleSelect}
        />
        <InvoiceDetail
          invoice={selectedInvoice}
          onClose={() => setShowDetail(false)}
        />
      </div>

    </div>
  );
}