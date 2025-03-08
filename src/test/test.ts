import { NightwatchBrowser } from "nightwatch";
import { NightwatchAPI } from "nightwatch";

module.exports = {
  "E2E Test - Google Search": (browser: NightwatchBrowser) => {
    browser
      .url("https://www.google.com")
      .waitForElementVisible("input[name='q']", 5000)
      .setValue("input[name='q']", "Nightwatch.js")
      .keys(browser.Keys.ENTER)
      .waitForElementVisible("#search", 5000)
      .assert.containsText("#search", "Nightwatch.js")
      .end();
  },
};
