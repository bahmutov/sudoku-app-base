const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    viewportHeight: 1000,
    viewportWidth: 1000,
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
})
