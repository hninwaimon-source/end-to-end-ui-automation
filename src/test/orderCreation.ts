import { NightwatchAPI } from "nightwatch";
import { DemoPage } from "../page-objects/demoPage";
import constants from "../helpers/constants";


describe("order creation", () => {

it("verify the shopping order", async function (browser: NightwatchAPI) {

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
	.clickButton("@checkoutButton")


	.setInputValue("@firstName", "John")
	.setInputValue("@lastName", "Doe")
	.setInputValue("@postalCode", "12345")

	.clickButton("@continueButton")
	.clickButton("@finishButton")

	.assertTextEquals("@completeHeader", "Thank you for your order!")
	.assertTextEquals("@completeDescription", "Your order has been dispatched, and will arrive just as fast as the pony can get there!")
	.clickButton("@backHomeButton");

});

});
