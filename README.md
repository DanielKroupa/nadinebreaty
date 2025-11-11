# Nadine Breaty - Portfolio Website

Moderní a elegantní portfolio webová stránka vytvořená s **Next.js 16**. Projekt prezentuje osobní brand Nadine Breaty s responsivním designem a interaktivními komponentami.

## 🌟 Vlastnosti

- ✨ **Moderní design** - Elegantní UI s Tailwind CSS
- 📱 **Responsivní layout** - Perfektní na všech zařízeních
- ⚡ **High Performance** - Optimalizováno s React Compiler
- 🎨 **Fonty** - Poppins, Roboto Mono, Dancing Script z Google Fonts
- 🎭 **Animace** - Hladké přechody a animace s Motion library
- 📸 **Instagram integrace** - Připojení k Instagram API
- 🎯 **Sekce stránky**:
  - Navbar - Navigační lišta
  - Main - Hlavní úvodní sekce
  - About Me - O influencerce
  - Content - Obsah a portfolio
  - Book - Kniha nebo čtení
  - Contact - Kontakt
  - Partners - Partneři
  - Footer - Patička

## 📋 Požadavky

- Node.js 18+
- npm, yarn, pnpm nebo bun

## 🚀 Spuštění projektu

### Vývojový server

```bash
npm run dev
# nebo
yarn dev
# nebo
pnpm dev
# nebo
bun dev
```

Otevřete [http://localhost:3000](http://localhost:3000) v prohlížeči a uvidíte výsledek.

### Produkční build

```bash
npm run build
npm run start
```

## 🛠️ Technologie

- **Framework**: [Next.js 16](https://nextjs.org)
- **React**: 19.2.0
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Language**: TypeScript 5
- **Icons**:
  - [@heroicons/react](https://heroicons.com) - 2.2.0
  - [react-icons](https://react-icons.github.io/react-icons) - 5.5.0
- **Animace**: [Motion](https://www.motion.dev) - 12.23.24
- **Compiler**: React Compiler (Babel plugin)
- **Linter**: ESLint 9

## 📁 Struktura projektu

```
src/
├── app/
│   ├── components/           # React komponenty
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
│   ├── globals.css          # Globální styly
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Hlavní stránka
public/
├── icons/                   # SVG ikony
└── img/
    └── partners/            # Obrázky partnerů
```

## 🎨 Customizace

### Fonty

Fonty jsou konfigurované v `src/app/layout.tsx`. Aktuálně jsou používány:

- **Poppins** - Sans-serif font
- **Roboto Mono** - Monospace font
- **Dancing Script** - Dekorativní font

### Barvy a styly

Tailwind CSS konfigurace a vlastní styly jsou v `src/app/globals.css`.

## 🔧 Instalace a Setup

1. Klonuj repository:

```bash
git clone <repository-url>
cd nadinebreaty
```

2. Nainstaluj závislosti:

```bash
npm install
```

3. Spusť vývojový server:

```bash
npm run dev
```

4. Otevři [http://localhost:3000](http://localhost:3000)

## 📄 Licence

Projekt je soukromý. Všechna práva vyhrazena.
