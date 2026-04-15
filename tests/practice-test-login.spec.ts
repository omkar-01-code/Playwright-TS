import {test,expect} from '@playwright/test';

test ('test',async({page}) =>
{

    //Navigate to Page and wait for page to finish loading
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    //Find locator using getByRole and Enter user creds (username and password)
    await page.getByRole('textbox',{name:'username'}).fill('student');
    await page.getByRole('textbox',{name:'password'}).fill('Password123');

    //Find locator for submit button to login and click
    await page.getByRole('button',{name:'Submit'}).click();

    
    //Verify successful login by checking the presence of the success heading
    
    //await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');

    await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
});