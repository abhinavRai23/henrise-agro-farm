# Henrise Agro Farm Portal

A modern, responsive, and performance-optimized B2B wholesale landing page and compliance portal for **Henrise Agro Farm**, a leading proprietorship owned by **Mo Ashraf** based in Azamgarh, Uttar Pradesh. 

The application is built to meet strict digital compliance policies (Terms, Privacy, Refund, and Shipping guidelines) and features an interactive B2B inquiry system integrated with Google Sheets and automated email alerts.

---

## 🛠️ Technology Stack & Architecture

- **Core Framework**: React 18 + Vite 8 (Ultra-fast Hot Module Replacement & build performance)
- **Routing**: Lightweight, custom path-based routing (handling transitions between the home sections and dedicated compliance documents)
- **Icons**: Lucide React for consistent and crisp vector icons
- **Styling**: Pure Vanilla CSS, featuring a responsive mobile-first grid, card transitions, glassmorphic navigations, and optimized layout alignment.
- **Assets**: High-performance, compressed JPEG operational assets with native `loading="lazy"` and LCP optimization (`fetchPriority="high"`).

---

## 📂 Key Project Files

- **[src/components/Contact.jsx](file:///Users/abhinavrai/Developer/henrise-agro-farm/src/components/Contact.jsx)**: Houses the registration details, Google Maps embed, and the B2B inquiry form.
- **[src/components/PolicyPage.jsx](file:///Users/abhinavrai/Developer/henrise-agro-farm/src/components/PolicyPage.jsx)**: A dedicated template rendering legal policies (Terms & Conditions, Privacy Policy, Shipping/Delivery Policy, Cancellation/Refund Policy) with mobile breadcrumb navigation.
- **[src/components/PricingTable.jsx](file:///Users/abhinavrai/Developer/henrise-agro-farm/src/components/PricingTable.jsx)**: Shows catalog items (Chicks, Feed, Veterinary Medicines) with dynamic market rate indicators.
- **[google_sheets_setup.txt](file:///Users/abhinavrai/Developer/henrise-agro-farm/google_sheets_setup.txt)**: Guide outlining the Google Sheets & Apps Script integration.
- **[public/sitemap.xml](file:///Users/abhinavrai/Developer/henrise-agro-farm/public/sitemap.xml)** & **[public/robots.txt](file:///Users/abhinavrai/Developer/henrise-agro-farm/public/robots.txt)**: Crawlability configuration for SEO.
- **[public/manifest.json](file:///Users/abhinavrai/Developer/henrise-agro-farm/public/manifest.json)**: Standard PWA configurations.

---

## 📊 B2B Inquiry Form & Google Sheets Integration

The B2B Inquiry form sends submissions directly to a Google Sheet and triggers an instant email alert to `henriseagrofarm@gmail.com`.

### ⚠️ TODO: Setup Google Apps Script Web App

To make the contact form active:
1. **Google Sheet Setup**: Create a sheet named `Henrise Agro Farm B2B Inquiries` with headers: `Date/Time`, `Contact Person Name`, `Shop/Business Name`, `Mobile Number`, `Primary Requirement`, and `Requirement Details / Message`.
2. **Apps Script**: Open **Extensions** -> **Apps Script** in your spreadsheet, clear any default script, and paste the code from [google_sheets_setup.txt](file:///Users/abhinavrai/Developer/henrise-agro-farm/google_sheets_setup.txt).
3. **Deploy**:
   - Click **Deploy** -> **New deployment**.
   - Select type **Web app**.
   - Set **Execute as** to `Me` and **Who has access** to `Anyone`.
   - Click **Deploy** and authorize permissions.
4. **Link URL**:
   - Copy the generated Web App URL (`https://script.google.com/macros/s/.../exec`).
   - Open [src/components/Contact.jsx](file:///Users/abhinavrai/Developer/henrise-agro-farm/src/components/Contact.jsx).
   - Paste the URL into the `GOOGLE_SCRIPT_URL` constant:
     ```javascript
     const GOOGLE_SCRIPT_URL = 'YOUR_EXECUTION_URL_HERE';
     ```

*Note: [google_sheets_setup.txt](file:///Users/abhinavrai/Developer/henrise-agro-farm/google_sheets_setup.txt) contains the complete, ready-to-use Apps Script codebase and is added to `.gitignore` to prevent exposing your private deployment endpoints.*

---

## 🚀 Execution & Command Reference

### Local Development
To launch the hot-reloading development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
To compile the codebase into highly compressed, production-ready static assets:
```bash
npm run build
```
The output assets will be built into the `dist/` directory, optimized for performance and fast Largest Contentful Paint (LCP).

### Production Preview
To run a local server previewing the compiled production bundle:
```bash
npm run preview
```

---

## ⚡ Performance & SEO Features

1. **LCP Hero Optimization**: The hero background has a high fetch priority (`fetchPriority="high"`) and preload cues to optimize Core Web Vitals.
2. **Lazy Loading**: Secondary images and maps use native browser lazy loading (`loading="lazy"`) and explicit dimensions to avoid layout shifts.
3. **PWA & Search**: Fully compliant with crawlable sitemaps, robots configurations, and app manifests.
