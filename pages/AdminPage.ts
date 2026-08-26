import { type Page } from '@playwright/test';

export class AdminPage {
  private readonly adminLink;
  private readonly systemUsersHeading;
  private readonly addButton;

  constructor(private readonly page: Page) {
    this.adminLink = page.getByRole('link', { name: 'Admin' });
    this.systemUsersHeading = page.getByRole('heading', { name: 'System Users' });
    this.addButton = page.getByRole('button', { name: /Add/ });
  }

  async open(): Promise<void> {
    await this.adminLink.click();
  }

  systemUsers() {
    return this.systemUsersHeading;
  }

  add() {
    return this.addButton;
  }
}