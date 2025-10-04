import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'; // Importation du plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
     hostname: 'https://gms57.fr', 
    })
  ],
})
