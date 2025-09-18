import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace `Maha-portfolio` with your repo name
export default defineConfig({
  plugins: [react()],
  base: '/Maha-portfolio/', 
})
