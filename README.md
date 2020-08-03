##  AutomationPractice E2E Test

automationpractice.com  automation test framework was developed using `Cypress` End-To-End(E2E) testing framework tool
`https://www.cypress.io/`



## Installation and Setup

1. Clone the repository https://github.com/legzy27/Beamery-E2E-Test.git
2. Once you download the repository cd into the directory 
3. Install necessary dependencies with `npm install` command before the cypress E2E tests can run locally
4. To launch the test locally use the command `npx cypress open` this will launch the cypress  window 
5. Click on any test inside the window to run
6. To generate a test report run use the command `npm run test` press enter
6. To view test report open reports folder, click on mochareports folder, right click assets folder and reveal in finder, click to open report.html file to view report

## Note
* Page object model(POM) was used in the E2E test automation framework


## Issue With User Register Automated Test
 * User is on the authentication page, fill the form and click register button
 * User will see "There is 1 error This country requires you to choose a State."
 * Selected state from the dropdown list disappear when the user click register button
 * This process works manaully
