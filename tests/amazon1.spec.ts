import {test, expect} from '@playwright/test';

test('test',async ({page}) => {

  //Navigate to Amazon  
  await page.goto('https://www.amazon.in/');

  //Locate searchBox and search iphone
  await page.getByRole('searchbox',{name: 'Search Amazon.in'}).fill('iphone');

  //click on suggestion
  await page.getByRole('button',{name: 'iphone 17 pro max'}).click();

  //click on add to cart
  await page.locator('#a-autoid-3-announce').click();

  //click on shopping cart
  await page.getByRole('link',{name: 'items in cart'}).click();

  //select checkbox
  await page.locator('label').filter({hasText: 'This order contains a gift'}).locator('i').click();

  //proceed to checkout
  await page.getByRole('button',{name: 'Proceed to Buy Buy Amazon'}).click();
});
