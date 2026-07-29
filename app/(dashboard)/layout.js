'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';
import MobileDrawer from '@/components/layout/MobileDrawer';
import Footer from '@/components/layout/Footer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function DashboardLayout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#F8F9FA', overflow: 'hidden' }}>

      {/* Sidebar - Desktop only */}
      <div style={{ display: 'none' }} className="md:!flex flex-col flex-shrink-0">
        <Sidebar />
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', backgroundColor: '#F8F9FA' }}>

        {/* TopBar */}
        <TopBar onMenuClick={() => setDrawerOpen(true)} />

        {/* Page Content */}
        <main style={{ flex: 1, overflowY: 'auto', backgroundColor: '#F8F9FA' }}>
          {loading ? <LoadingSpinner /> : children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}