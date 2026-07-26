 export const dashboardStats = {
  activeShipments: {
    value: 1284,
    label: 'shipments',
    change: '+8.7%',
    changeLabel: 'from last week',
    positive: true,
  },
  deliveryPerformance: {
    value: '94.3%',
    label: 'on-time',
    change: '-1.2%',
    changeLabel: 'from last week',
    positive: false,
  },
  revenue: {
    value: '$82,450',
    label: '',
    change: '+12.4%',
    changeLabel: 'from last month',
    positive: true,
  },
};

export const shipmentTypeData = [
  { name: 'Road Freight', value: 46, count: 1150, color: '#6C63FF' },
  { name: 'Ocean Freight', value: 17, count: 425, color: '#A78BFA' },
  { name: 'Air Freight', value: 28, count: 700, color: '#1F2937' },
  { name: 'Rail Freight', value: 9, count: 225, color: '#D1D5DB' },
];

export const shipmentStatisticData = [
  { month: 'Jan', value: 1200 },
  { month: 'Feb', value: 1800 },
  { month: 'Mar', value: 2200 },
  { month: 'Apr', value: 1600 },
  { month: 'May', value: 3124 },
  { month: 'Jun', value: 2800 },
  { month: 'Jul', value: 3800 },
  { month: 'Aug', value: 4352 },
];

export const profitSummaryData = [
  { month: 'Jan', revenue: 45000, cost: 32000 },
  { month: 'Feb', revenue: 52000, cost: 38000 },
  { month: 'Mar', revenue: 48000, cost: 35000 },
  { month: 'Apr', revenue: 61000, cost: 42000 },
  { month: 'May', revenue: 87524, cost: 45880 },
  { month: 'Jun', revenue: 72000, cost: 48000 },
  { month: 'Jul', revenue: 68000, cost: 44000 },
  { month: 'Aug', revenue: 91000, cost: 52000 },
];

export const productCategories = [
  { name: 'Electronics', products: 240, percentage: 24, color: '#6C63FF' },
  { name: 'Home & Kitchen', products: 200, percentage: 20, color: '#A78BFA' },
  { name: 'Apparel', products: 180, percentage: 18, color: '#1F2937' },
  { name: 'Beauty & Health', products: 140, percentage: 14, color: '#4B5563' },
  { name: 'Sports & Outdoors', products: 120, percentage: 12, color: '#9CA3AF' },
  { name: 'Automotive', products: 120, percentage: 12, color: '#D1D5DB' },
];

export const shipmentAlerts = {
  total: 12,
  customsClearance: 5,
  incorrectAddress: 4,
  weatherRelated: 3,
  items: [
    {
      id: 1,
      type: 'Customs Clearance Delay',
      shipmentId: '#SH8743921',
      carrier: 'Ocean Freight',
      date: 'Mar 20',
      icon: 'customs',
    },
    {
      id: 2,
      type: 'Incorrect Address Provided',
      shipmentId: '#SH4725813',
      carrier: 'Road Freight',
      date: 'Mar 20',
      icon: 'address',
    },
    {
      id: 3,
      type: 'Weather-Related Hold',
      shipmentId: '#SH9870043',
      carrier: 'Air Freight',
      date: 'Mar 19',
      icon: 'weather',
    },
    {
      id: 4,
      type: 'Incorrect Address Provided',
      shipmentId: '#SH8716054',
      carrier: 'Rail Freight',
      date: 'Mar 18',
      icon: 'address',
    },
  ],
};

export const recentShipments = [
  {
    id: '#SH9283746',
    company: 'TechGear Inc.',
    category: 'Electronics',
    carrier: 'FedEx',
    route: 'Los Angeles, CA → Chicago, IL',
    date: 'Mar 20, 2035',
    status: 'In Transit',
  },
  {
    id: '#SH4182635',
    company: 'StyleHub Co.',
    category: 'Apparel',
    carrier: 'DHL',
    route: 'New York, NY → Atlanta, GA',
    date: 'Mar 19, 2035',
    status: 'Out for Delivery',
  },
  {
    id: '#SH9037821',
    company: 'FreshNest',
    category: 'Home & Kitchen',
    carrier: 'UPS',
    route: 'Dallas, TX → Miami, FL',
    date: 'Mar 18, 2035',
    status: 'Delivered',
  },
  {
    id: '#SH3374652',
    company: 'FitPlus Gear',
    category: 'Sports & Outdoors',
    carrier: 'USPS',
    route: 'Seattle, WA → Denver, CO',
    date: 'Mar 21, 2035',
    status: 'Processing',
  },
  {
    id: '#SH4457830',
    company: 'AutoParts Pro',
    category: 'Automotive',
    carrier: 'Aramex',
    route: 'Detroit, MI → San Diego, CA',
    date: 'Mar 20, 2035',
    status: 'In Transit',
  },
];

export const recentActivity = [
  {
    id: 1,
    user: '@TechGuru99',
    action: 'submitted a bulk shipment request',
    time: '12:00 PM',
    color: '#6C63FF',
  },
  {
    id: 2,
    user: '@SupportKen',
    action: 'added a priority tag to Order ID 77889KL',
    time: '11:30 AM',
    color: '#10B981',
  },
  {
    id: 3,
    user: '@SallyMae88',
    action: 'initiated a return process for Order ID 44556GHI',
    time: '11:00 AM',
    color: '#F59E0B',
  },
  {
    id: 4,
    user: '@AdminLisa',
    action: 'resolved a delivery issue for Order ID 12345XYZ',
    time: '10:15 AM',
    color: '#3B82F6',
  },
  {
    id: 5,
    user: '@Mickey92',
    action: 'updated the shipping address for Order ID B7800ABC',
    time: '09:45 AM',
    color: '#EF4444',
  },
];

export const trackingData = {
  shipmentId: '#SH8743921',
  status: 'In Transit',
  schedule: 'On Schedule',
  courier: 'Daniel Cooper',
  courierCompany: 'SkyLogix Express',
  origin: 'San Francisco, CA, USA',
  originDate: 'Mar 19, 2035 - 10:30 AM',
  destination: 'New York, NY, USA',
  destinationDate: 'Mar 23, 2035 - 03:00 PM (estimated)',
  progress: 60,
};
