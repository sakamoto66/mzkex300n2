import { test, expect } from '@playwright/test';

test('wlan_off', async ({ page }) => {
  await page.goto(process.env.WLAN_URL);
  await page.frameLocator('iframe[name="iframe_ssid"]').locator('input[name="wlan_enable"] >> nth=0').click();
  await page.frameLocator('iframe[name="iframe_ssid"]').locator('input[type="button"]').click();
  await page.locator('input:has-text("適用")').click();
});

test('wlan_on', async ({ page }) => {
  await page.goto(process.env.WLAN_URL);
  await page.frameLocator('iframe[name="iframe_ssid"]').locator('input[name="wlan_enable"] >> nth=1').click();
  await page.frameLocator('iframe[name="iframe_ssid"]').locator('input[type="button"]').click();
  await page.locator('input:has-text("適用")').click();
});
