# Fix with AI

* requirements
   * ⚠️**Playwright v1.49+** ⚠️
     * Reason:🧠it includes [ARIA-snapshots](https://playwright.dev/docs/release-notes#aria-snapshots)🧠
   * ⚠️Playwright-BDD **v8.1.0**⚠️
* == ⚠️ **experimental** feature⚠️/
  * enable you
    * fix failing tests -- via -- AI suggestions
  * use case
    * | test fails, Playwright-BDD 
      * pre-generates an AI prompt
        * == Error message + Scenario steps + Test code snippet + [page's ARIA snapshot](https://playwright.dev/docs/aria-snapshots)
        * [template](/src/ai/promptTemplate.ts)
      * attaches AI prompt | report

      ![Prompt attachment](./_media/prompt-attachment.png)

  * steps to use it
    * copy pre-generated AI prompt
    * | your favorite AI chat,
      * paste it
      * get suggestions -- about -- how to fix it

## how to enable?

* steps
  * | BDD config,
    * add 
 
    ```js
    const testDir = defineBddConfig({
      aiFix: {
        promptAttachment: true,
      },
      // ...other options
    });
    ```

### Playwright HTML report

In the Playwright HTML report, you can expand the attachment and copy the prompt by clicking the small button in the top-right corner:

![Copying prompt in the Playwright HTML report](./_media/pw-html-report-prompt-copy.png)

### Cucumber HTML report

In the Cucumber HTML report, there are additional controls that help to copy the prompt to the clipboard and open ChatGPT:

![Copying prompt in the Cucumber HTML report](./_media/cucumber-html-report-prompt-copy.png)

## Example response (ChatGPT)

Here is an example response from ChatGPT that fixes the test:

![ChatGPT fix](./_media/chatgpt-fix.png)

## Prompt customization

You can customize the prompt template to get better results for your project:

```js
const testDir = defineBddConfig({
  aiFix: {
    promptAttachment: true,
    promptTemplate: 'my custom prompt'
  },
  // ...other options
});
```

Check out the [default prompt](https://github.com/vitalets/playwright-bdd/blob/main/src/ai/promptTemplate.ts) for inspiration and a list of available placeholders:

- `{scenarioName}`
- `{steps}`
- `{error}`
- `{snippet}`
- `{ariaSnapshot}`

?> If you get some awesome results with your custom prompt, you are welcome to share it with the community!

## Using non-default page

By default, the AI prompt captures the ARIA snapshot from Playwright's built-in `page` instance.
If you use multi-page scenarios, you can manually set the `page` instance to capture the ARIA snapshot.
For that, utilize the `$prompt` BDD fixture: 

```js
When('I open a new tab', async ({ page, context, $prompt }) => { // <-- add $prompt fixture
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link').click(),
  ]);
  $prompt.setPage(newPage); // <-- call $prompt.setPage() to switch the page
  await expect(newPage.getByRole('heading')).toContainText('Another page');
});
```

## Limitations

In some cases, the prompt is not generated:

- Error occurred in hooks, before the `page` fixture was initialized
- Your tests don't use the `page` fixture (e.g. API testing)

If you expect the prompt to be attached, but it is not, try to reproduce your case on the [playwright-bdd-example "ai" branch](https://github.com/vitalets/playwright-bdd-example/tree/ai) and open an [issue](https://github.com/vitalets/playwright-bdd/issues).