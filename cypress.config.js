const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    allure: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('@shelex/cypress-allure-plugin/writer')(on, config)
    },
    baseUrl: 'https://graphql-java-spring-boot.herokuapp.com/graphql',
  },
})
