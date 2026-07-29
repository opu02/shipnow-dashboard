# ShipNow Dashboard

A logistics and shipment management dashboard built for the Trends Bird Limited Frontend Developer Intern Assignment.

## Live Demo

[Live Link](https://shipnow-dashboard-ten.vercel.app)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** JavaScript
- **Styling:** Tailwind CSS v4
- **Charts:** Recharts
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)
- **Deployment:** Vercel

## Setup Instructions

Clone the repository:

    git clone https://github.com/opu02/shipnow-dashboard.git
    cd shipnow-dashboard

Install dependencies:

    npm install

Run the development server:

    npm run dev

Open http://localhost:3000 in your browser.

## Login Credentials

No real authentication required. Use any valid email and password (minimum 6 characters).

- Email: test@gmail.com
- Password: 123456

## Screen Status

| Screen | Status |
|--------|--------|
| Login | Complete |
| Dashboard | Complete |
| Shipments - Table View | Complete |
| Shipments - Grid View | Complete |
| Shipments - View Switcher | Complete |
| Create New Shipment | Complete |
| Invoices & Billing | Complete |
| Warehouse | Complete |
| Analytics | Placeholder |
| Calendar | Placeholder |
| Tracking | Placeholder |
| Fleets | Placeholder |
| Drivers | Placeholder |

## Features

- Responsive design across Desktop (1440px), Tablet (768px), Mobile (375px)
- Login with client-side form validation (email format, password length, show/hide password)
- Dashboard with bar charts, donut chart, metric cards, tracking panel, shipment alerts, recent shipments table, and activity timeline
- Shipments table view with column sorting, row selection, pagination, and search/filter/date-range controls
- Shipments grid view with status chips, search, sort controls, and pagination
- View switcher (table/grid) on single /shipments route with URL reflection (?view=table or ?view=grid)
- Create New Shipment form with full validation and error states matching Figma design
- Invoices & Billing master-detail layout where row selection updates the detail panel dynamically
- Invoice totals calculated from line items, not hard-coded
- Warehouse analytics with inventory bar chart, capacity donut chart, storage table with progress bars, interactive warehouse map with floor tabs, package status list, and activity log
- Mobile hamburger drawer navigation with overlay
- Placeholder pages for Analytics, Calendar, Tracking, Fleets, and Drivers

## Assumptions

- Photographic images sourced from Figma design file as permitted by the assignment brief
- No real authentication or backend integration — all data is static mock data defined in the /data directory
- Shipment ID in Create New Shipment form is auto-generated and read-only
- View switcher toggle designed independently to match existing design system, as it was not included in the Figma file
- Where the design implied a larger dataset than displayed, additional records were generated to make pagination meaningful

## Known Issues

- None at this time

## Project Structure

    shipnow-dashboard/
    ├── app/
    │   ├── (dashboard)/
    │   │   ├── layout.js
    │   │   ├── dashboard/
    │   │   ├── shipments/
    │   │   ├── invoices/
    │   │   ├── warehouse/
    │   │   └── placeholders/
    │   ├── login/
    │   └── globals.css
    ├── components/
    │   ├── layout/
    │   ├── dashboard/
    │   ├── shipments/
    │   ├── invoices/
    │   ├── warehouse/
    │   ├── create-shipment/
    │   └── ui/
    ├── data/
    └── public/images/