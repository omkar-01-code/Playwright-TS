import { test,expect} from '@playwright/test';

test('test', async ({ page }) =>{

    await page.goto('https://www.amazon.com/');
    await page.getByRole('searchbox', {name: 'Search Amazon'}).fill('samsung');
    await page.getByRole('button', {name: 'samsung galaxy s25 ultra', exact: true}).click();
    await page.locator('#a-autoid-1-announce').click();

    await page.getByRole('link', {name: 'item in cart'}).click();
    await page.getByLabel('Shopping cart', {exact: true}).locator('label i').click();

});