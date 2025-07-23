import { NightwatchAPI } from "nightwatch";
import { DemoPage } from "../page-objects/demoPage";
import constants from "../helpers/constants";


describe("order delete", () => {

it("verify the order remove", async function (browser: NightwatchAPI) {

	const demoPage = browser.page.demoPage() as DemoPage;

	await demoPage.navigate()
	.setInputValue("@username", `${process.env.USER_EMAIL}`)
	.setInputValue("@password", `${process.env.USER_PASSWORD}`)
	.clickButton("@loginButton")
	.pause(constants.milliseconds.waitTimeMedium)

	demoPage.clickButton("@addToCardBackpack")
	.clickButton("@addToCardBikeLight")
	.clickButton("@addToCardTshirt")
	.clickButton("@addToCardJacket")
	.clickButton("@addToCardOnesie")
	.clickButton("@addToCardRedTshirt")

	.clickButton("@viewCartButton")

	.clickButton("@removeBackpack")
	.clickButton("@removeBikeLight")
	.clickButton("@removeTshirt")
	.clickButton("@removeJacket")
	.clickButton("@removeRedTshirt")
	.clickButton("@removeOnesie")
	.clickButton("@continueShopping")
	.assertTextEquals("@addToCardBackpack","Add to cart")
	.assertTextEquals("@addToCardBikeLight","Add to cart")
	.assertTextEquals("@addToCardTshirt","Add to cart")
	.assertTextEquals("@addToCardJacket","Add to cart")
	.assertTextEquals("@addToCardOnesie","Add to cart")

});

});
