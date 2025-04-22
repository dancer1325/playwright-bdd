<div align="center">
  <a href="https://vitalets.github.io/playwright-bdd">
    <img width="128" alt="playwright-bdd" src="./docs/logo.svg">
  </a>
</div>

<h2 align="center">Playwright-BDD</h2>

<div align="center">

</div>

* allows
  * 💡running [BDD](https://cucumber.io/docs/bdd/) tests -- with -- [Playwright](https://playwright.dev/) runner 💡
  
## Why BDD?

- 🤖 **Generate**
  - == get feature files
  - -- via -- drop business requirements | AI chat 
- ✅ **Validate**
  - == validate the generated scenarios
- 🛠 **Automate**
  - [EXISTING steps](https://vitalets.github.io/playwright-bdd/#/writing-features/chatgpt) -- can --
    - run the tests
    - prevent codebase growth

## Why Playwright Runner?

* EXISTING test runners
  * [Playwright](https://playwright.dev/) test runner
    * advantages
      - AUTOMATIC browser initialization & cleanup
      - Auto-capture of screenshots, videos, and traces
      - Parallelization -- via -- sharding
      - Auto-waiting for page elements
      - Built-in visual comparison testing
      - Power of Playwright fixtures
      - [OTHERS](https://playwright.dev/docs/library#key-differences)
  * [CucumberJS](https://github.com/cucumber/cucumber-js) test runner
* ways to run BDD scenarios
  * CucumberJS runner + [Playwright as a library](https://playwright.dev/docs/library)  
  * ⭐️BDD scenarios / converted | test files + Playwright test runner ⭐️ 
    * 💡this project 💡
    * advantages
      * Playwright runner's advantages
      - 🔥 Advanced tagging 
        - [by path](docs/writing-features/tags-from-path)
        - [special tags](docs/writing-features/special-tags)
      - 🎩 [Step decorators | class' methods](docs/writing-steps/decorators)
      - 🎯 [Scoped step definitions](docs/writing-steps/scoped)
      - ✨ [Exporting steps -- for -- AI](docs/writing-features/chatgpt)
      - ♻️ [Re-usable step functions](docs/writing-steps/reusing-step-fn)

## Documentation
* [here](docs)

## Examples
* [here](/examples) 
* [here MORE](https://github.com/vitalets/playwright-bdd-example)

## OTHER Playwright tools
* [request-mocking-protocol](https://github.com/vitalets/request-mocking-protocol)
  * == Mock server-side API calls | Playwright
* [playwright-network-cache](https://github.com/vitalets/playwright-network-cache) 
  * allows
    * speeding up -- ,via caching network requests | filesystem, -- Playwright tests 
* [playwright-magic-steps](https://github.com/vitalets/playwright-magic-steps)
  * JavaScript comments -- are auto-transformed into -- Playwright steps

