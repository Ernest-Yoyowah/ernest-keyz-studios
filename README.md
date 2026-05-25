# Ernest Keyz Studios

Product website for **Ernest Keyz Studios** — an independent music software company building tools for live performers and producers who rely on MIDI hardware.

Built with [Next.js 15](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [Framer Motion](https://www.framer.com/motion/).

---

## Products

| Product        | Status      | Description                                                                      |
| -------------- | ----------- | -------------------------------------------------------------------------------- |
| **PulseMIDI**  | Available   | Real-time MIDI diagnostic tool — standalone app, VST3, and CLAP plugin for macOS |
| **PulsePad**   | Coming Soon | Wireless MIDI control surface — turns phones and tablets into stage controllers  |
| **KeyMapper**  | Coming Soon | Visual MIDI split, layer, and remap editor — no DAW required                     |
| **SignalFlow** | Coming Soon | Node-based visual MIDI routing and processing engine                             |
| **ChordScope** | Coming Soon | Real-time chord detection and harmonic analysis                                  |

---

## Tech Stack

- **Framework** — Next.js 15 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **Animations** — Framer Motion
- **UI Components** — Radix UI / shadcn
- **Icons** — Lucide React

---

## Project Structure

```
app/
  page.tsx               # Home page
  about/                 # About page
  download/              # Download page (streams pkg with correct headers)
  products/              # Products listing
    pulsemidi/           # PulseMIDI product page
  api/
    download/            # API route — streams installer with Content-Length
components/
  home/                  # Home page sections
  layout/                # Header and Footer
  shared/                # Reusable components (ProductCard, AppMockup, etc.)
lib/
  product.ts             # Central version/filename constants — update here only
  utils.ts
public/
  install/               # .pkg installer files served via /api/download
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Version / Filename Control

All version strings and installer filenames are defined in one place:

```ts
// lib/product.ts
export const PULSEMIDI_VERSION = "1.2.0";
export const PULSEMIDI_FILE_NAME = `PulseMIDI-${PULSEMIDI_VERSION}-macOS.pkg`;
```

Bump the version here and everything — download page, product cards, API route, file info panel — updates automatically. The corresponding `.pkg` file in `public/install/` must also be renamed to match.

---

## Download Architecture

The installer is served via `app/api/download/route.ts` rather than directly from `/public`. This sets:

- `Content-Length` — browser shows real download progress
- `Content-Disposition: attachment` — forces a file download
- Streaming via `ReadableStream` — efficient for large binaries
