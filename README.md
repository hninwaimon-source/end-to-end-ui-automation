E2E Test Automation with Nightwatch.js

In this case, I have implemented the test cases following your test cases using Nightwatch.js, as there is no specific deadline for submission.
I suppose that most automation tests are similar, with differences mainly in the language and framework used.


## Overview
This project is an End-to-End (E2E) test automation suite built using Nightwatch.js

## Features

Automated E2E testing using Nightwatch.js
Cross-browser testing support
Page Object Model (POM) for maintainable test scripts
Reporting and logging for test results

## Prerequisites

Ensure you have the following installed:
Node.js (v16 or later)
npm
Nightwatch.js
Web drivers for supported browsers (ChromeDriver)

## Installation
```shell
git clone https://github.com/hninwaimon-source/end-to-end-ui-automation.git
cd assignment-one
npm install
npm install nightwatch --save-dev
npm install chromedriver --save-dev

-------------------------------------------------------------
Local chrome driver version
npx chromedriver --version

If your version is not updated, 
npm uninstall chromedriver
npm install chromedriver@latest --save-dev

Global ChromeDriver installation
npm install -g chromedriver

Check the version
chromedriver --version
--------------------------------------------------------------

```

```shell
npm run test filepath

run all file path
eg: npm run test src/test

run only one file
eg: npm run test src/test/loginValidation.ts
```
## Run with headless

```shell
npx nightwatch filepath --headless
```

Author
Hnin Wai Mon
