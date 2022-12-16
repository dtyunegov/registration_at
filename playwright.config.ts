import type { PlaywrightTestConfig } from '@playwright/test';
import dotevn from 'dotenv'

dotevn.config()

dotevn.config()
const config: PlaywrightTestConfig = {
  testMatch: ["project/tests/**.test.ts"],
  timeout: 30 * 1000,
  reporter: 'html',
  use: {
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    browserName: "chromium",
    headless: false
  }
}

export default config;