{
  "name": "react-redux-magazine-subscriptions",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "react-redux": "^5.0.5",
    "redux": "^3.7.1"
  },
  "devDependencies": {
    "chai": "^4.0.2",
    "enzyme": "^2.9.1",
    "eslint": "^3.19.0",
    "eslint-config-airbnb": "^15.0.1",
    "eslint-plugin-import": "^2.6.1",
    "eslint-plugin-jsx-a11y": "^5.1.0",
    "eslint-plugin-react": "^7.1.0",
    "prop-types": "^15.5.10",
    "react-scripts": "1.0.7",
    "react-test-renderer": "^15.6.1",
    "selenium-standalone": "^6.5.0",
    "wdio-dot-reporter": "0.0.8",
    "wdio-mocha-framework": "^0.5.10",
    "wdio-selenium-standalone-service": "0.0.9",
    "webdriverio": "^4.8.0"
  },
  "scripts": {
    "selenium-setup": "selenium-standalone install",
    "selenium-start": "selenium-standalone start",
    "e2e-tests": "wdio wdio.conf.js",
    "e2e-tests-watch": "wdio wdio.conf.js --watch",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
