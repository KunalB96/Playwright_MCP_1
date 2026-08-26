import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PimPage } from '../pages/PimPage';

test.describe('PIM employee search', () => {
  test('displays matching employee search results', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const pimPage = new PimPage(page);

    await loginPage.navigate();
    await loginPage.login('Admin', 'admin123');
    await pimPage.openEmployeeList();

    await expect(pimPage.employeeInformation()).toBeVisible();
    await pimPage.searchEmployee('John123');

    const results = pimPage.searchResults();
    await expect(results.recordsFound).toBeVisible();
    await expect(results.table).toBeVisible();
    await expect(pimPage.employeeRow('John123', 'Doe456')).toBeVisible();
  });
});