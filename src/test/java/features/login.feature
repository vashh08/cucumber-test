Feature: Login Test
  Scenario: Success Login
    Given Open chrome browser
    When Open login page
    And Enter username "sumbhoolaulp@gmail.com" and password "V@shish123"
    And Click login
    Then Open dashboard page

  Scenario: Invalid Login
    Given Open chrome browser
    When Open login page
    And Enter username "wrong@gmail.com" and password "wrong"
    And Click login
    Then Error Message appears