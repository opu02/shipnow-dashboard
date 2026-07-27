 'use client';

import { X } from 'lucide-react';

const statusClass = {
  'Paid': 'bg-green-100 text-green-700',
  'Unpaid': 'bg-purple-100 text-purple-700',
  'Overdue': 'bg-red-100 text-red-700',
  'Pending': 'bg-yellow-100 text-yellow-700',
};

export default function InvoiceDetail({ invoice, onClose }) {
  if (!invoice) return null;

  // Calculate totals from line items
  const subTotal = invoice.lineItems.reduce((sum, item) => sum + item.amount, 0);
  const taxAmount = (subTotal * invoice.tax) / 100;
  const total = subTotal + taxAmount + invoice.fee;

  return (
    <div className="card h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Invoice Details</h3>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50">
            Edit
          </button>
          <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50">
            Hold
          </button>
          <button className="px-3 py-1.5 bg-gray-900 text-white rounded-lg text-xs font-medium hover:bg-gray-800">
            Send Invoice
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 md:hidden"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Invoice ID + Status */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-bold text-[#6C63FF]">Invoice #{invoice.id}</span>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusClass[invoice.status]}`}>
            {invoice.status}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-xs text-gray-500">Issue Date: <span className="text-gray-700">{invoice.issuedDate}</span></p>
          <p className="text-xs text-gray-500">Due Date: <span className="text-gray-700">{invoice.dueDate}</span></p>
        </div>
      </div>

      {/* Bill From + Bill To */}
      <div className="grid grid-cols-2 gap-4 mb-5 pb-4 border-b border-gray-100">
        <div>
          <p className="text-xs text-gray-400 mb-2">Bill From</p>
          <p className="text-sm font-semibold text-gray-800">{invoice.billFrom.name}</p>
          <p className="text-xs text-gray-500 mt-0.5">{invoice.billFrom.email}</p>
          <p className="text-xs text-gray-500 mt-0.5">{invoice.billFrom.address}</p>
          <p className="text-xs text-gray-500 mt-0.5">{invoice.billFrom.phone}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-2">Bill To</p>
          <p className="text-sm font-semibold text-gray-800">{invoice.billTo.name}</p>
          <p className="text-xs text-gray-500 mt-0.5">{invoice.billTo.email}</p>
          <p className="text-xs text-gray-500 mt-0.5">{invoice.billTo.address}</p>
          <p className="text-xs text-gray-500 mt-0.5">{invoice.billTo.phone}</p>
        </div>
      </div>

      {/* Package Summary */}
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-gray-700 mb-3">Package Summary</h4>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="table-th">Description</th>
                <th className="table-th">Shipment Type</th>
                <th className="table-th text-right">Price</th>
                <th className="table-th text-right">Qty</th>
                <th className="table-th text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoice.lineItems.map((item, index) => (
                <tr key={index} className="border-b border-gray-50">
                  <td className="table-td text-xs text-gray-700">{item.description}</td>
                  <td className="table-td text-xs text-gray-500">{item.shipmentType}</td>
                  <td className="table-td text-xs text-gray-700 text-right">${item.price.toFixed(2)}</td>
                  <td className="table-td text-xs text-gray-700 text-right">{item.qty}</td>
                  <td className="table-td text-xs text-gray-700 text-right">${item.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="mt-3 space-y-1.5 border-t border-gray-100 pt-3">
          <div className="flex justify-between">
            <span className="text-xs text-gray-500">Sub Total</span>
            <span className="text-xs text-gray-700">${subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-500">Tax ({invoice.tax}%)</span>
            <span className="text-xs text-gray-700">${taxAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-500">Fee</span>
            <span className="text-xs text-gray-700">${invoice.fee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-gray-200">
            <span className="text-sm font-bold text-gray-800">Total</span>
            <span className="text-sm font-bold text-gray-900">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Note */}
      {invoice.note && (
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-400 mb-1">Note</p>
          <p className="text-xs text-gray-600 leading-relaxed">{invoice.note}</p>
        </div>
      )}
    </div>
  );
}
