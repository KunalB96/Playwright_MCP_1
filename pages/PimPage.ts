import { type Page } from '@playwright/test';

export class PimPage {
  private readonly pimLink;
  private readonly addEmployeeLink;
  private readonly employeeInformationHeading;
  private readonly employeeNameSearchInput;
  private readonly searchButton;
  private readonly recordsFound;
  private readonly employeeResultsTable;

  constructor(private readonly page: Page) {
    this.pimLink = page.getByRole('link', { name: 'PIM' });
    this.addEmployeeLink = page.getByRole('link', { name: 'Add Employee' });
    this.employeeInformationHeading = page.getByRole('heading', { name: 'Employee Information' });
    this.employeeNameSearchInput = page.getByRole('textbox', { name: 'Type for hints...' }).first();
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.recordsFound = page.getByText(/\(\d+\) Records Found/);
    this.employeeResultsTable = page.getByRole('table');
  }

  async open(): Promise<void> {
    await this.pimLink.click();
    await this.addEmployeeLink.click();
  }

  async openEmployeeList(): Promise<void> {
    await this.pimLink.click();
  }

  async searchEmployee(name: string): Promise<void> {
    await this.employeeNameSearchInput.fill(name);
    await this.searchButton.click();
  }

  employeeInformation() {
    return this.employeeInformationHeading;
  }

  searchResults() {
    return {
      recordsFound: this.recordsFound,
      table: this.employeeResultsTable,
    };
  }

  employeeRow(firstName: string, lastName: string) {
    return this.employeeResultsTable.getByRole('row').filter({ hasText: `${firstName} ${lastName}` }).first();
  }
}