# CLI

## `bddgen test` OR `bddgen`

* 👀FROM Gherkin documents (".feature") -- generate -- Playwright test files 👀
* use cases
  * BEFORE `npx playwright test`
* requirements
  * "playwright.config.(ts|js)" / contains >=1 [`defineBddConfig()`](configuration/index.md)

* _Examples:_ TODO: Create examples to run it
  * `npx bddgen && npx playwright test`
    * generate & run test files / use "playwright.config.ts" | default location
  * `npx bddgen --tags "@foo and not @bar" && npx playwright test`
    * `--tags` 
      * == option / generate tests -- with -- [filtering by tags](https://cucumber.io/docs/cucumber/api/?lang=javascript#tag-expressions)
  * `-c` / `--config`
    * == option / set a CUSTOM config 
    * SAME | `bddgen` & `playwright test` commands
      ```
      npx bddgen -c path/to/playwright.config.ts && npx playwright test -c path/to/playwright.config.ts
      ```
  * `-h`
    * show help
      ```
      npx bddgen test -h
      # or to show global help
      npx bddgen -h
      ```

## `bddgen export`

* prints a list of ALL found step definitions 
* uses
  * [generate BDD scenarios -- with -- ChatGPT](writing-features/chatgpt.md)

* _Example:_ TODO: Create examples to run it
```
$ npx bddgen export
```
Example output:
```
Using config: playwright.config.ts
List of all steps (4):

* Given I am on todo page
* When I add todo {string}
* When I remove todo {string}
* Then visible todos count is {int}
```

#### Options
* `--config pathToPlaywrightConfig`
* `--unused-steps`
  * output ONLY UNUSED steps

## `bddgen env`

* displays info -- about the -- CURRENT environment

* _Example:_ TODO: Create examples to run it
```
$ npx bddgen env
```
Example output:
```
Playwright-BDD environment info:

platform: darwin
node: v18.16.0
playwright-bdd: v5.1.1
@playwright/test: v1.36.2
@cucumber/cucumber: v9.2.0
```
