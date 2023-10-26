# Cypress Page Object Model (POM) Sample Project

This is a sample project demonstrating the use of Cypress for end-to-end testing, following the Page Object Model (POM) pattern. The project focuses on testing the Cypress documentation website (docs.cypress.io) and includes reusable page objects and test scripts.

## Project Structure

The project is organized as follows:

- `cypress/e2e/pages`: Contains page objects that encapsulate interactions with web pages. These page objects inherit from a `BasePage` class to manage common settings.

- `cypress/e2e/tests`: Contains test scripts that use the page objects to perform specific test cases.

## Page Objects

### BasePage.js

- The `BasePage` class provides a base for other page objects in the project.
- It includes common settings like the base URL and timeout values.

### DocBasePage.js

- The `DocBasePage` class represents the Cypress documentation page.
- It extends the `BasePage` class and defines selectors and methods specific to the Cypress documentation page.

## Test Scripts

### DocHeaderTest.cy.js

- The `DocHeaderTest` script contains test cases for the Cypress documentation header.
- It demonstrates how to use the `DocBasePage` page object to perform various checks on the header, announcement bar, navigation bar links, and color mode toggle.

## Getting Started

To run the Cypress tests in this project, follow these steps:

1. Clone this repository to your local machine.

2. Install the project dependencies by running: `npm install`

3. Set the base URL for application. Open the `cypress.env.json` file and set the `BASE_URL` value with the URL to `docs.cypress.io`.

4. Run Cypress with the following command: `npx cypress open`
5. Select the test suite (`DocHeaderTest.cy.js`) and start the tests.
