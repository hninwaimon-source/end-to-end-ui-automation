import { NightwatchAPI } from "nightwatch";
import { DemoPage } from "../page-objects/demoPage";
import constants from "../helpers/constants";


describe("Login Testing", () => {
	const sqlPayload = "' OR '1'='1";

	it("verify the alert message without filling username and pwd", async function (browser: NightwatchAPI) {

		const demoPage = browser.page.demoPage() as DemoPage;
	
		await demoPage.navigate()
		.clickButton("@loginButton")
		.assertTextEquals("@errorMessage", "Epic sadface: Username is required")
	
	});
	
	it("verify the alert message without flling username", async function (browser: NightwatchAPI) {
	
		const demoPage = browser.page.demoPage() as DemoPage;
	
		await demoPage.navigate()
		.setInputValue("@password", `${process.env.USER_PASSWORD}`)
		.clickButton("@loginButton")
		.assertTextEquals("@errorMessage", "Epic sadface: Username is required")
	
	});
	
	it("verify the alert message without filling password", async function (browser: NightwatchAPI) {
	
		const demoPage = browser.page.demoPage() as DemoPage;
	
		await demoPage.navigate()
		.setInputValue("@username", `${process.env.USER_EMAIL}`)
		.clickButton("@loginButton")
		.assertTextEquals("@errorMessage", "Epic sadface: Password is required")
	
	});

	it("verify the invalid username and valid password", async function (browser: NightwatchAPI) {

		const demoPage = browser.page.demoPage() as DemoPage;

		await demoPage.navigate()
		.setInputValue("@username", "HelloWorld")
		.setInputValue("@password", `${process.env.USER_PASSWORD}`)
		.clickButton("@loginButton")
		.assertTextEquals("@errorMessage", "Epic sadface: Username and password do not match any user in this service")

	});

	it("verify the invalid username and invalid password", async function (browser: NightwatchAPI) {

		const demoPage = browser.page.demoPage() as DemoPage;

		await demoPage.navigate()
		.setInputValue("@username", "HelloWorld")
		.setInputValue("@password", "HelloWorld")
		.clickButton("@loginButton")
		.assertTextEquals("@errorMessage", "Epic sadface: Username and password do not match any user in this service")

	});

	it("verify the valid username and invalid password", async function (browser: NightwatchAPI) {

		const demoPage = browser.page.demoPage() as DemoPage;

		await demoPage.navigate()
		.setInputValue("@username", `${process.env.USER_EMAIL}`)
		.setInputValue("@password", "HelloWorld")
		.clickButton("@loginButton")
		.assertTextEquals("@errorMessage", "Epic sadface: Username and password do not match any user in this service")

	});

	it("verify the alert message with SQL injection", async function (browser: NightwatchAPI) {

		const demoPage = browser.page.demoPage() as DemoPage;

		await demoPage.navigate()
		.setInputValue("@username", sqlPayload)
		.setInputValue("@password", sqlPayload)
		.clickButton("@loginButton")
		.assertTextEquals("@errorMessage", "Epic sadface: Username and password do not match any user in this service")

	});

	it("verify the valid username and valid password", async function (browser: NightwatchAPI) {

		const demoPage = browser.page.demoPage() as DemoPage;

		await demoPage.navigate()
		.setInputValue("@username", `${process.env.USER_EMAIL}`)
		.setInputValue("@password", `${process.env.USER_PASSWORD}`)
		.clickButton("@loginButton")
		.assertLink(`${browser.launchUrl}inventory.html`)

	});


});
