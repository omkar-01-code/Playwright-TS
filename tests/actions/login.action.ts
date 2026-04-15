import {Page} from '@playwright/test';
import { LoginLocator } from '../locators/login.locator';

export class LoginAction {

    readonly page: Page;
    readonly locator: LoginLocator;

    constructor(page: Page) {

        this.page = page;

        //Link locators to specific page being used
        this.locator = new LoginLocator(page);

    }

        //method to perform the login sequence
        async login(username: string, password: string) {

        //Use variables passed into the function
        await this.locator.usernameInput.fill(username);
        await this.locator.passwordInput.fill(password);
        await this.locator.loginButton.click();
    }
}