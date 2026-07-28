'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, BarChart2, Calendar, Package, MapPin,
  Warehouse, Truck, Users, FileText, MessageSquare,
  Bell, Settings, ChevronDown, Zap
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { label: 'Analytics', icon: BarChart2, href: '/analytics' },
  { label: 'Calendar', icon: Calendar, href: '/calendar' },
  { label: 'Shipments', icon: Package, href: '/shipments' },
  { label: 'Tracking', icon: MapPin, href: '/tracking' },
  { label: 'Warehouse', icon: Warehouse, href: '/warehouse' },
  { label: 'Fleets', icon: Truck, href: '/fleets' },
  { label: 'Drivers', icon: Users, href: '/drivers' },
  { label: 'Invoices & Billing', icon: FileText, href: '/invoices' },
];

const bottomItems = [
  { label: 'Message', icon: MessageSquare, href: '/messages', badge: 13 },
  { label: 'Notification', icon: Bell, href: '/notifications', badge: 5 },
  { label: 'Settings', icon: Settings, href: '/settings' },
];

function ShipNowIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 18L9 4H13L8 18H4Z" fill="white" />
      <path d="M12 18L17 4H21L16 18H12Z" fill="white" opacity="0.7" />
    </svg>
  );
}

export default function Sidebar({ collapsed = false }) {
  const pathname = usePathname();

  return (
    <aside
      className="flex flex-col h-full bg-white border-r border-gray-200 overflow-y-auto"
      style={{ width: collapsed ? '64px' : '220px', transition: 'width 0.2s' }}
    >
      {/* Logo */}
<div className="flex items-center gap-2.5 px-4 py-5 border-b border-gray-200">
  <div className="w-8 h-8 bg-[#6C63FF] rounded-lg flex items-center justify-center flex-shrink-0">
    <ShipNowIcon />
  </div>
  {!collapsed && (
    <span className="font-bold text-base tracking-widest text-gray-900">SHIPNOW</span>
  )}
</div>

      {/* User */}
{!collapsed && (
  <div className="flex items-center gap-2.5 px-4 py-4 border-b border-gray-200">
    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
      <img
        src="/images/11e3ce5ce32b02a2bb8cf2c25f7959e3c04a0e78.jpg"
        alt="John Doe"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-gray-800 text-sm font-medium truncate">John Doe</p>
      <p className="text-gray-500 text-xs truncate">Admin</p>
    </div>
    <ChevronDown size={14} className="text-gray-400 flex-shrink-0" />
  </div>
)}

      {/* Nav Items */}
      <nav className="flex-1 px-2 py-4 space-y-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                ${isActive
                  ? 'bg-[#6C63FF] text-white'
                  : 'text-gray-600 hover:bg-purple-50 hover:text-[#6C63FF]'
                }
                ${collapsed ? 'justify-center' : ''}
              `}
              title={collapsed ? item.label : ''}
            >
              <Icon size={18} className="flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Items */}
      <div className="px-2 py-2 border-t border-gray-200 space-y-0.5">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                ${isActive
                  ? 'bg-[#6C63FF] text-white'
                  : 'text-gray-600 hover:bg-purple-50 hover:text-[#6C63FF]'
                }
                ${collapsed ? 'justify-center' : ''}
              `}
              title={collapsed ? item.label : ''}
            >
              <Icon size={18} className="flex-shrink-0" />
              {!collapsed && <span className="flex-1">{item.label}</span>}
              {!collapsed && item.badge && (
                <span className="bg-[#6C63FF] text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Go Pro Card */}
      {!collapsed && (
        <div className="mx-3 mb-4 mt-2 bg-[#13131A] rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={14} className="text-[#6C63FF]" />
            <p className="text-white text-xs font-bold">Loving ShipNow Free?</p>
          </div>
          <p className="text-gray-400 text-xs mb-3 leading-relaxed">
            Go Pro to access priority support, real-time tracking, and full analytics.
          </p>
          <button className="w-full bg-white text-[#13131A] text-xs font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Go Pro Today
          </button>
        </div>
      )}
    </aside>
  );
}