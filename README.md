🎭 Playwright MCP - AI-Powered Test Automation (OrangeHRM)
Playwright TypeScript MCP OrangeHRM

A Proof of Concept project demonstrating AI-powered browser test automation using Playwright integrated with the Model Context Protocol (MCP). Tests are written in TypeScript using the Page Object Model (POM) design pattern, targeting the OrangeHRM demo application.

📋 Table of Contents
Overview
Architecture
Tech Stack
Project Structure
Test Scenarios
Getting Started
Running Tests
Page Object Model
Data-Driven Testing
Playwright MCP vs Playwright CLI
Resources
🎯 Overview
This project showcases how AI + Playwright can automate browser testing using plain English prompts via the Model Context Protocol (MCP). Instead of writing every line of automation code manually, you describe what you want to test in natural language, and AI helps generate and execute the automation.

Key Concepts
Component	Role	Analogy
LLM (Large Language Model)	Understands requests & generates instructions	🧠 Brain
Agent	Executes tasks automatically	⚡ Doer
MCP (Model Context Protocol)	Connects AI with real tools (browsers, APIs, etc.)	🔗 Translator
🏗 Architecture
           Plain English Prompt
                    │
                    ▼
        Large Language Model (LLM)
                    │
          Generates Instructions
                    │
                    ▼
                AI Agent
                    │
         Executes the Instructions
                    │
                    ▼
      Model Context Protocol (MCP)
                    │
     Connects to Real Applications
                    │
                    ▼
          Playwright + Browser
                    │
                    ▼
          Browser Automation
💻 Tech Stack
Technology	Purpose
Playwright ^1.60	Browser automation framework
TypeScript	Programming language
MCP	AI-to-tool communication protocol
csv-parse	CSV parsing for data-driven tests
Node.js	Runtime environment
📁 Project Structure
├── 📂 pages/                          # Page Object Model classes
│   ├── LoginPage.ts                   # Login page locators & actions
│   └── PimPage.ts                     # PIM module locators & actions
│
├── 📂 tests/                          # Test specifications
│   ├── example.spec.ts                # Sample Playwright test
│   ├── orangehrm-login-data-driven.spec.ts       # Data-driven login (inline)
│   ├── orangehrm-login-data-driven-csv.spec.ts   # Data-driven login (CSV)
│   ├── orangehrm-logout.spec.ts                  # Logout flow test
│   ├── orangehrm-admin-system-users.spec.ts      # Admin module test
│   ├── orangehrm-buzz-post.spec.ts               # Buzz social feed test
│   ├── pim-search.spec.ts                        # PIM employee search
│   └── add-employee.spec.ts                      # Add employee (POM)
│
├── 📂 test_data/                     # Test data files
│   └── loginData.csv                 # CSV test data for login
│
├── 📂 playwright-report/             # HTML test reports
├── 📂 test-results/                  # Test execution artifacts
│
├── 📄 playwright.config.ts           # Playwright configuration
├── 📄 package.json                   # Dependencies & scripts
├── 📄 README.md                      # This file
│
├── 📄 Playwright_MCP_Guide.md        # Detailed MCP concepts guide
├── 📄 PlaywrightMCP_Vs_CLI.md        # MCP vs CLI comparison
├── 📄 playwright-context.md          # MCP test generator context
├── 📄 playwright-context-pom.md      # MCP POM test generator context
├── 📄 prompts.md                     # Sample AI prompts used
└── 📄 notes.md                       # Architecture & concept notes
🧪 Test Scenarios
Test File	Description	Pattern
orangehrm-login-data-driven.spec.ts	Login validation with inline data (valid + invalid credentials)	Data-Driven
orangehrm-login-data-driven-csv.spec.ts	Login validation using CSV data source	Data-Driven (CSV)
orangehrm-logout.spec.ts	Login, logout, and verify redirect to login page	Linear
orangehrm-admin-system-users.spec.ts	Navigate to Admin → verify System Users page	Linear
orangehrm-buzz-post.spec.ts	Post a message on Buzz feed and verify it appears	Linear
pim-search.spec.ts	Search employees by name in PIM module	Linear
add-employee.spec.ts	Add a new employee using Page Object Model	POM
example.spec.ts	Default Playwright sample test	Linear
🚀 Getting Started
Prerequisites
Node.js (v18 or later)
npm
Installation
# Clone the repository
git clone https://github.com/pavanoltraining/POC_Playwright_MCP_orangehrm.git

# Navigate to the project directory
cd POC_Playwright_MCP_orangehrm

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install chromium
▶️ Running Tests
Run all tests
npx playwright test
Run a specific test file
npx playwright test tests/orangehrm-login-data-driven.spec.ts
Run tests in UI mode
npx playwright test --ui
View HTML report
npx playwright show-report
Run with debug mode
npx playwright test --debug
🧩 Page Object Model
The project uses the Page Object Model (POM) design pattern for maintainable and reusable test code.

Example: LoginPage.ts
export class LoginPage {
  readonly usernameInput = page.getByPlaceholder("Username");
  readonly passwordInput = page.getByPlaceholder("Password");
  readonly loginButton = page.getByRole("button", { name: "Login" });

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
Example: PimPage.ts
export class PimPage {
  async navigateToPim() {
    /* ... */
  }
  async openAddEmployee() {
    /* ... */
  }
  async addEmployee(firstName: string, lastName: string) {
    /* ... */
  }
}
📊 Data-Driven Testing
Inline Data-Driven
Tests login with multiple credentials defined inline:

Username	Password	Expected Result
Admin	admin123	Dashboard
fakeuser	fakepass	Invalid credentials
ESSUser1	ess123	Invalid credentials
CSV Data-Driven
Tests read test cases from test_data/loginData.csv:

Username,Password,Expected
Admin,admin123,Dashboard
fakeuser,fakepass,Invalid credentials
ESSUser1,ess123,Invalid credentials
🤖 Playwright MCP vs Playwright CLI
Feature	Playwright CLI	Playwright MCP
Purpose	Command-line tool for Playwright	AI bridge between LLM and Playwright
Used By	Developers & Testers	AI Agents
Input	Terminal commands	Natural language prompts
Browser Control	Directly through Playwright scripts	Through AI + MCP Server
Requires Coding	Yes	Minimal coding
Generates Code	No	Yes (AI-generated)
Executes Tests	Yes	Yes
Uses Accessibility Tree	No	Yes
Supports AI Automation	No	Yes
Best For	Traditional automation	AI-powered automation
📚 Resources
Playwright Documentation
Model Context Protocol
OrangeHRM Demo
GitHub Repository
📄 License
This project is for educational and demonstration purposes only.

Built with ❤️ using Playwright + MCP + AI
