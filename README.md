# 🎵 SVMPLER — Music Downloader UI

> A clean, modern UI for downloading high-quality music tracks powered by [yt-dlp](https://github.com/yt-dlp/yt-dlp).

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss)

---

## ✨ Features

- 🔗 Paste any YouTube or SoundCloud URL to download HQ tracks
- 🎼 Camelot Wheel key display with color-coded badges (e.g. `4A`, `11B`)
- 📊 Real-time download progress bar with success state
- ✅ URL validation with inline error feedback
- 🌙 Dark mode with Spotify-inspired design system
- 📱 Fully responsive layout

---

## 🖥️ Tech Stack

| Tool                                         | Purpose                 |
| -------------------------------------------- | ----------------------- |
| [React 18](https://react.dev)                | UI Framework            |
| [TypeScript](https://www.typescriptlang.org) | Type safety             |
| [Vite](https://vitejs.dev)                   | Build tool & dev server |
| [Tailwind CSS v4](https://tailwindcss.com)   | Styling                 |
| [shadcn/ui](https://ui.shadcn.com)           | Component library       |
| [Sonner](https://sonner.emilkowal.ski)       | Toast notifications     |
| [Lucide React](https://lucide.dev)           | Icons                   |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>=18`
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/EduardoCordova-DEV/music-downloader-ui.git

# Navigate into the project
cd music-downloader-ui

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 📁 Project Structure

```
src/
├── app/
│   └── components/
│       ├── Main.tsx          # Main page layout
│       ├── MusicCard.tsx     # Track card with progress
│       ├── DownloadInput.tsx # URL input with validation
│       └── KeyBadge.tsx      # Camelot wheel key badge
├── components/
│   └── ui/                   # shadcn/ui components
├── utils/
│   └── scripts.ts            # URL cleaning & helpers
├── index.css                 # Design system & theme
└── main.tsx
```

---

## 🎨 Design System

The UI uses a Spotify-inspired dark theme with custom CSS variables:

- **Primary green:** `hsl(141 73% 42%)`
- **Background:** `#151a28`
- **Gradients:** Radial green glow (top) + purple glow (bottom-right)
- **Camelot colors:** 24 unique colors mapping all 12 musical keys × Major/Minor

---

## 📦 Scripts

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## 🔌 Backend

This is a **UI-only** project. It is designed to connect to a backend service that wraps `yt-dlp`. You can plug in your own API by implementing the `onDownload` handler in `Main.tsx`.

A compatible backend example:

```ts
const handleDownload = async (url: string) => {
  setIsLoading(true)
  const response = await fetch('/api/download', {
    method: 'POST',
    body: JSON.stringify({ url }),
  })
  // handle response...
  setIsLoading(false)
}
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feat/my-feature`
3. Commit your changes: `git commit -m 'feat: add my feature'`
4. Push to the branch: `git push origin feat/my-feature`
5. Open a Pull Request

---

## 📄 License

MIT © [EduardoCordova-DEV](https://github.com/EduardoCordova-DEV)

---

<p align="center">Made with ❤️ for music lovers</p>
