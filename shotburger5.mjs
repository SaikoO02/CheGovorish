import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 700 } });
await page.goto('http://localhost:8080/pages/articles/index.html', { waitUntil: 'load' });
await page.waitForTimeout(400);
await page.click('.menu-burger');
await page.waitForTimeout(300);
const data = await page.evaluate(() => {
  const menu = document.querySelector('.menu');
  const cs = getComputedStyle(menu);
  const header = document.querySelector('.header');
  return {
    rect: menu.getBoundingClientRect(),
    display: cs.display,
    position: cs.position,
    classes: menu.className,
    items: menu.children.length,
    headerPos: getComputedStyle(header).position,
    bodyClass: document.body.className,
  };
});
console.log('ARTICLES', JSON.stringify(data, null, 2));
await browser.close();
