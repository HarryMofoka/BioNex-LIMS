# BioNex LIMS

![BioNex LIMS Preview](https://github.com/HarryMofoka/BioNex-LIMS/assets/placeholder/preview.png) *(Placeholder for actual preview image)*

BioNex LIMS is a modern, secure, and intuitive Laboratory Information Management System (LIMS) designed to streamline laboratory workflows. This application was intelligently refactored from a static HTML prototype into a modular, production-ready React application using Vite and Tailwind CSS.

## 🚀 Features

- **Modern Glassmorphism UI:** Features a sleek, dark-themed, glass-effect interface with smooth micro-animations.
- **Interactive Dashboard:** Dynamic tab system (Track, Audit, Dash) showcasing functional inventory grids and performance metrics.
- **Component-Driven Architecture:** Codebase organized intelligently into reusable functional React components.
- **Responsive Layout:** Mobile-friendly design preserving aesthetic fidelity across devices.
- **Secure Codebase:** Follows strict React security practices by rendering data predictably without exposing vulnerabilities (no `dangerouslySetInnerHTML`).

## 🛠 Tech Stack

- **Framework:** [React 19](https://react.dev)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [@iconify/react](https://iconify.design/) + [Lucide React](https://lucide.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/)

## 📂 Project Structure

```bash
bionex-lims/
├── src/
│   ├── assets/       # Static media and icons
│   ├── components/   # Reusable UI parts
│   │   ├── home/     # Feature components for the landing page
│   │   └── layout/   # Layout elements like Header/Footer
│   ├── hooks/        # Custom React Hooks
│   ├── pages/        # High-level route components (e.g., HomePage.jsx)
│   ├── services/     # API/backend connection modules
│   ├── styles/       # Global CSS modules if needed
│   ├── App.jsx       # Main App and Routing Setup
│   ├── index.css     # Tailwind Imports & Global Design Tokens
│   └── main.jsx      # React Render Entry Point
├── package.json
├── vite.config.js
└── README.md
```

## 🏃 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HarryMofoka/BioNex-LIMS.git
   cd BioNex-LIMS
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## 🛡 Compliance

The platform's frontend skeleton supports building infrastructure for:
- **21 CFR Part 11** (Electronic Signatures & Traceability)
- **ISO 17025**
- **GLP/GMP** secure tracking

## 📜 License

This project is proprietary and intended for BioNex LIMS platform usage. All rights reserved.
