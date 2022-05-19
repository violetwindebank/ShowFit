exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://showme.fit/',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js',
    acceptAllCookies: './pages/acceptAllCookies.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'IamHome'
}