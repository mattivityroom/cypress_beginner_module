const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io',
    defaultBrowser: 'chrome',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
