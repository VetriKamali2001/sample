import { test, expect, chromium } from '@playwright/test';

test('Login test', async () => {

  const browser = await chromium.launch({
    headless: false,
   // slowMo: 3000
  });

  const context = await browser.newContext({
    //recordVideo: { dir: 'video/' }
  });

  const page = await context.newPage();

  await page.goto("http://eaapp.somee.com/");
  await page.locator("a[class='nav-link text-white']", { hasText: 'Register' }).hover();
  await page.locator("a[class='nav-link text-white']", { hasText: 'Login' }).click();
  await page.locator("#UserName").fill("Kamali12421");
  await page.locator("#Password").fill("Kamali12421");
  await page.click("button:has-text('Sign In')");

 // expect(1).toBeLessThanOrEqual(1);

});
