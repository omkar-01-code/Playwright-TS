import { test, expect, type Page } from '@playwright/test';

test.describe('VectorShift Application', () => {

    //this is test data
    const CREDENTIALS = {
        email: 'omkarhg9@gmail.com',
        pass: 'Unicorn@5585',
        baseUrl: 'https://app.vectorshift.ai' ,
    };

    test('Application Workflow', async ({ page }) => {

        //timeout for sequence to handle SPA
        test.setTimeout(60000);

        // --- 1. verify login ---
        await page.goto(`${CREDENTIALS.baseUrl}/login`);

        const emailInput = page.getByRole('textbox', { name: /email/i });
        await emailInput.waitFor({ state: 'visible' });
        await emailInput.fill(CREDENTIALS.email);
        await page.getByRole('button', { name: /continue/i }).click();

        const passwordInput = page.getByRole('textbox', { name: /password/i });
        await passwordInput.waitFor({ state: 'visible' });
        await passwordInput.fill(CREDENTIALS.pass);
        
        await page.getByRole('button', { name: /sign in/i }).click();

        // --- verify dashboard landing
        await expect(page).toHaveURL(/.*dashboard/, { timeout: 15000 });
        console.log('✅ login user successful');


        // --- 2. create project ---
        const createProjectBtn = page.getByRole('button', { name: /create project/i }).first();
        await createProjectBtn.click();

        const projectNameInput = page.getByPlaceholder(/enter project name/i);
        await projectNameInput.waitFor({ state: 'visible' });
        await projectNameInput.fill('Automation_Logic_Test');
        
        await page.keyboard.press('Enter');
        console.log('✅ project creation successful');


        // --- 3. canvas interaction ---
        await expect(page).toHaveURL(/.*editor/);

        const canvasGrid = page.locator('.react-flow__renderer, .canvas-grid');
        await expect(canvasGrid).toBeVisible();

        const nodeSidebar = page.locator('aside, [data-testid="node-sidebar"]');
        await expect(nodeSidebar).toBeVisible();
        
        await expect(page.getByText(/General|Nodes/i).first()).toBeVisible();
        console.log('✅ editor canvas verified');


        // --- 4. Profile verify ---
        await page.goto(`${CREDENTIALS.baseUrl}/settings`);

        
        const profileEmail = page.getByText(CREDENTIALS.email);
        await expect(profileEmail).toBeVisible();

        await expect(page.getByRole('heading', { name: /profile|account/i })).toBeVisible();
        console.log('✅ profile verified successfully');


        // --- 5. node search and discover ---
        const searchInput = page.getByPlaceholder(/search nodes|search/i);
        
        await expect(searchInput).toBeVisible();
        await searchInput.click();
        
        const searchTerm = 'OpenAI';
        await searchInput.fill(searchTerm);

        const searchResult = page.locator('aside').getByText(searchTerm, { exact: false }).first();
        await expect(searchResult).toBeVisible();
        
        await searchInput.clear();
        const generalCategory = page.getByText(/General/i).first();
        await expect(generalCategory).toBeVisible();

        console.log('✅ Node search and filtering logic verified');
    });
});