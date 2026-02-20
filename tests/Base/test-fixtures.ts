import {test as base, chromium, Browser, Page} from '@playwright/test';

type MyFixtures = {
    page: Page;
};

export const test = base.extend<MyFixtures>({
    page: async ({}, use) =>
    {

        //Launch browser
        const browser: Browser = await chromium.launch({headless: false});

        //Create fresh browser session
        const context = await browser.newContext();
        const page = await context.newPage();

        //Navigate to URL
        await page.goto('https://practicetestautomation.com/practice-test-login/');

        //Pause here and hands this 'page' to the test
        await use(page);

        //After test finishes, code execution resumes here to clean up
        await browser.close();
    },
});

export {expect} from '@playwright/test';