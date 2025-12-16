
/// <reference types="vite-plugin-svgr/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSvgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteSvgr()],
})
