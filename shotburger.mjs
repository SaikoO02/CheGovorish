import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 700 } });
for (const url of ['http://localhost:8080/pages/articles/index.html', 'http://localhost:8080/pages/glossary/index.html', 'http://localhost:8080/pages/home/index.html']) {
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForTimeout(500);
  const name = url.split('/pages/')[1].split('/')[0];
  await page.screenshot({ path: `/tmp/burger_${name}.png` });
}
await browser.close();
