'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, BarChart2, Calendar, Package, MapPin,
  Warehouse, Truck, Users, FileText, MessageSquare,
  Bell, Settings, X, Zap
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
      <rect x="0" y="0" width="10" height="10" rx="2" fill="white" />
      <rect x="12" y="0" width="7" height="7" rx="1.5" fill="white" opacity="0.7" />
      <rect x="0" y="12" width="7" height="7" rx="1.5" fill="white" opacity="0.7" />
    </svg>
  );
}

export default function MobileDrawer({ isOpen, onClose }) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#13131A] text-white z-50 md:hidden flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{ width: '240px' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-[#2A2A3D]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#6C63FF] rounded-lg flex items-center justify-center">
              <ShipNowIcon />
            </div>
            <span className="font-bold text-base tracking-widest">SHIPNOW</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A0A0B0] hover:bg-[#1E1E2D] hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* User */}
        <div className="flex items-center gap-2.5 px-4 py-4 border-b border-[#2A2A3D]">
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="/images/11e3ce5ce32b02a2bb8cf2c25f7959e3c04a0e78.jpg"
              alt="John Doe"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-white text-sm font-medium">John Doe</p>
            <p className="text-[#A0A0B0] text-xs">Admin</p>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 px-2 py-4 space-y-0.5 overflow-y-auto">
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
                    : 'text-[#A0A0B0] hover:bg-[#1E1E2D] hover:text-white'
                  }`}
              >
                <Icon size={18} className="flex-shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Items */}
        <div className="px-2 py-2 border-t border-[#2A2A3D] space-y-0.5">
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
                    : 'text-[#A0A0B0] hover:bg-[#1E1E2D] hover:text-white'
                  }`}
              >
                <Icon size={18} className="flex-shrink-0" />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span className="bg-[#6C63FF] text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Go Pro Card */}
        <div className="mx-3 mb-4 mt-2 bg-[#1E1E2D] rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={14} className="text-[#6C63FF]" />
            <p className="text-white text-xs font-bold">Loving ShipNow Free?</p>
          </div>
          <p className="text-[#A0A0B0] text-xs mb-3 leading-relaxed">
            Go Pro to access priority support, real-time tracking, and full analytics.
          </p>
          <button className="w-full bg-white text-[#13131A] text-xs font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Go Pro Today
          </button>
        </div>
      </div>
    </>
  );
}