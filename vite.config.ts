/// <reference types="vitest" />
import {defineConfig} from "vite";
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  test: {
    include: [
      '__test__/**/*.{test,spec}.ts',
    ],
    environment: 'happy-dom',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@test': fileURLToPath(new URL('./__test__', import.meta.url))
    }
  }
})
