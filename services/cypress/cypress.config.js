const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
  "baseUrl": "http://traefik",
  "video": true,
  "screenshotsFolder": "public/cypress/screenshots",
  "videosFolder": "public/cypress/videos",
  "integrationFolder": "tests",
  "supportFile": false,
  "fixturesFolder": false,
  "pluginsFile": false
  }
})
