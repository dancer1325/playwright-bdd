# Configuration -- `defineBddConfig()` -- 

* place | "playwright.config.*"
  * relative paths are resolved -- from -- this config file location
* return output directory | test files are generated
* uses
  * Playwright option `testDir` 
* _Example:_
    ```ts, title="playwright.config.ts"
    import { defineConfig } from '@playwright/test';
    import { defineBddConfig } from 'playwright-bdd';
    
    const testDir = defineBddConfig({
      features: 'feature/*.feature',
      steps: 'steps/**/*.ts',
      // ...other playwright-bdd options
    });
    
    export default defineConfig({
      testDir,
    });
    ```
