import { Page } from '@playwright/test';
import { AmazonLocators } from '../locators/amazon_1.locators';

export class ProductPage {
    constructor(private page: Page) {}

    async selectFirstProduct(): Promise<Page> {
        const productLink = this.page.locator(AmazonLocators.product.searchResultLinks).first();
        await productLink.waitFor({ state: 'visible', timeout: 30000 });

        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            productLink.click(),
        ]);

        await newPage.waitForLoadState('load'); 
        return newPage;
    }

    async addToCart(targetPage: Page) {
        // .nth(1) selects the 2nd element found (0 is first, 1 is second)
        //this solve strict mode error and the unsupported token error
        const cartBtn = targetPage.locator(AmazonLocators.product.addToCartId).nth(1);
        
        //wait for it to attached to DOM
        await cartBtn.waitFor({ state: 'attached', timeout: 10000 });

        //scroll and click
        await cartBtn.scrollIntoViewIfNeeded();
        await cartBtn.click({ force: true });
    }

    async proceedToCheckout(targetPage: Page) {
        const proceedBtn = targetPage.locator(AmazonLocators.product.proceedToBuyFallback).first();
        await proceedBtn.waitFor({ state: 'visible', timeout: 10000 });
        await proceedBtn.click({ force: true });
    }
}
