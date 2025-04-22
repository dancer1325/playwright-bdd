## Quick start
* [getting started](getting-started/index.md)

## steps

* 
    ```
    npx bddgen && npx playwright test
    ```
  * `npx bddgen`
    * from BDD feature files -- generate -- test files

        ```gherkin
        Feature: Playwright Home Page
        
            Scenario: Check title
                Given I am on Playwright home page
                When I click link "Get started"
                Then I see in title "Installation"
        ```
        to
        ```js
        import { test } from 'playwright-bdd';
        
        test.describe('Playwright Home Page', () => {
        
          test('Check title', async ({ Given, When, Then }) => {
            await Given('I am on Playwright home page');
            await When('I click link "Get started"');
            await Then('I see in title "Installation"');
          });
        
        });
        ```

  * `npx playwright test`
    * runs the generated files -- with the -- Playwright runner
      * step definitions have -- access to the -- Playwright APIs & fixtures (_Example:_ `page`)
        ```js
        Given('I am on Playwright home page', async ({ page }) => {
          await page.goto('https://playwright.dev');
        });
        
        When('I click link {string}', async ({ page }, name) => {
          await page.getByRole('link', { name }).click();
        });
        
        Then('I see in title {string}', async ({ page }, text) => {
          await expect(page).toHaveTitle(new RegExp(text));
        });  
        ```
      * HTML report -- shows -- ALL scenarios & steps
        ![Playwright html report](reporters/_media/pw-html-report.png)
