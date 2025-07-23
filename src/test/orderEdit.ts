import { NightwatchAPI } from "nightwatch";
import { DemoPage } from "../page-objects/demoPage";
import constants from "../helpers/constants";


describe("order edit", () => {

it("verify the order updating", async function (browser: NightwatchAPI) {

	const demoPage = browser.page.demoPage() as DemoPage;

	await demoPage.navigate()
	.setInputValue("@username", `${process.env.USER_EMAIL}`)
	.setInputValue("@password", `${process.env.USER_PASSWORD}`)
	.clickButton("@loginButton")
	.pause(constants.milliseconds.waitTimeMedium)

	demoPage.clickButton("@addToCardBackpack")
	.clickButton("@addToCardBikeLight")

	.clickButton("@viewCartButton")

	.clickButton("@removeBackpack")
	.clickButton("@removeBikeLight")

	.clickButton("@continueShopping")
	.assertTextEquals("@addToCardBackpack","Add to cart")
	.assertTextEquals("@addToCardBikeLight","Add to cart")

	.clickButton("@addToCardTshirt")
	.clickButton("@addToCardJacket")

	.clickButton("@viewCartButton")
	.clickButton("@checkoutButton")

	.setInputValue("@firstName", "John")
	.setInputValue("@lastName", "Doe")
	.setInputValue("@postalCode", "12345")

	.clickButton("@continueButton")
	.clickButton("@finishButton")

	.assertTextEquals("@completeHeader", "Thank you for your order!")

});

});
