import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

try {
  dotenv.config({ debug: false, path: '.env', override: false });
} catch (error) {
  console.warn('Warning: dotenv.config() failed:', error instanceof Error ? error.message : String(error));
}

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  reporter: [
    ['list'],
    ['html', { open: 'on-failure' }]
  ],

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 1,
  workers: process.env.CI ? 1 : undefined,

  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 20000,
    baseURL: process.env.BASE_URL,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',

    /* --- AMAZON BOT DETECTION WORKAROUNDS --- */
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    extraHTTPHeaders: {
      'Accept-Language': 'en-US,en;q=0.9',
    },
    /* ---------------------------------------- */
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15',
      },
    },
  ],
});