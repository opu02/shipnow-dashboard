 
export const warehouseStats = {
  totalSKU: { value: '285', change: '+2.58%', positive: true },
  quantityOnHand: { value: '12,450', unit: 'units', change: '+4.37%', positive: true },
  capacityUsage: { value: '62.5%', label: 'Full', change: '+1.54%', positive: true },
};

export const warehouseInventory = {
  total: 10000,
  categories: [
    { name: 'Electronics', percentage: 25, count: 2500, color: '#6C63FF' },
    { name: 'Apparel', percentage: 20, count: 2000, color: '#A78BFA' },
    { name: 'Home & Kitchen', percentage: 18, count: 1800, color: '#1F2937' },
    { name: 'Beauty & Health', percentage: 15, count: 1500, color: '#4B5563' },
    { name: 'Automotive Parts', percentage: 12, count: 1200, color: '#9CA3AF' },
    { name: 'Sports Equipment', percentage: 10, count: 1000, color: '#D1D5DB' },
  ],
};

export const capacityData = {
  totalUsage: 62.5,
  loaded: 40,
  empty: 24,
};

export const packageStatusData = [
  { id: 'PKG-HK77420', date: 'March 20, 2035 - 05:30 PM', status: 'Sent' },
  { id: 'PKG-A50812', date: 'March 21, 2035 - 01:45 PM', status: 'Received' },
  { id: 'PKG-E10293', date: 'March 22, 2035 - 09:00 AM', status: 'Expected' },
];

export const warehouseStorage = [
  { floor: 1, section: 'A1 - A10', category: 'Electronics', percentage: 80, available: 20, total: 100 },
  { floor: 2, section: 'B1 - B10', category: 'Apparel', percentage: 60, available: 40, total: 100 },
  { floor: 1, section: 'C1 - C10', category: 'Home & Kitchen', percentage: 90, available: 10, total: 100 },
  { floor: 3, section: 'D1 - D10', category: 'Automotive Parts', percentage: 50, available: 50, total: 100 },
  { floor: 2, section: 'E1 - E10', category: 'Beauty & Health', percentage: 70, available: 30, total: 100 },
];

export const warehouseMap = {
  floors: ['Floor 1', 'Floor 2', 'Floor 3'],
  sections: [
    {
      name: 'Electronics',
      availableSpace: '20/100',
      slots: [
        { id: 'A1', status: 'available' },
        { id: 'A2', status: 'available' },
        { id: 'A3', status: 'available' },
      ],
    },
    {
      name: 'Home & Kitchen',
      availableSpace: '10/100',
      slots: [
        { id: 'C1', status: 'available' },
        { id: 'C2', status: 'available' },
        { id: 'C3', status: 'available' },
      ],
    },
    {
      name: 'Automotive Parts',
      availableSpace: '50/100',
      slots: [
        { id: 'D1', status: 'available' },
        { id: 'D2', status: 'available' },
        { id: 'D3', status: 'available' },
      ],
    },
    {
      name: 'Sports Equipment',
      availableSpace: '45/100',
      slots: [
        { id: 'F1', status: 'available' },
        { id: 'F2', status: 'available' },
        { id: 'F3', status: 'available' },
      ],
    },
    {
      name: 'Apparel',
      availableSpace: '20/100',
      slots: [
        { id: 'B1', status: 'available' },
        { id: 'B2', status: 'available' },
        { id: 'B3', status: 'available' },
        { id: 'B4', status: 'available' },
        { id: 'B5', status: 'available' },
        { id: 'B6', status: 'available' },
        { id: 'B7', status: 'available' },
        { id: 'B8', status: 'full' },
        { id: 'B9', status: 'available' },
        { id: 'B10', status: 'available' },
      ],
    },
    {
      name: 'Beauty & Health',
      availableSpace: '30/100',
      slots: [
        { id: 'E1', status: 'available' },
        { id: 'E2', status: 'full' },
        { id: 'E3', status: 'available' },
        { id: 'E4', status: 'available' },
      ],
    },
  ],
};

export const activityLog = [
  {
    id: 1,
    user: 'Leo Fernandez',
    action: 'confirmed receipt of 40 units of Winter Jacket Series in Section B3 (Apparel)',
    time: '01:45 PM',
    color: '#6C63FF',
    icon: 'check',
  },
  {
    id: 2,
    user: 'Ava Martinez',
    action: 'added 25 units of Smart Router Kit to Section A1 (Electronics)',
    time: '09:15 AM',
    color: '#10B981',
    icon: 'plus',
  },
  {
    id: 3,
    user: 'Oscar Liem',
    action: 'dispatched 18 units of Stainless Steel Cookware Set from Section C5 (Home & Kitchen)',
    time: '05:30 PM',
    color: '#F59E0B',
    icon: 'truck',
  },
  {
    id: 4,
    user: 'Dina Choi',
    action: 'created a shipment entry for Brake Pad Sets in Section D2 (Automotive Parts)',
    time: '04:10 PM',
    color: '#3B82F6',
    icon: 'file',
  },
];