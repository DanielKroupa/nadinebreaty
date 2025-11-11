# Nadine Breaty - Portfolio Website

A modern and elegant portfolio website designed in Figma and built with **Next.js 16**. This project showcases the personal brand of Nadine Breaty with a responsive design and interactive components.

## 🌟 Features

- ✨ **Modern Design** – Elegant UI with Tailwind CSS
- 📱 **Responsive Layout** – Perfect on all devices
- ⚡ **High Performance** – Optimized with React Compiler
- 🎨 **Fonts** – Poppins, Roboto Mono, Dancing Script from Google Fonts
- 🎭 **Animations** – Smooth transitions and animations with Motion library
- 🎯 **Page Sections**:
  - Navbar – Navigation bar
  - Main – Hero section
  - About Me – About the influencer
  - Content – Portfolio and content
  - Book – Book or reading section
  - Contact – Contact info
  - Partners – Partners and collabs
  - Footer – Footer

## 📋 Requirements

- Node.js 18+
- npm, yarn, pnpm, or bun

## 🚀 Getting Started

### Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

```bash
npm run build
npm run start
```

## 🛠️ Technologies

- **Framework**: [Next.js 16](https://nextjs.org)
- **React**: 19.2.0
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Language**: TypeScript 5
- **Icons**:
  - [@heroicons/react](https://heroicons.com) – 2.2.0
  - [react-icons](https://react-icons.github.io/react-icons) – 5.5.0
- **Animations**: [Motion](https://www.motion.dev) – 12.23.24
- **Compiler**: React Compiler (Babel plugin)
- **Linter**: ESLint 9

## 📁 Project Structure

```
src/
├── app/
│   ├── components/           # React components
│   │   ├── AboutMe.tsx
│   │   ├── Book.tsx
│   │   ├── Contact.tsx
│   │   ├── Content.tsx
│   │   ├── Footer.tsx
│   │   ├── Main.tsx
│   │   ├── Navbar.tsx
│   │   └── Partners.tsx
│   ├── hooks/               # Custom React hooks
│   │   └── useInView.ts
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
public/
├── icons/                   # SVG icons
└── img/
    └── partners/            # Partners images
```

## 🎨 Customization

### Fonts

Fonts are configured in `src/app/layout.tsx`. Currently used fonts:

- **Poppins** – Sans-serif font
- **Roboto Mono** – Monospace font
- **Dancing Script** – Decorative font

## 🔧 Installation & Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd nadinebreaty
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## 📄 License

This project is private. All rights reserved.
