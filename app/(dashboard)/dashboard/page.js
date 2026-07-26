import MetricCard from '@/components/dashboard/MetricCard';
import ShipmentTypeChart from '@/components/dashboard/ShipmentTypeChart';
import ShipmentStatChart from '@/components/dashboard/ShipmentStatChart';
import ProfitSummaryChart from '@/components/dashboard/ProfitSummaryChart';
import ProductCategories from '@/components/dashboard/ProductCategories';
import TrackingPanel from '@/components/dashboard/TrackingPanel';
import AlertsPanel from '@/components/dashboard/AlertsPanel';
import RecentShipments from '@/components/dashboard/RecentShipments';
import RecentActivity from '@/components/dashboard/RecentActivity';
import { Package, TrendingUp, DollarSign } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="p-4 md:p-6">

      {/* Header */}
      <div className="mb-5">
        <p className="text-sm text-gray-500">Hello John!</p>
        <h1 className="text-2xl font-bold text-gray-900">Good Morning</h1>
      </div>

      {/* Main Grid - Desktop 3 column */}
      <div className="flex flex-col xl:flex-row gap-4 mb-4">

        {/* Left + Middle columns */}
        <div className="flex-1 flex flex-col gap-4">

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MetricCard
              title="Active Shipments"
              value="1,284"
              label="shipments"
              change="+8.7%"
              changeLabel="from last week"
              positive={true}
              icon={<Package size={18} />}
            />
            <MetricCard
              title="Delivery Performance"
              value="94.3%"
              label="on-time"
              change="-1.2%"
              changeLabel="from last week"
              positive={false}
              icon={<TrendingUp size={18} />}
            />
            <MetricCard
              title="Revenue"
              value="$82,450"
              label=""
              change="+12.4%"
              changeLabel="from last month"
              positive={true}
              icon={<DollarSign size={18} />}
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ShipmentStatChart />
            <ProfitSummaryChart />
          </div>

          {/* Product Categories + Tracking */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProductCategories />
            <TrackingPanel />
          </div>

        </div>

        {/* Right column - Shipment Type + Alerts stacked */}
        <div className="xl:w-80 flex flex-col gap-4">
          <ShipmentTypeChart />
          <AlertsPanel />
        </div>

      </div>

      {/* Recent Shipments + Recent Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2">
          <RecentShipments />
        </div>
        <div className="xl:col-span-1">
          <RecentActivity />
        </div>
      </div>

    </div>
  );
}