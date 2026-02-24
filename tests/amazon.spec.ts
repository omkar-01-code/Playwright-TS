import { test,expect} from '@playwright/test';

test('test', async ({ page }) =>{

    await page.goto('https://www.amazon.com/');
    await page.getByRole('searchbox', {name: 'Search Amazon'}).fill('samsung');
    await page.getByRole('button', {name: 'samsung galaxy s25 ultra', exact: true}).click();
    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await page.locator('#nav-cart').click();
    
    const proceedToCheckout = page.getByRole('button', { name: 'Proceed to checkout' });
    
    await expect(proceedToCheckout).toBeVisible();
    await proceedToCheckout.click();
});