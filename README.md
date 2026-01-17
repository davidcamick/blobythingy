# blobythingy

A blank starter Next.js site with Tailwind CSS and Vite installed and connected.

## Tech Stack

- **Next.js 16.1.3** - React framework with App Router
- **React 19.2.3** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite 7.3.1** - Build tool and dev server
- **TypeScript 5** - Type safety

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/davidcamick/blobythingy.git
cd blobythingy
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Create a production build:
```bash
npm run build
```

### Start Production Server

After building, start the production server:
```bash
npm start
```

### Lint

Run ESLint:
```bash
npm run lint
```

## Project Structure

```
blobythingy/
├── app/                  # Next.js App Router directory
│   ├── globals.css      # Global styles with Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page component
├── public/              # Static assets
├── next.config.ts       # Next.js configuration
├── postcss.config.mjs   # PostCSS configuration for Tailwind
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Project dependencies and scripts
```

## Configuration Files

- **next.config.ts** - Next.js configuration
- **vite.config.ts** - Vite bundler configuration
- **postcss.config.mjs** - PostCSS configuration for Tailwind
- **tsconfig.json** - TypeScript compiler options
- **eslint.config.mjs** - ESLint configuration

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
