import { test, expect } from '@playwright/test';

test.describe('Registration form', async () => {
    test('screenshot', async ({ page }) => {
    await page.goto('https://dtyunegov.github.io/registration_form/');
    await page.waitForLoadState("networkidle")
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot("Registration.png")
    })
})