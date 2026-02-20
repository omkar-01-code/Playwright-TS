import { test as base } from '@playwright/test';
import { ProductPage } from '../actions/amazon_1-product.page';
import { HomePage } from '../actions/amazon_1-home.page';

type MyFixtures = {

  homePage: HomePage;
  productPage: ProductPage;

};

export const test = base.extend<MyFixtures>({

  //custom fixture to initialize home page
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);

  },

  //custom fixture to initialize product page
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));

  },

});

export { expect } from '@playwright/test';