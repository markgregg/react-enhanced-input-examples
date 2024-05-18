import { defineConfig } from 'vite'
import eslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "react-enhanced-input-example",
  plugins: [
    react(),
    eslintPlugin(),
  ],
})