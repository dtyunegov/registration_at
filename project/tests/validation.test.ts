import { test, expect } from "../fixtures";
import messages from "../constants/messages.json"

test.describe('Registration form', async () => {

    test.beforeEach(async ({ registrationPage, page }) => {
        await page.goto(registrationPage.url);
    })

    test('Validation. Empty fields', async ({ page, registrationPage }) => {
        await page.click(registrationPage.selectors.signUpButton)
        expect.soft(await page.textContent(registrationPage.selectors.login + registrationPage.selectors.error)).toBe(messages.login.isRequired)
        expect.soft(await page.textContent(registrationPage.selectors.email + registrationPage.selectors.error)).toBe(messages.email.isRequired)
        expect.soft(await page.textContent(registrationPage.selectors.password + registrationPage.selectors.error)).toBe(messages.password.isRequired)
        expect.soft(await page.textContent(registrationPage.selectors.confirmPassword + registrationPage.selectors.error)).toBe(messages.confipassword.isRequired)
    })

    new Array(
        "Log",
        "LOGIN",
        "login",
        "LoGin",
        "login-login",
        "login_login",
        "login login"
    ).forEach(value => {
        test(`Login is correct. Value: ${value}`, async ({ page, registrationPage, alert }) => {
            await page.fill(registrationPage.selectors.login, value)
            await page.fill(registrationPage.selectors.email, "email@test.com")
            await page.fill(registrationPage.selectors.password, "Password123$")
            await page.fill(registrationPage.selectors.confirmPassword, "Password123$")
            await page.click(registrationPage.selectors.signUpButton);
            expect(await (await page.waitForSelector(alert.selectors.success)).isVisible()).toBeTruthy()
        })
    })

    test(`Login is incorrect.`, async ({ page, registrationPage, alert }) => {
        await page.fill(registrationPage.selectors.login, "!@#")
        expect(await (await page.waitForSelector(alert.selectors.success)).isVisible()).toBeTruthy()
    })
})