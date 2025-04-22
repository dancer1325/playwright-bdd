## how has it been created?
* `npm init -y`
* `npm install playwright-bdd @playwright/test --save-dev`
* `npx playwright install`
* | project's root
  * create "playwright.config.js"
* | [features/](features)
  * create [sample.feature](features/sample.feature)
* | [features/steps](features/steps)
  * implement [steps](features/steps/index.ts)
* `npx playwright show-report`

## how to run locally?
* `npm install`
* `npm run test`
  * check the [generated files](.features-gen)
* `npx playwright show-report`
  * generate HTML report
