import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
    features: 'features/sample.feature',
    steps: 'features/steps/index.ts',
});

export default defineConfig({
    testDir,
    reporter: 'html',
});
