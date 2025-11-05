# SHAED - The Operating System for Modern Mobility Commerce

**Investor Landing Page for EnerTech Forum San Diego 2025**

A modern, mobile-first landing page showcasing SHAED's platform for transforming the $150B commercial vehicle procurement market. Built with React 19, Tailwind CSS 4, and shadcn/ui.

## 🚀 Quick Start

### Prerequisites
- Node.js 22.x
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The development server will start at `http://localhost:3000`

## 🎨 Design

**Theme:** Modern dark theme with SHAED brand green accent (#00FF88)

**Key Features:**
- Mobile-first responsive design
- Bold typography and clean layouts
- Data-driven metrics and visualizations
- Smooth scroll animations
- Optimized for tablet viewing during presentations

## 📋 Content Sections

1. **Hero** - Headline, traction metrics ($2.8B+ GMV), and CTA
2. **Problem** - Industry pain points and $5.4B opportunity
3. **Why Now** - Three converging forces (Behavioral, Economic, Technology)
4. **Solution** - Three-module platform (Catalog, Order Management, Documentation)
5. **Traction** - Beta dealer case study with validated ROI
6. **Business Model** - Multi-revenue streams projecting $96M in Year 5
7. **Market Opportunity** - $65-98B TAM in commercial vehicles
8. **Team** - Leadership bios and industry credentials
9. **CTA** - Download investment deck and contact

## 🛠️ Tech Stack

- **Framework:** React 19
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Routing:** Wouter
- **Icons:** Lucide React
- **Build Tool:** Vite

## 📁 Project Structure

```
client/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable UI components
│   │   └── ui/      # shadcn/ui components
│   ├── contexts/    # React contexts (Theme)
│   ├── hooks/       # Custom React hooks
│   ├── lib/         # Utility functions
│   ├── pages/       # Page components
│   │   └── Home.tsx # Main landing page
│   ├── App.tsx      # Routes & layout
│   ├── index.css    # Global styles & design tokens
│   └── main.tsx     # React entry point
```

## 🎯 Customization

### Colors
Edit design tokens in `client/src/index.css`:
- Primary (SHAED green): `--primary: oklch(0.75 0.25 160)`
- Background: `--background: oklch(0.12 0.01 220)`
- Accent: `--accent: oklch(0.25 0.15 160)`

### Content
Update metrics and copy in `client/src/pages/Home.tsx`

### Investment Deck Download
Replace the email link in the `handleDownloadDeck` function with your hosted PDF URL:
```typescript
const handleDownloadDeck = () => {
  window.open('https://your-domain.com/shaed-investment-deck.pdf', '_blank');
};
```

## 📊 Data Sources

All metrics and statistics are sourced from:
- SHAED Beta Dealer Case Study (6-month results, annualized)
- ATD Commercial Truck Dealer Future Landscape Report (March 2018)
- ACT Research commercial vehicle market projections

## 🚢 Deployment

### Build for Production
```bash
pnpm build
```

The production-ready files will be in the `dist/` directory.

### Deploy to Vercel/Netlify
This is a static site that can be deployed to any static hosting service:

**Vercel:**
```bash
vercel --prod
```

**Netlify:**
```bash
netlify deploy --prod --dir=dist
```

### Environment Variables
No environment variables required for the static landing page.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

© 2025 SHAED. All rights reserved.

## 🤝 Contact

For questions about SHAED or investment opportunities:
- Email: contact@shaed.com
- Presenting at: EnerTech Forum San Diego, November 6, 2025

---

**Built for EnerTech Forum San Diego 2025**
