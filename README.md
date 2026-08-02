# Anas Ghayas — Professional Portfolio

A premium, single-page portfolio designed as a developer dossier/terminal metaphor. Featuring monospace typography, a warm parchment background texture, custom micro-animations, and responsive layout scaling.

---

## 🚀 Live Demo & Build Specs

* **Stack**: React 19 + Vite 8 + Tailwind CSS + Framer Motion
* **Production Build Command**: `npm run build` (bundles assets into static HTML/CSS/JS in `dist/` in under a second)

---

## 🛠️ Key Features & Components

### 1. Dynamic Glassmorphic Navbar
* Fixed-position navigation links mapped with scroll observers.
* Responsive mobile hamburger toggle menu drawer.
* Dynamic frosted glass background (using `rgba` alpha channels and backdrop blur filters) that adjusts transparently when scrolling.
* Link cursor pointers and smooth navigation scroll offsets.

### 2. Typographic Hero Section
* Blinking monospace console cursor signature.
* Polaroid-style tilted photo frame (`profile.png`).
* Social links array (GitHub, LinkedIn, Codeforces, LeetCode) and dynamic network status badge.

### 3. Log Metadata & Skill Dashboard
* **System Metadata (`SYSTEM_METADATA.LOG`)**: Stacks into block components on mobile screen sizes to prevent truncation, showing location, email, phone number, and discipline.
* **Skill Chips**: Monospace categorizations (Languages, Frontend, Backend, Databases, Tools) that highlight and lift slightly on hover.
* **Competitive Ratings (`COMPETITIVE_PROG.CFG`)**: Custom CFG card display showing active ratings (Codeforces Pupil, LeetCode, CodeChef 3-Star) with platform-specific branding colors.

### 4. Interactive Project Showcase
* Clean landscape frames showing active projects: **DropNest**, **CoinPulse**, **ParkEase**, and **GoVroom**.
* **Lightbox Preview**: Clicking any project image triggers a smooth overlay modal (powered by Framer Motion) which expands the screenshot, avoiding side layout cuts. Clicking outside closes the modal.
* Typographic bracketed action links (`[ GITHUB ]` and `[ LIVE DEMO ]`).

### 5. Academic & Leadership Timeline
* **Academics (`ACADEMIC_RECORD.TXT`)**: Info card showing BIT Mesra, Integrated Master of Science, Mathematics & Computing, and CGPA metrics.
* **Leadership Timeline (`LEADERSHIP_VOLUNTEER.CFG`)**: A custom left-aligned dashed vertical line timeline highlighting coding workshops (300+ students), club recruiting organizations (IET & IEEE), and NSS volunteering.

### 6. Interactive Contact Segment & Footer
* Collaboration proposal dashboard.
* Typographic large email block `[ ANASGHAYAS2004@GMAIL.COM ]`.
* **Download PDF Resume**: Serves `/AnasGhayas_Resume.pdf` from the public directory directly to the user's local device.
* Date-stamp tracking footers showing your signature copyrights.

---

## 💻 Local Development Setup

To run this repository locally on your machine:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

3. **Check on your Phone (Local Network)**:
   Ensure your phone is connected to the same Wi-Fi network, and expose the server:
   ```bash
   npm run dev -- --host
   ```
   Navigate to the network IP (e.g., `http://192.168.x.x:5173/`) on your mobile browser.

4. **Verify / Compile production build**:
   ```bash
   npm run build
   ```
   This generates the optimized bundle in the `/dist` folder, ready to drag-and-drop or upload directly to **Vercel**, **Netlify**, or **GitHub Pages**.
