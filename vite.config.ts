import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve:{
    alias:{
      "@": path.resolve(__dirname, "./src"),
      "assets": path.resolve(__dirname, "./src/assets"),
      "components": path.resolve(__dirname, "./src/components"),
      "constant": path.resolve(__dirname, "./src/constant"),
      "pages": path.resolve(__dirname, "./src/pages"),
      "router": path.resolve(__dirname, "./src/router"),
      "schema": path.resolve(__dirname,"./src/schema"),
      "services": path.resolve(__dirname, "./src/services"),
      "utils": path.resolve(__dirname, "./src/utils"),
      "store": path.resolve(__dirname,"./src/store"),
      "hooks": path.resolve(__dirname,"./src/hooks")
    }
  }
})
