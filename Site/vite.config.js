import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/", // coloque o nome exato do seu repositório no GitHub
   plugins: [react()],
  assetsInclude: ['**/*.exe'], // Permite que o Vite reconheça .exe como asset
  server: {
    headers: {
      // Headers corretos para download de executáveis
      'Content-Type': 'application/octet-stream',
    }
  }
})

