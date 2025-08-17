const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://testapp1.andresfloresv.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // Load environment variables
      require('dotenv').config()

      // Set Cypress environment variables
      config.env = {
        ...config.env,
        username: process.env.VALID_USERNAME,
        password: process.env.VALID_PASSWORD,
      }

      return config
    },
  },
});
