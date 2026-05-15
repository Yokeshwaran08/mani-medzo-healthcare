# TSK Primecare – Full-Stack Healthcare Web App

## Tech Stack
- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Form Saving**: Google Sheets via Apps Script
- **Messaging**: WhatsApp wa.me integration

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run in development
```bash
npm run dev
```
Then open http://localhost:5173

### 3. Build for production
```bash
npm run build
```
Output is in the `/dist` folder. Deploy it to Vercel, Netlify, or any static host.

---

## 📁 Project Structure

```
tsk-primecare/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Sticky nav, mobile menu, all nav links
│   │   ├── HeroSection.jsx      # Hero with WhatsApp + Book Appointment CTAs
│   │   ├── QuickActionBar.jsx   # 4 quick action buttons
│   │   ├── ServicesSection.jsx  # 3 service cards (Clinic, Pharmacy, Diagnostics)
│   │   ├── AboutSection.jsx     # About + Doctor profile
│   │   ├── TestimonialsSection.jsx
│   │   ├── BookingFormSection.jsx  # Form + WhatsApp + Google Sheets
│   │   ├── LocationSection.jsx  # Google Maps + contact info
│   │   └── Footer.jsx           # Full footer with nav links
│   ├── App.jsx                  # Root: refs, nav logic, state
│   ├── main.jsx
│   └── index.css                # Tailwind + custom utilities
├── Code.gs                      # Google Apps Script (already deployed)
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## ⚙️ Configuration (Already set in App.jsx)

| Key | Value |
|-----|-------|
| WhatsApp Number | +91 9840957644 |
| Google Apps Script URL | Deployed ✅ |
| Google Maps Link | https://maps.app.goo.gl/vaAP2ubRX11v4khbA |

---

## 🔗 Feature Checklist

| Feature | Status |
|---------|--------|
| Sticky header navigation | ✅ |
| Mobile responsive menu | ✅ |
| Hero → WhatsApp (prefilled) | ✅ |
| Hero → Book Appointment (scrolls + selects) | ✅ |
| Quick Action Bar (4 buttons) | ✅ |
| Service cards with highlight on nav click | ✅ |
| Clinic Details → scrolls to About | ✅ |
| Order Medicine → scrolls to Form + selects service | ✅ |
| Book Lab Test → scrolls to Form + selects service | ✅ |
| Google Sheets save (no-cors GET) | ✅ |
| Dynamic WhatsApp message from form | ✅ |
| Google Maps embed | ✅ |
| Open in Maps → correct location link | ✅ |
| Footer quick links all functional | ✅ |
| Smooth scroll on all buttons | ✅ |
| Cross-browser compatible | ✅ |

---

## 📊 Google Sheets (Code.gs)

Already deployed. Sheet tab "Responses" is auto-created with columns:
`Timestamp | Name | Service | Phone Number | Message`

---

## 🚢 Deploying to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or drag the `/dist` folder into [Netlify Drop](https://app.netlify.com/drop).
