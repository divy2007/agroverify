# AgroVerify — Agricultural Input Integrity Platform

> **"Verify Before You Sow. Zero Counterfeit Inputs."**  
> An interactive point-of-purchase agricultural integrity platform extending government **SATHI** (Seed Authentication, Traceability & Holistic Inventory) registry data directly to Indian smallholder farmers.

---

## 📌 Project Overview
- **Project Name:** AgroVerify
- **Domain:** Agriculture / Agritech & Food Security
- **Domain Alignment:** Innovation & Design Thinking (IDT) — Review 2
- **Institution:** Silver Oak University
- **Team Name:** Agri_Developers
- **Target Audience:** Small & marginal Indian farmers (<2 hectares, 86% of Indian farming population), Krishi Vigyan Kendras (KVKs), Agriculture Enforcement Officers, and Certified Input Dealers.

---

## 🚨 The Core Problem
1. **Pervasive Counterfeits:** ~25–30% of pesticides and 1-in-8 seed batches in rural retail markets are counterfeit, expired, or substandard.
2. **Per-Acre Devastation:** Farmers lose an average of **₹8,000 to ₹12,000 per acre** when sown with spurious seeds or sprayed with adulterated chemicals.
3. **The SATHI Gap:** The Government of India's SATHI tracking database exists for certification and producer traceability, but had **zero farmer-facing point-of-sale verification interface**.
4. **Connectivity & Literacy Barriers:** Rural retail shops often have low or 2G connectivity; many farmers operate basic keypad feature phones without internet.

---

## 💡 The Solution: AgroVerify
AgroVerify provides **dual-access verification** in under 2 seconds:
- **Smartphone Web (PWA):** Quick QR code scan and alphanumeric batch checker with local offline caching.
- **Feature Phone IVR (*123*BATCH# / 1800-843-AGRO):** Interactive toll-free voice response in regional languages (**Gujarati, Hindi, Marathi, English**) with DTMF tone entry.
- **Enforcement Surveillance Portal:** Real-time counterfeit cluster heatmap and 1-tap raid dispatching for District Agriculture Officers.

---

## 🚀 Live Demo & How to Run

### Option 1: Run Locally
Simply open [`index.html`](index.html) in any browser (Google Chrome, Microsoft Edge, Firefox, Brave):
```bash
# Double-click index.html or open via terminal:
start index.html
```

### Option 2: Live on GitHub Pages
This repository is configured for instantaneous deployment via **GitHub Pages**:
1. Go to repository **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select `Deploy from a branch`.
3. Choose branch: `main` and folder: `/ (root)`.
4. Click **Save**. Within 1 minute, the site will be live at:
   `https://<your-username>.github.io/<repo-name>/`

---

## 🌟 Key Features

| Feature | Description |
| :--- | :--- |
| **SATHI Central Registry Sync** | Instant cross-reference against central seed, fertilizer, and pesticide registries. |
| **Offline-First Caching** | Local DB cache allows verification in zero-connectivity rural mandi zones. |
| **Color-Coded Verdict** | **Emerald Sprout (`#2A7B4C`)** for genuine govt certified lots; **Clay Terracotta (`#C84B31`)** for counterfeit warnings. |
| **1-Tap Agri Officer Alert** | Auto-GPS grievance reporting generating verifiable tracking tokens (e.g. `AGRO-GRV-2026-8941`). |
| **Downloadable Govt Certificate** | Cryptographically signed digital certificate with HMAC SHA-256 seal and print capability. |
| **Interactive Acreage Risk Calculator** | Calculates seasonal investment saved, crop loss prevented, and protected yield across major Indian crops (Bt Cotton, Wheat, Mustard, Soybean, Paddy). |
| **Interactive IVR Simulator** | Built-in Web Audio API DTMF dual-tone telephone generator and Web Speech Synthesis voice readout in Gujarati, Hindi, Marathi, and English. |
| **District Hotspot Surveillance** | Heatmap telemetry tracking confiscated stocks, active raids, and suspended fraudulent retailers. |
| **Certified Dealer Directory** | Verified retailer lookup by district with official government license numbers. |

---

## 🎨 Design System & Accessibility Palette

- **Rice Paper Cream (`#FBF9F4`):** Natural agricultural canvas minimizing glare under sunlight.
- **Deep Forest Moss (`#183D2B`):** Dominant high-trust brand color for headers and primary controls.
- **Warm Harvest Ochre (`#D9822B`):** High-intent interaction CTA accents.
- **Emerald Sprout (`#2A7B4C`):** Certified genuine status.
- **Clay Terracotta (`#C84B31`):** Counterfeit and seizure alert status.
- **Charcoal Bark (`#1E2522`):** Accessible outdoor high-contrast typography.

---

## 🛠️ Technology Stack
- **Frontend Structure:** Semantic HTML5 with OpenGraph & Schema.org metadata
- **Styling:** Vanilla CSS3 with CSS Custom Properties (zero bulky dependencies)
- **Application Logic:** Vanilla Modern ES6+ JavaScript
- **Audio & Voice Simulation:** Web Audio API (OscillatorNode DTMF generator) & Web Speech API (`SpeechSynthesis`)
- **Camera Module:** HTML5 `navigator.mediaDevices.getUserMedia` video reticle overlay

---

## 🎯 UN Sustainable Development Goal Alignment
- **UN SDG 2: Zero Hunger:** Protecting crop yields and smallholder farmer livelihoods from devastating crop failures caused by spurious inputs.
- **Digital Agriculture Mission:** Aligned with the Ministry of Agriculture & Farmers Welfare, Government of India.

---

## 👥 Team & Acknowledgments
- **Team Name:** Agri_Developers
- **Institution:** Silver Oak University
- **Course:** Innovation & Design Thinking (IDT) — Review 2
