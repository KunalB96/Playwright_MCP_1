import { test, expect } from '@playwright/test';
import { AdminPage } from '../pages/AdminPage';
import { LoginPage } from '../pages/LoginPage';

test.describe('Admin system users', () => {
  test('displays System Users and the Add button', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const adminPage = new AdminPage(page);

    await loginPage.navigate();
    await loginPage.login('Admin', 'admin123');
    await adminPage.open();

    await expect(adminPage.systemUsers()).toBeVisible();
    await expect(adminPage.add()).toBeVisible();
  });
});