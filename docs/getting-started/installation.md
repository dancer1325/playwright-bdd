# Installation

* -- via -- DIFFERENT package managers
  - [with Npm](#npm)
  - [with Pnpm](#pnpm)
  - [with Yarn](#yarn)

## Npm

* | NEW project OR EXISTING project WITHOUT Playwright
  * `npm i -D @playwright/test playwright-bdd`
  * `npx playwright install`
    * install [Playwright browsers](https://playwright.dev/docs/browsers)
* | EXISTING project / has Playwright
  * `npm i -D playwright-bdd`

## Pnpm

* TODO:
- **New project or existing project without Playwright:**

    Install Playwright and Playwright-BDD:
    ```
    pnpm i -D @playwright/test playwright-bdd 
    ```

    Install Playwright [browsers](https://playwright.dev/docs/browsers):
    ```
    pnpm playwright install
    ```

- **Existing project with Playwright:**

    Install only Playwright-BDD:
    ```
    pnpm i -D playwright-bdd 
    ```

Now you can start [writing BDD tests](getting-started/write-first-test.md).

## Yarn

* TODO:
**Important**: For [Yarn Plug'n'Play](https://yarnpkg.com/features/pnp) you need to add these lines to the `.yarnrc.yml`:

```yml
packageExtensions: 
  playwright-bdd@*: 
    dependencies: 
      playwright: "*"
      playwright-core: "*"
```

Then proceed with installing packages.

- **New project or existing project without Playwright:**

    Install Playwright and Playwright-BDD:
    ```
    yarn add -D @playwright/test playwright-bdd 
    ```

    Install Playwright [browsers](https://playwright.dev/docs/browsers):
    ```
    yarn playwright install
    ```

- **Existing project with Playwright:**

    Install only Playwright-BDD:
    ```
    yarn add -D playwright-bdd 
    ```

Now you can start [writing BDD tests](getting-started/write-first-test.md).
