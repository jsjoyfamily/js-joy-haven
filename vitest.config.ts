import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./client/test-setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
})
