// my-test.ts
import { test as base } from '@playwright/test';
import { RegistrationPage } from './pages/Registration.page';

type Fixtures = {
    registrationPage: RegistrationPage;
};

export const test = base.extend<Fixtures>({
    registrationPage: async ({ page }, use) => new RegistrationPage()
})

export { expect } from '@playwright/test';