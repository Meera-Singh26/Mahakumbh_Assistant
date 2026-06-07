 **KumbhSathi AI - Mahakumbh Pilgrim Assistant**

Live Demo: [mahakumbhassistant.vercel.app](https://mahakumbhassistant.vercel.app)

A comprehensive digital assistant for pilgrims attending the Mahakumbh festival. Provides real-time information on transportation, accommodation, medical facilities, sacred bathing dates, and AI-powered guidance.

** Core Features**
 1. Transport Routes & Navigation
- **3 Major Routes**: Railway Station → Sangam Ghat | Civil Lines → Arail Ghat | Airport → Mela Ground
- **Distance & Duration**: Real-time travel time estimates
- **Transport Modes**: Auto, Bus, Taxi, Cycle Rickshaw options
- **Pricing**: Transparent cost breakdown for each route

 2. Accommodation Directory
| Type | Price | Capacity | Status |
| Luxury Tent City | ₹2000-5000/night | 2-4 persons | Available |
| Mid-Range Ashram | ₹500-1000/night | 4-6 persons | Available |
| Budget Dormitory | ₹200-300/night | 8-10 persons | Limited |
| Free Ashram | Complimentary | 10-15 persons | Waiting List |

 3. Medical & Emergency Services
- **24/7 Medical Camps**: Central Medical Camp, Sangam Health Center, Elderly Care Unit
- **Emergency Hotlines**: Police (100) | Ambulance (108) | Fire (101) | Pilgrim Help (1920) | Women Safety (1090)
- **Specialized Care**: First aid, pharmacy, senior mobility support

4. Sacred Bathing Calendar (2025)
- **Jan 29**: Makar Sankranti Snan - First major bathing date
- **Feb 12**: Basant Panchami Snan - Spring festival bathing
- **Mar 13**: Maha Shivaratri Snan - Lord Shiva's night
- **Apr 2**: Chaitra Purnima Snan - Full moon bathing
- **Apr 12**: Shahi Snan - Royal procession bathing (Akharas)

5. Frequently Asked Questions
- Travel guidance and route planning
- Accommodation booking process
- What to bring and safety tips
- Accessibility for elderly and differently-abled pilgrims
- Festival etiquette and traditions

6. AI Chat Assistant
- **Context-Aware Responses**: Intelligent answers about pilgrimage logistics
- **Real-Time Interaction**: Instant messaging interface
- **Helpful Suggestions**: Quick-access question buttons
- **24/7 Availability**: Always ready to assist

7. Multilingual Support
Fully localized in **5 languages**:
- 🇮🇳 **हिंदी** (Hindi)
- 🇮🇳 **English**
- 🇵🇰 **اردو** (Urdu)
- 🇧🇩 **বাংলা** (Bengali)
- 🇮🇳 **தமிழ்** (Tamil)

 Design & User Experience

 Spiritual Aesthetics
- **Color Palette**: Saffron (#FF9933), Ivory (#F5F1E8), Gold (#D4A574)
- **Typography**: Playfair Display (headings) + Inter (body text)
- **Visual Elements**: Mandala patterns, sacred geometry, temple-inspired design
- **Animations**: Smooth, respectful transitions (no jarring effects)

### Accessibility
WCAG AA Compliant  
 High Contrast Text  
 Large Touch Targets (48px minimum)  
Keyboard Navigation  
Semantic HTML  
Respects Motion Preferences  

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Fast load times (<2 seconds)

##  Technology Stack

| Component | Technology |
|-----------|-----------|
| **Frontend Framework** | React 19 + TypeScript |
| **Styling** | Tailwind CSS 4 |
| **UI Components** | shadcn/ui |
| **Routing** | Wouter |
| **Build Tool** | Vite |
| **Deployment** | Vercel |
| **Package Manager** | pnpm |

---

##  Performance Metrics

- **Bundle Size**: ~600KB (gzipped)
- **Initial Load**: <2 seconds
- **Lighthouse Score**: 95+
- **Mobile Friendly**: Fully Responsive
- **SEO Optimized**:  Meta tags, structured data


##  Deployment

### Live on Vercel
The application is deployed and live at: **[mahakumbhassistant.vercel.app](https://mahakumbhassistant.vercel.app)**

### Deploy Your Own
1. Fork the repository
2. Push to GitHub
3. Connect to Vercel
4. Auto-deploy on every push

**Build Command**: `pnpm build`  
**Output Directory**: `dist/public`  
**Framework**: Vite  

---

##  Project Structure

```
kumbhsathi-ai/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx          # Main application
│   │   │   └── NotFound.tsx      # 404 page
│   │   ├── components/
│   │   │   └── ui/               # shadcn/ui components
│   │   ├── App.tsx               # Root component
│   │   ├── main.tsx              # Entry point
│   │   └── index.css             # Global styles
│   ├── index.html                # HTML template
│   └── public/                   # Static assets
├── server/
│   └── index.ts                  # Express server
├── vercel.json                   # Vercel config
├── package.json                  # Dependencies
└── README.md                     # Documentation
```

---

##  Local Development

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Setup
```bash
# Clone repository
git clone https://github.com/yourusername/kumbhsathi-ai.git
cd kumbhsathi-ai

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000
```

### Build for Production
```bash
# Build
pnpm build

# Preview production build
pnpm preview
```

---

##  Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Mobile Browsers | Latest |

---

## 📱 Features by Device

### Desktop
- Full-width navigation
- Detailed information cards
- Hover interactions
- Optimized for 1920px+ screens

### Tablet
- Responsive grid layout
- Touch-optimized buttons
- Readable text sizes
- Optimized for 768px-1024px screens

### Mobile
- Vertical stack layout
- Single-column design
- Large touch targets
- Optimized for 320px+ screens

---

##  Data & Privacy

- **No Personal Data Collection**: App doesn't store user information
- **No Tracking**: No analytics or user tracking
- **Offline Capable**: Information loads instantly
- **Secure**: HTTPS only, no external dependencies

---

## Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push and create a Pull Request



##  Acknowledgments

Designed with reverence for pilgrims attending Mahakumbh. Built to bridge technology and tradition, making the sacred journey accessible to all.

**KumbhSathi AI** - Your Digital Companion for the Sacred Pilgrimage 🪔
