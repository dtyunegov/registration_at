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

    Array(
        "Log",
        "LOGIN",
        "login",
        "LoGin",
        "login-login",
        "login_login",
        "login login",
        "login123"
    ).forEach(value => {
        test(`Login is correct. Value: ${value}`, async ({ page, registrationPage, alert }) => {
            await registrationIsSuccess(page, alert, registrationPage, value, "test@mail.ru", "Password123")
        })
    })

    test(`Login is incorrect.`, async ({ page, registrationPage }) => {
        await page.fill(registrationPage.selectors.login, "!@#")
        expect(await page.textContent(registrationPage.selectors.login + registrationPage.selectors.error)).toBe(messages.login.incorrect)
    })

    Array(
        "qwerty@mail.ru",
        "qwe.qwe@mail.ru"
    ).forEach(email => {
        test(`Email is correct. element: ${email}`, async ({ page, registrationPage, alert }) =>
            await registrationIsSuccess(page, alert, registrationPage, "Login", email, "Password123")
        )
    })
})

async function registrationIsSuccess(page, alert, registrationPage, login, email, password) {
    await page.fill(registrationPage.selectors.login, login)
    await page.fill(registrationPage.selectors.email, email)
    await page.fill(registrationPage.selectors.password, password)
    await page.fill(registrationPage.selectors.confirmPassword, password)
    await page.click(registrationPage.selectors.signUpButton);
    expect(await (await page.waitForSelector(alert.selectors.success)).isVisible()).toBeTruthy()
}