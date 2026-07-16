# 🌌 Asmi Katke | Interactive 3D Portfolio

Welcome to my personal developer portfolio website! Built with **React 19**, **Vite 8**, **Framer Motion**, and **Three.js (React Three Fiber)**, this site features modern glassmorphism design, interactive micro-animations, and 3D visual graphics to showcase my projects, skills, and experience.

---

## 🚀 Live Demo

👉 **Explore the Live Site:** https://asmi-katke.vercel.app/

---

## 🛠️ Tech Stack & Architecture

<div align="center">
  <img src="https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-12.0-F107A3?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Three.js-0.184-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
</div>

### Key Features:
- **3D Graphics & Canvas:** Utilizes React Three Fiber (`@react-three/fiber` & `@react-three/drei`) for rendering abstract interactive 3D models.
- **Micro-animations:** Framer Motion powers smooth page transitions, entrance animations, and interactive hover effects.
- **Fully Responsive:** Sleek, high-performance layout optimized across mobile, tablet, and desktop viewports.

---

## 📂 Featured Projects Showcase

Click on any category below to expand project details, view technologies used, and find links to the source code and live demo!

<details>
<summary><b>🏢 Smart Cities & Civic Technology Projects</b></summary>
<br>

### 🏢 Nagarsamadhan
AI-Powered Smart City Reporting Platform for routing public infrastructure issues via frictionless QR codes.
- **Tech Stack:** `#react` `#tailwind` `#ai`
- **GitHub Repository:** [AsmiKatke/NagarSamadhan](https://github.com/AsmiKatke/NagarSamadhan)
- **Live Link:** [View Live Site](https://asmikatke.github.io/NagarSamadhan/)

### 🛣️ Real-time Pothole Detection
Computer vision system utilizing YOLO algorithms to identify road hazards in varied lighting conditions.
- **Tech Stack:** `#python` `#opencv` `#yolov4`
- **GitHub Repository:** [AsmiKatke/RoadGuard-AI](https://github.com/AsmiKatke/RoadGuard-AI)
- **Demo Link:** [View Pothole Detection Demo](https://tinyurl.com/Asmi-Katke-Pothole-Detection)

</details>

<details>
<summary><b>🐋 Aquaculture & Data Dashboards</b></summary>
<br>

### 🦐 Prawn Feed Optimization
Data dashboard calculating biomass and optimizing aquaculture feed distribution using mathematical algorithms.
- **Tech Stack:** `#streamlit` `#python` `#data`
- **GitHub Repository:** [AsmiKatke/Prawns-Feed-Optimization-Dashboard](https://github.com/AsmiKatke/Prawns-Feed-Optimization-Dashboard)
- **Live Dashboard:** [View Prawn Dashboard](https://asmikatke.github.io/Prawns-Feed-Optimization-Dashboard/?v=3)

</details>

<details>
<summary><b>🚆 AI & Public Infrastructure Solutions</b></summary>
<br>

### 🚉 Crowd Prediction in Indian Railways
Full-stack platform tracking commuter density in real-time using custom-trained YOLOv8 models.
- **Tech Stack:** `#yolov8` `#react` `#python`
- **GitHub Repository:** [AsmiKatke/Crowd-Prediction-in-Indian-Railways](https://github.com/AsmiKatke/Crowd-Prediction-in-Indian-Railways)
- **Live Demo:** [View Crowd Predictor](https://asmikatke.github.io/Crowd-Prediction-in-Indian-Railways/)

</details>

<details>
<summary><b>📟 IoT, Hardware & Portals</b></summary>
<br>

### 🚨 Accident Alert Tracking System
IoT safety solution using ESP32 and MPU6050 to detect crashes and send GPS coordinates via GSM.
- **Tech Stack:** `#c++` `#esp32` `#iot`

### 🏆 Innovation Mahakumbh Portal
Official university-wide portal managing event schedules and registrations for high-traffic audiences.
- **Tech Stack:** `#javascript` `#html` `#css`
- **GitHub Repository:** [AsmiKatke/Official_Innovation_Mahakumbh](https://github.com/AsmiKatke/Official_Innovation_Mahakumbh)
- **Live Portal:** [View Mahakumbh Portal](https://asmikatke.github.io/Official_Innovation_Mahakumbh/)

</details>

---

## ⚙️ Setup & Local Development

Follow these steps to run the portfolio website locally on your machine.

<details>
<summary><b>📖 Show Prerequisites & Run Instructions</b></summary>

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 1. Clone the Repository
```bash
git clone https://github.com/AsmiKatke/asmi-portfolio.git
cd asmi-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
Start the local server with hot module replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to the address shown in your terminal (typically `http://localhost:5173`).

### 4. Build for Production
To build a highly optimized bundle for production:
```bash
npm run build
```
The output files will be created in the `dist/` directory.

### 5. Local Preview
To preview the built site locally before deploying:
```bash
npm run preview
```

</details>

---

## 🎨 Design Theme & Core Animation Styles

The application incorporates a sleek dark mode theme paired with glowing glassmorphism effects:
- **Neon Gradients:** High-contrast layout using violet, cyan, and yellow gradients for an immersive space aesthetic.
- **Interactive Hover Effects:** Project cards hover dynamically and lift with subtle glowing shadow box effects:
  ```css
  hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]
  ```
- **3D Orbit Canvas:** Smooth interactive 3D elements utilizing Vite-compatible WebGL rendering.

---

<div align="center">
  Developed with ❤️ by <a href="https://github.com/AsmiKatke">Asmi Katke</a>
</div>
