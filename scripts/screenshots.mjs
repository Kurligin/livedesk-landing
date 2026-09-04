/**
 * Скриншоты лендинга на трёх ширинах.
 * Запуск: npm run build && npm run preview  → node scripts/screenshots.mjs
 */

import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'

const BASE_URL = process.env.BASE_URL || 'http://localhost:4173'
const OUT_DIR = './screenshots'

const VIEWPORTS = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'mobile-375', width: 375, height: 812 }
]

const PAGES = [
  { name: 'landing', path: '/' },
  { name: 'legal-index', path: '/legal' },
  { name: 'terms', path: '/terms' },
  { name: 'notfound', path: '/no-such-page' }
]

async function run() {
  await mkdir(OUT_DIR, { recursive: true })
  const browser = await chromium.launch()

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2
    })
    const page = await context.newPage()

    for (const target of PAGES) {
      await page.goto(`${BASE_URL}${target.path}`, {
        waitUntil: 'networkidle',
        timeout: 20000
      })
      await page.waitForTimeout(500)
      await page.screenshot({
        path: `${OUT_DIR}/${target.name}-${vp.name}.png`,
        fullPage: target.name === 'landing'
      })
      console.log('✓', target.name, vp.name)
    }

    await context.close()
  }

  await browser.close()
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
