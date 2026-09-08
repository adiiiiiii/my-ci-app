import {test, expect} from '@playwright/test';
test('loads page and interacts with counter in browser', async ({page}) => {
    await page.goto('/', {waitUntil : 'domcontentloaded'});
    await expect (page.getByRole('heading', {name: 'Next.js CI pipeline demo'})).toBeVisible();
    await page.waitForLoadState('networkidle');
    const button = page.getByRole('button' , {name: /increment/i});
    await button.click();
    await expect(page.getByTestId('count-display')).toHaveText('Count: 1')
})