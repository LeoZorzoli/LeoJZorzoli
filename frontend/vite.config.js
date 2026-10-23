import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Los íconos van como archivos aparte: solo se descargan en la página que los usa.
    assetsInlineLimit: 0,
  },
})
