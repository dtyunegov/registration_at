// my-test.ts
import { test as base } from '@playwright/test';
import AlertBlock from './pages/blocks/alert.block';
import RegistrationPage from '../project/pages/Registration.page';

type Fixtures = {
    registrationPage: RegistrationPage;
    alert: AlertBlock;
};

export const test = base.extend<Fixtures>({
    registrationPage: async ({ }, use) => { await use(new RegistrationPage()) },
    alert: async ({ }, use) => { await use(new AlertBlock()) }
})

export { expect } from '@playwright/test';