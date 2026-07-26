import './globals.css';

export const metadata = {
  title: 'ShipNow - Logistics Dashboard',
  description: 'Manage your shipments, fleet, and warehouse in one smart dashboard.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}