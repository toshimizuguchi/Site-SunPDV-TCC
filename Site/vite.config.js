import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/SITE-SUNPDV-TCC/", // coloque o nome exato do seu repositório no GitHub
})
