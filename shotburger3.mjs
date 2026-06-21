import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 700 } });
for (const [name,url] of [['articles','http://localhost:8080/pages/articles/index.html'], ['glossary','http://localhost:8080/pages/glossary/index.html']]) {
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForTimeout(400);
  await page.click('.menu-burger');
  await page.waitForTimeout(300);
  await page.screenshot({ path: `/tmp/open_${name}.png` });
}
await browser.close();
