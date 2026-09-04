import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { copyFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

// Клиентские маршруты (/terms, /privacy, ...) должны открываться по прямой
// ссылке на любом статическом хостинге, а его поведение заранее неизвестно.
// Поэтому index.html дублируется тремя способами: как 404.html (Timeweb Apps,
// Cloudflare Pages, Netlify), как <route>/index.html (обычный nginx с
// индексными файлами) и как <route>.html (nginx с try_files $uri.html).
const CLIENT_ROUTES = ['legal', 'terms', 'privacy', 'cookies']

function spaFallback() {
  return {
    name: 'spa-fallback',
    closeBundle() {
      const dist = resolve('./dist')
      const indexHtml = resolve(dist, 'index.html')

      copyFileSync(indexHtml, resolve(dist, '404.html'))

      for (const route of CLIENT_ROUTES) {
        mkdirSync(resolve(dist, route), { recursive: true })
        copyFileSync(indexHtml, resolve(dist, route, 'index.html'))
        copyFileSync(indexHtml, resolve(dist, `${route}.html`))
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), spaFallback()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000
  }
})
