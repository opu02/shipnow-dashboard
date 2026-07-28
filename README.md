# ShipNow Dashboard

A logistics and shipment management dashboard built for the Trends Bird Limited Frontend Developer Intern Assignment.

## Live Demo

[Live Link](#) <!-- Will be updated after Vercel deployment -->

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** JavaScript
- **Styling:** Tailwind CSS v4
- **Charts:** Recharts
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)
- **Deployment:** Vercel

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/opu02/shipnow-dashboard.git
cd shipnow-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Login Credentials

No real authentication required. Use any valid email and password (minimum 6 characters).

- Email: test@gmail.com
- Password: 123456

## Screen Status

| Screen | Status |
|--------|--------|
| Login | ✅ Complete |
| Dashboard | ✅ Complete |
| Shipments - Table View | ✅ Complete |
| Shipments - Grid View | ✅ Complete |
| Shipments - View Switcher | ✅ Complete |
| Create New Shipment | ✅ Complete |
| Invoices & Billing | ✅ Complete |
| Warehouse | ✅ Complete |
| Analytics | ⬜ Placeholder |
| Calendar | ⬜ Placeholder |
| Tracking | ⬜ Placeholder |
| Fleets | ⬜ Placeholder |
| Drivers | ⬜ Placeholder |

## Features

- Responsive design — Desktop (1440px), Tablet (768px), Mobile (375px)
- Login with client-side form validation (email format, password length)
- Dashboard with bar charts, donut chart, metric cards, tracking panel, alerts, recent shipments table, activity timeline
- Shipments table view — column sorting, row selection, pagination, search/filter
- Shipments grid view — status chips, search, sort, pagination
- View switcher (table/grid) on single /shipments route, URL reflected (?view=table / ?view=grid)
- Create New Shipment form with validation and error states (as shown in Figma)
- Invoices & Billing master-detail layout — row selection updates detail panel
- Invoice totals calculated from line items (not hard-coded)
- Warehouse analytics — inventory chart, capacity donut, storage table, interactive map with floor tabs, activity log
- Mobile hamburger drawer navigation
- Placeholder pages for Analytics, Calendar, Tracking, Fleets, Drivers

## Assumptions

- Photographic images substituted with similar images from Figma design file as permitted
- No real authentication or backend — all data is static mock data
- Shipment ID in Create New Shipment is auto-generated and read-only
- View switcher designed to match existing design system (not in Figma)

## Known Issues

- None at this time

## Project Structure

```
shipnow-dashboard/
├── app/
│   ├── (dashboard)/
│   │   ├── layout.js        # Shared sidebar + footer
│   │   ├── dashboard/
│   │   ├── shipments/
│   │   ├── invoices/
│   │   ├── warehouse/
│   │   └── ...placeholders
│   ├── login/
│   └── globals.css
├── components/
│   ├── layout/              # Sidebar, TopBar, Footer, MobileDrawer
│   ├── dashboard/
│   ├── shipments/
│   ├── invoices/
│   ├── warehouse/
│   ├── create-shipment/
│   └── ui/
├── data/                    # Static mock data
└── public/images/
```