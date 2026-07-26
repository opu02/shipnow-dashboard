'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';
import MobileDrawer from '@/components/layout/MobileDrawer';
import Footer from '@/components/layout/Footer';

export default function DashboardLayout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}