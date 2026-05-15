const { defineConfig } = require("cypress");
const cucumber = require( 'cypress-cucumber-preprocessor' ).default;

module.exports = defineConfig({

  e2e: {
    viewportWidth: 1080,
    viewportHeight: 720,
    watchForFileChanges: false,
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://www.automationexercise.com/",
    downloadsFolder: "cypress/downloads",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());

      on('task', {
//        findDownloadedFile,
      });
      return config;
    },
  },
});