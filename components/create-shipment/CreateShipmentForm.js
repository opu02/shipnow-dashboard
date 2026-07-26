 'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const initialForm = {
  senderCompany: 'GreenHaven',
  senderEmail: 'logistics@greenhaven.com',
  senderPhone: '408-555-7210',
  senderAddress: '1120 Birch Street, Portland, OR 97205, USA',
  recipientCompany: 'FreshNest',
  recipientEmail: 'warehouse@freshnest.com',
  recipientPhone: '786-555-4432',
  recipientAddress: '',
  itemDescription: 'Premium Garden Tool Set',
  quantity: '40',
  value: '$3,200',
  weight: '125',
  weightUnit: 'Kg',
  length: '80',
  width: '60',
  height: '',
  freightType: 'Road Freight',
  carrier: 'FedEx',
  shippingMethod: '',
  shipmentId: '#SH9583742',
  shipmentDate: 'March 21, 2035',
  notes: '',
  insuranceCoverage: true,
  signatureOnDelivery: true,
  temperatureControl: true,
  fragileItemHandling: false,
  notifyRecipient: true,
};

export default function CreateShipmentForm() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.senderCompany) newErrors.senderCompany = 'Company is required';
    if (!form.senderEmail) newErrors.senderEmail = 'Email is required';
    if (!form.senderAddress) newErrors.senderAddress = 'Address is required';
    if (!form.recipientCompany) newErrors.recipientCompany = 'Company is required';
    if (!form.recipientEmail) newErrors.recipientEmail = 'Email is required';
    if (!form.recipientAddress) newErrors.recipientAddress = 'Address is required.';
    if (!form.itemDescription) newErrors.itemDescription = 'Item description is required';
    if (!form.shippingMethod) newErrors.shippingMethod = 'Shipping method is required.';
    if (!form.carrier) newErrors.carrier = 'Carrier is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    router.push('/shipments');
  };

  const handleDelete = () => {
    setForm(initialForm);
    setErrors({});
  };

  const inputClass = (field) =>
    `w-full px-3 py-2 border rounded-lg text-sm outline-none transition-all
    ${errors[field]
      ? 'border-red-400 focus:ring-2 focus:ring-red-200'
      : 'border-gray-200 focus:ring-2 focus:ring-purple-200 focus:border-[#6C63FF]'
    }`;

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white rounded-xl shadow-card p-6">
        <h2 className="text-base font-semibold text-gray-800 mb-6">Shipment Form</h2>

        {/* Sender + Recipient */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* Sender Info */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Sender Info</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Company</label>
                <input
                  type="text"
                  name="senderCompany"
                  value={form.senderCompany}
                  onChange={handleChange}
                  className={inputClass('senderCompany')}
                />
                {errors.senderCompany && <p className="text-red-500 text-xs mt-1">{errors.senderCompany}</p>}
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Email</label>
                <input
                  type="email"
                  name="senderEmail"
                  value={form.senderEmail}
                  onChange={handleChange}
                  className={inputClass('senderEmail')}
                />
                {errors.senderEmail && <p className="text-red-500 text-xs mt-1">{errors.senderEmail}</p>}
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Phone Number</label>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-2 py-2 bg-white">
                    <span>🇺🇸</span>
                    <span className="text-xs text-gray-600">+1</span>
                    <span className="text-gray-400 text-xs">▾</span>
                  </div>
                  <input
                    type="text"
                    name="senderPhone"
                    value={form.senderPhone}
                    onChange={handleChange}
                    className={`flex-1 ${inputClass('senderPhone')}`}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Pickup Address</label>
                <input
                  type="text"
                  name="senderAddress"
                  value={form.senderAddress}
                  onChange={handleChange}
                  className={inputClass('senderAddress')}
                />
                {errors.senderAddress && <p className="text-red-500 text-xs mt-1">{errors.senderAddress}</p>}
              </div>
            </div>
          </div>

          {/* Recipient Info */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Recipient Info</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Company</label>
                <input
                  type="text"
                  name="recipientCompany"
                  value={form.recipientCompany}
                  onChange={handleChange}
                  className={inputClass('recipientCompany')}
                />
                {errors.recipientCompany && <p className="text-red-500 text-xs mt-1">{errors.recipientCompany}</p>}
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Email</label>
                <input
                  type="email"
                  name="recipientEmail"
                  value={form.recipientEmail}
                  onChange={handleChange}
                  className={`${inputClass('recipientEmail')}`}
                />
                {errors.recipientEmail && <p className="text-red-500 text-xs mt-1">{errors.recipientEmail}</p>}
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Phone Number</label>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-2 py-2 bg-white">
                    <span>🇺🇸</span>
                    <span className="text-xs text-gray-600">+1</span>
                    <span className="text-gray-400 text-xs">▾</span>
                  </div>
                  <input
                    type="text"
                    name="recipientPhone"
                    value={form.recipientPhone}
                    onChange={handleChange}
                    className={`flex-1 ${inputClass('recipientPhone')}`}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Delivery Address</label>
                <input
                  type="text"
                  name="recipientAddress"
                  value={form.recipientAddress}
                  onChange={handleChange}
                  placeholder="Street address, city, state/province, ZIP code"
                  className={inputClass('recipientAddress')}
                />
                {errors.recipientAddress && <p className="text-red-500 text-xs mt-1">{errors.recipientAddress}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Package + Shipping Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* Package Details */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Package Details</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Item Description</label>
                <input
                  type="text"
                  name="itemDescription"
                  value={form.itemDescription}
                  onChange={handleChange}
                  className={inputClass('itemDescription')}
                />
                {errors.itemDescription && <p className="text-red-500 text-xs mt-1">{errors.itemDescription}</p>}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    className={inputClass('quantity')}
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Value</label>
                  <input
                    type="text"
                    name="value"
                    value={form.value}
                    onChange={handleChange}
                    className={inputClass('value')}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Weight</label>
                  <input
                    type="number"
                    name="weight"
                    value={form.weight}
                    onChange={handleChange}
                    className={inputClass('weight')}
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Units</label>
                  <select
                    name="weightUnit"
                    value={form.weightUnit}
                    onChange={handleChange}
                    className={inputClass('weightUnit')}
                  >
                    <option>Kg</option>
                    <option>Lbs</option>
                    <option>g</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Dimensions</label>
                <div className="grid grid-cols-3 gap-2">
                  <div className="relative">
                    <input
                      type="number"
                      name="length"
                      value={form.length}
                      onChange={handleChange}
                      className={inputClass('length')}
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">cm</span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      name="width"
                      value={form.width}
                      onChange={handleChange}
                      className={inputClass('width')}
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">cm</span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      name="height"
                      value={form.height}
                      onChange={handleChange}
                      placeholder="ex. 20"
                      className={inputClass('height')}
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">cm</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  <span className="text-xs text-gray-400 text-center">Length</span>
                  <span className="text-xs text-gray-400 text-center">Width</span>
                  <span className="text-xs text-gray-400 text-center">Height</span>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Details */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Shipping Details</h3>
            <div className="space-y-3">
              {/* Freight Type */}
              <div>
                <label className="block text-xs text-gray-500 mb-2">Freight Type</label>
                <div className="flex flex-wrap gap-3">
                  {['Road Freight', 'Rail Freight', 'Ocean Freight', 'Air Freight'].map((type) => (
                    <label key={type} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="freightType"
                        value={type}
                        checked={form.freightType === type}
                        onChange={handleChange}
                        className="w-3.5 h-3.5"
                        style={{ accentColor: '#6C63FF' }}
                      />
                      <span className="text-xs text-gray-600">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Carrier + Shipping Method */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Carrier</label>
                  <select
                    name="carrier"
                    value={form.carrier}
                    onChange={handleChange}
                    className={inputClass('carrier')}
                  >
                    <option>FedEx</option>
                    <option>DHL</option>
                    <option>UPS</option>
                    <option>USPS</option>
                    <option>Aramex</option>
                  </select>
                  {errors.carrier && <p className="text-red-500 text-xs mt-1">{errors.carrier}</p>}
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Shipping Method</label>
                  <select
                    name="shippingMethod"
                    value={form.shippingMethod}
                    onChange={handleChange}
                    className={inputClass('shippingMethod')}
                  >
                    <option value="">Select Method</option>
                    <option>Standard</option>
                    <option>Express</option>
                    <option>Overnight</option>
                    <option>Economy</option>
                  </select>
                  {errors.shippingMethod && <p className="text-red-500 text-xs mt-1">{errors.shippingMethod}</p>}
                </div>
              </div>

              {/* Shipment ID + Date */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Shipment ID</label>
                  <input
                    type="text"
                    value={form.shipmentId}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-500 outline-none"
                  />
                  <p className="text-xs text-gray-400 mt-1">Auto-generated</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Shipment Date</label>
                  <input
                    type="text"
                    name="shipmentDate"
                    value={form.shipmentDate}
                    onChange={handleChange}
                    className={inputClass('shipmentDate')}
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">Notes</label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Add special delivery notes (optional)"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-purple-200 focus:border-[#6C63FF] resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services + Tracking */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Additional Services</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'insuranceCoverage', label: 'Insurance Coverage' },
                { name: 'temperatureControl', label: 'Temperature Control' },
                { name: 'signatureOnDelivery', label: 'Signature on Delivery' },
                { name: 'fragileItemHandling', label: 'Fragile Item Handling' },
              ].map((item) => (
                <label key={item.name} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={form[item.name]}
                    onChange={handleChange}
                    className="w-4 h-4 rounded"
                    style={{ accentColor: '#6C63FF' }}
                  />
                  <span className="text-xs text-gray-600">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Tracking & Status Updates</h3>
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => setForm((prev) => ({ ...prev, notifyRecipient: !prev.notifyRecipient }))}
                className={`relative w-10 h-5 rounded-full transition-colors cursor-pointer
                  ${form.notifyRecipient ? 'bg-[#6C63FF]' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform
                  ${form.notifyRecipient ? 'translate-x-5' : 'translate-x-0.5'}`}
                />
              </div>
              <span className="text-xs text-gray-600">Notify Recipient via Email/SMS</span>
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={handleDelete}
            className="px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Delete Form
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Submit Shipment
          </button>
        </div>
      </div>
    </form>
  );
}
