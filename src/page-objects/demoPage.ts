import { PageObjectModel, EnhancedPageObject } from "nightwatch";
// import constants from "../helpers/constants";
// const sm = constants.milliseconds.sm;

const demoCommands = {

  setInputValue: function (this: DemoPage, selector: string, value: string) {
    return this.waitForElementVisible(selector)
    .setValue(selector, value);
  },

  clickButton: function (this: DemoPage, selector: string) {
    return this.waitForElementVisible(selector).click(selector);
  },

  assertTextEquals: function (this: DemoPage, selector: string, value: string) {
          return this.waitForElementVisible(selector)
          .assert.textContains(selector, value);
  },

  assertLink: function(this: DemoPage, value: string) {
          return this.expect.url().to.contain(value);
  }

};

const demoPage: PageObjectModel = {
  url: `${browser.launchUrl}`,
  commands: [demoCommands],

  elements: {

          logoName: ".login_logo",
          username: "#user-name",
          password: "#password",
          loginButton: "#login-button",

          addToCardBackpack: "#add-to-cart-sauce-labs-backpack",
          addToCardBikeLight: "#add-to-cart-sauce-labs-bike-light",
          addToCardTshirt: "#add-to-cart-sauce-labs-bolt-t-shirt",
          addToCardJacket: "#add-to-cart-sauce-labs-fleece-jacket",
          addToCardOnesie: "#add-to-cart-sauce-labs-onesie",

          addToCardRedTshirt: {
                    selector: "//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']",
                    locateStrategy: "xpath",
          },

          viewCartButton: ".shopping_cart_link",
          checkoutButton: "#checkout",

          firstName: "#first-name",
          lastName: "#last-name",
          postalCode: "#postal-code",
          continueButton: "#continue",

          finishButton: "#finish",

          completeHeader: ".complete-header",
          completeDescription: ".complete-text",
          backHomeButton: "#back-to-products",

          //LoginError
          errorMessage: ".error-message-container.error",

          //Remove Items
          removeBackpack: "#remove-sauce-labs-backpack",
          removeBikeLight: "#remove-sauce-labs-bike-light",
          removeTshirt: "#remove-sauce-labs-bolt-t-shirt",
          removeJacket: "#remove-sauce-labs-fleece-jacket",
          removeRedTshirt:"button[id='remove-test.allthethings()-t-shirt-(red)']",
          removeOnesie: "#remove-sauce-labs-onesie",

          continueShopping: "#continue-shopping",


  },
};

export interface DemoPage
  extends EnhancedPageObject<
    typeof demoCommands,
    typeof demoPage.elements
  > {}

export default demoPage as DemoPage;
