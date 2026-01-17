import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration
// Note: Next.js uses its own bundler (Turbopack/Webpack) by default.
// This Vite config is included as requested but is not used by Next.js.
// If you want to use Vite with Next.js, consider using next-with-vite or similar integration.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
