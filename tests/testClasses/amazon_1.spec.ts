import { test, expect } from '../Base/amazon_1-test-base';

test.describe('Checkout Flow', () => {

    test('Purchase Flow', async ({ homePage, productPage, browserName }) => {

        if (browserName === 'firefox') {
            test.skip();
        }

        //navigate and search
        await homePage.navigate();
        await homePage.searchIPhone();

        //select first result and open new tab
        const activePage = await productPage.selectFirstProduct();

        //interact on new tab
        await productPage.addToCart(activePage);
        await productPage.proceedToCheckout(activePage);

        //varify navigate to login/signup page
        await expect(activePage).toHaveURL(/.*signin.*/);
    });
});
