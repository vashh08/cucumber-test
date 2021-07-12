$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/login.feature");
formatter.feature({
  "name": "Login Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Success Login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Open chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.open_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Open login page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.open_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username \"sumbhoolaulp@gmail.com\" and password \"V@shish123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.click_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Open dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.open_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid Login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Open chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.open_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Open login page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.open_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username \"wrong@gmail.com\" and password \"wrong\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.click_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error Message appears",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.error_Message_appears()"
});
formatter.result({
  "status": "passed"
});
});