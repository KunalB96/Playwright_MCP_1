import { test, expect } from '@playwright/test';
import { AddEmployeePage } from '../pages/AddEmployeePage';
import { LoginPage } from '../pages/LoginPage';
import { PimPage } from '../pages/PimPage';

test('adds an employee and displays the employee profile', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const pimPage = new PimPage(page);
  const addEmployeePage = new AddEmployeePage(page);

  await loginPage.navigate();
  await loginPage.login('Admin', 'admin123');
  await pimPage.open();
  await addEmployeePage.saveEmployee('John123', 'Doe456');

  await expect(page).toHaveURL(/\/web\/index\.php\/pim\/viewPersonalDetails\/empNumber\/\d+/);
  await expect(page.getByRole('heading', { name: 'John123 Doe456' })).toBeVisible();
});