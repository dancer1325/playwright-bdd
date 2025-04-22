# FAQ

### Why are test files generation needed?

* allows you to
  * 👀use ALL Playwright tooling out-of-box 👀
    * Run 1! test -- with -- [VS Code extension](guides/ide-integration.md#vs-code)
    * Debug & set breakpoints | SPECIFIC BDD steps
    * watch changes
      * -- via -- `--ui` mode  
    * regular Playwright tests
* provides
  * MORE transparency about how Playwright -- sees -- your BDD scenarios 

* Playwright-BDD's
  * original approach
    * 👀run BDD tests on-the-fly 👀
      * == | `npx playwright test` command
      * issues
        1. TOO MANY re-generation
           1. Reason: 🧠Playwright config is executed MANY times -- from -- DIFFERENT sources (workers, VS Code extension, UI mode, etc.)
        2. implement watch mode is tricky
        3. if you watch files ( | `--ui` mode) -- leads to a -- circular dependency
           1. if you change test files -> triggers a test run /
              2. re-imports the config
              3. triggers ANOTHER change | test files
  * CURRENT approach
    * test generation + test execution /
      * decoupled

### Can I MANUALLY apply `test.use()` | generated file?

* ❌NO ❌
  * Reason: 🧠Test files generation -- is -- FULLY automated / NO MANUAL edits 🧠

* `test.use`
  * affects ALL tests | file
  * ALTERNATIVES
    * 👀[tags](writing-steps/bdd-fixtures.md#tags) + CUSTOM fixtures 👀
    * allows 
      * selectively changing settings / SPECIFIC scenarios OR tests
        * == MORE flexible

### How can I make BDD valuable | MY project?

* BDD
  * == collaboration technique
    * == write BDD -- with -- your team
  * allows
    * clarifying requirements -- BETWEEN -- business, QA, developers
  * see
    * [this post](https://news.ycombinator.com/item?id=10194242)
    * [Real-World BDD article](https://www.serenity-dojo.com/minimal-bdd)
