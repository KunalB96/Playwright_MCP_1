# Playwright MCP vs Playwright CLI

Both **Playwright MCP** and **Playwright CLI** are used with Playwright, but they serve **completely different purposes**.

- **Playwright CLI** is used by developers and testers to manually create, run, and manage Playwright projects.
- **Playwright MCP** enables AI assistants (such as GitHub Copilot Agent or ChatGPT with MCP support) to control browsers and perform automation using natural language.

---

# Quick Comparison

| Feature | Playwright CLI | Playwright MCP |
|----------|----------------|----------------|
| Purpose | Command-line tool for Playwright | AI bridge between LLM and Playwright |
| Used By | Developers & Testers | AI Agents |
| Input | Terminal commands | Natural language prompts |
| Browser Control | Directly through Playwright scripts | Through AI + MCP Server |
| Requires Coding | Yes | Minimal coding |
| Generates Code | No | Yes (AI-generated) |
| Executes Tests | Yes | Yes |
| Uses Accessibility Tree | No | Yes |
| Supports AI Automation | No | Yes |
| Best For | Traditional automation | AI-powered automation |

---

# What is Playwright CLI?

The **Playwright CLI (Command Line Interface)** is a command-line tool used to create, manage, and execute Playwright projects.

You type commands in the terminal to perform different tasks.

## Common CLI Commands

### Create a Playwright Project

```bash
npm init playwright@latest
```

### Run All Tests

```bash
npx playwright test
```

### Run Tests in UI Mode

```bash
npx playwright test --ui
```

### Run a Specific Test File

```bash
npx playwright test login.spec.ts
```

### Open HTML Report

```bash
npx playwright show-report
```

### Generate Code Using Codegen

```bash
npx playwright codegen https://example.com
```

---

## Characteristics of Playwright CLI

- Uses terminal commands
- Requires Playwright code
- Executes existing test scripts
- Best for traditional automation projects
- Complete control over the framework

---

# What is Playwright MCP?

**Playwright MCP (Model Context Protocol)** allows AI assistants to communicate directly with Playwright.

Instead of writing every Playwright command manually, you simply describe what you want in plain English.

The AI understands your request and performs browser automation using the Playwright MCP Server.

---

## Example Prompt

```text
Open https://demo.playwright.dev

Login using:
Username: admin
Password: admin123

Verify the dashboard is displayed.
```

The AI can:

- Open the browser
- Navigate to the website
- Fill the login form
- Click the Login button
- Verify the dashboard
- Return the result

Without manually writing Playwright code.

---

## Characteristics of Playwright MCP

- Uses natural language
- AI generates browser actions
- Uses the Accessibility Tree
- Faster automation
- Less manual coding
- Beginner-friendly

---

# Architecture Comparison

## Playwright CLI Workflow

```text
Developer
     │
     ▼
Playwright Test Script
     │
     ▼
Playwright Framework
     │
     ▼
Browser
```

The developer writes and maintains all Playwright code.

---

## Playwright MCP Workflow

```text
User
     │
     ▼
Natural Language Prompt
     │
     ▼
LLM (ChatGPT / Copilot)
     │
     ▼
Agent
     │
     ▼
Playwright MCP Server
     │
     ▼
Playwright
     │
     ▼
Browser
```

AI generates and executes browser actions automatically.

---

# Advantages of Playwright CLI

- Full control over the automation framework
- Excellent for large automation projects
- Supports CI/CD integration
- Easy to customize
- Industry-standard approach
- High performance

---

# Advantages of Playwright MCP

- AI-powered browser automation
- Natural language prompts
- Less coding required
- Faster test creation
- Beginner-friendly
- Can assist with self-healing when UI changes

---

# Limitations of Playwright CLI

- Requires Playwright programming knowledge
- Manual test creation
- More time to develop automation
- No built-in AI assistance

---

# Limitations of Playwright MCP

- Requires an AI assistant (such as GitHub Copilot Agent)
- Generated output may need review and refinement
- Complex enterprise frameworks may still require manual coding
- Depends on MCP Server integration

---

# When Should You Use Playwright CLI?

Choose Playwright CLI when you want to:

- Build a complete automation framework
- Execute regression test suites
- Integrate with CI/CD pipelines
- Implement custom reporting
- Write reusable Playwright code
- Develop enterprise automation projects

---

# When Should You Use Playwright MCP?

Choose Playwright MCP when you want to:

- Generate tests using AI
- Automate tasks with plain English
- Quickly explore or test applications
- Reduce repetitive coding
- Learn Playwright more easily
- Speed up test development

---

# Real-World Example

## Using Playwright CLI

```typescript
import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
  await page.goto('https://example.com');
  await page.fill('#username', 'admin');
  await page.fill('#password', 'admin123');
  await page.click('#login');
  await expect(page).toHaveURL(/dashboard/);
});
```

You write every automation step manually.

---

## Using Playwright MCP

Prompt:

```text
Open https://example.com

Login using:
Username: admin
Password: admin123

Verify the dashboard page.
```

The AI interprets the prompt and performs the browser automation through the MCP Server.

---

# Which One Should You Learn?

**Recommended learning path:**

1. Learn **Playwright CLI** first.
2. Understand Playwright locators, assertions, fixtures, Page Object Model (POM), and test execution.
3. Then learn **Playwright MCP** to boost productivity with AI-assisted automation.

> **Note:** Playwright MCP complements Playwright—it does **not** replace it. A solid understanding of Playwright fundamentals helps you use MCP more effectively and review AI-generated automation with confidence.

---

# Final Comparison

| Aspect | Playwright CLI | Playwright MCP |
|---------|----------------|----------------|
| Learning Curve | Moderate | Easy |
| Coding Required | High | Low |
| AI Support | No | Yes |
| Natural Language | No | Yes |
| Browser Automation | Yes | Yes |
| Framework Development | Excellent | Limited |
| Best For | Automation Engineers | AI-assisted Automation |
| Uses Playwright | Yes | Yes |
| Uses MCP Server | No | Yes |

---

# Summary

| Playwright CLI | Playwright MCP |
|----------------|----------------|
| Manual coding approach | AI-assisted approach |
| Terminal commands | Natural language prompts |
| Developer writes automation code | AI generates and executes automation |
| Ideal for building frameworks | Ideal for accelerating automation development |

## Key Takeaway

- **Playwright CLI** is the traditional way to create, run, and maintain Playwright automation using code.
- **Playwright MCP** adds an AI layer that understands natural language and translates it into Playwright actions through the MCP Server.

The two are complementary: use **Playwright CLI** to build robust automation frameworks and **Playwright MCP** to accelerate development and simplify browser interactions with AI.