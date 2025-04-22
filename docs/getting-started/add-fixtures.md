# Add Playwright fixtures

* uses
  * your tests grow
* [Playwright fixtures](https://playwright.dev/docs/test-fixtures)
* steps
  * use a CUSTOM `test` instance -- via -- `test.extend()` 
  * if you want to have access | ALL your step definitions' fixtures -> pass the custom test instance | `createBdd()` 

### Recommended setup

* | SAME file
  * define the CUSTOM `test` / export it
    * Reason: 🧠export it, because it's used | generated test files 🧠
  * `createBdd(test)`
  * export `Given / When / Then`
    ```ts
    // fixtures.ts
    import { test as base, createBdd } from 'playwright-bdd';
    
    export const test = base.extend({
      myFixture: async ({ page }, use) => {
        // ... define your fixture here
      }
    });
    
    export const { Given, When, Then } = createBdd(test);
    ```
* | step definitions
  * write step definitions / CUSTOM fixtures
    ```ts
    // steps.ts
    
    import { Given, When, Then } from './fixtures';
    
    Given('My step', async ({ myFixture }) => {
      // step code that uses myFixture
    });
    ```
