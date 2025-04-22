# Write your first BDD test

* goal
  * create & run your FIRST BDD test -- with -- Playwright-BDD

## steps
### Step 1: Create "playwright.config.js" | project's root

```js
import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'sample.feature',
  steps: 'steps.js',
});

export default defineConfig({
  testDir,
  reporter: 'html',
});
```

### Step 2: Create feature file

```gherkin, title="sample.feature"
Feature: Playwright site

    Scenario: Check get started link
        Given I am on home page
        When I click link "Get started"
        Then I see in title "Installation"
```

### Step 3: Implement steps

* ways to define steps
  * [Playwright-style syntax](../writing-steps/playwright-style.md)
  * [Decorators](../writing-steps/decorators.md)
  * [Cucumber-style syntax](../writing-steps/cucumber-style.md)

```ts,title=index.ts
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I am on home page', async ({ page }) => {
  await page.goto('https://playwright.dev');
});

When('I click link {string}', async ({ page }, name) => {
  await page.getByRole('link', { name }).click();
});

Then('I see in title {string}', async ({ page }, keyword) => {
  await expect(page).toHaveTitle(new RegExp(keyword));
});
```

## how to run tests?

* generate & run the tests
  * ways
    * -- via -- npm
      ```
      npx bddgen && npx playwright test
      ```
    * -- via -- Yarn
      ```
      yarn bddgen && yarn playwright test
      ```
    * -- via -- pnpm
      ```
      pnpm bddgen && pnpm playwright test
      ```
  * check the [generated files](".features-gen/")   
    ```js
    // Generated from: sample.feature
    import { test } from 'playwright-bdd';
    
    test.describe('Playwright site', () => {
    
      test('Check get started link', async ({ Given, When, Then }) => {
        await Given('I am on home page');
        await When('I click link "Get started"');
        await Then('I see in title "Installation"');
      });
    
    });
    ```
* `npx playwright show-report`
  * generate HTML report
  ![Playwright HTML report](./_media/playwright-report.png ':size=70%')

## _Examples:_
* [here](../../examples/writeYourFirstStep)
* [ANOTHER example](https://github.com/vitalets/playwright-bdd-example)
