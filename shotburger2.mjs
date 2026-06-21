import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 200 } });
for (const [name,url] of [['articles','http://localhost:8080/pages/articles/index.html'], ['glossary','http://localhost:8080/pages/glossary/index.html'], ['home','http://localhost:8080/pages/home/index.html']]) {
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForTimeout(400);
  await page.screenshot({ path: `/tmp/crop_${name}.png`, clip: { x: 240, y: 0, width: 135, height: 100 } });
}
await browser.close();
