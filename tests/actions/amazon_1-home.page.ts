import { Page } from '@playwright/test';
import { AmazonLocators } from '../locators/amazon_1.locators';

export class HomePage {

    //constructor to initialize class with playwright page instance and private to only access within specific class 
    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('/');
    }

    async searchIPhone() {
        const searchBox = this.page.getByRole('searchbox', { name: AmazonLocators.home.searchBox });
        await searchBox.click();
        await searchBox.fill('iphone');
        
        //wait for specific suggestion button to appear
        const suggestion = this.page.getByRole('button', { name: AmazonLocators.home.iphoneSuggestion });
        await suggestion.waitFor({ state: 'visible' });
        await suggestion.click();
    }
}