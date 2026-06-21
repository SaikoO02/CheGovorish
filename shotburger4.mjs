import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 700 } });
await page.goto('http://localhost:8080/pages/home/index.html', { waitUntil: 'load' });
await page.waitForTimeout(400);
await page.click('.menu-burger');
await page.waitForTimeout(300);
await page.screenshot({ path: `/tmp/open_home.png` });

const data = await page.evaluate(() => {
  const menu = document.querySelector('.menu');
  const cs = getComputedStyle(menu);
  return { rect: menu.getBoundingClientRect(), display: cs.display, classes: menu.className, items: menu.children.length };
});
console.log('HOME', JSON.stringify(data));
await browser.close();
