const { defineConfig } = require("cypress");

const {
  lighthouse,
  prepareAudit
} = require("cypress-audit");

module.exports = defineConfig({

  allowCypressEnv: false,

  e2e: {

    baseUrl: "https://www.saucedemo.com/",

    setupNodeEvents(on, config) {

      on(
        "before:browser:launch",
        (browser = {}, launchOptions) => {

          prepareAudit(launchOptions);

        }
      );

      on("task", {

        lighthouse: lighthouse(),

        log(message) {

          console.log(message);

          return null;

        }

      });

    },

  },

});