Feature: Searching internets
  Scenario: Single user opens Google and submits search query
    Given "Alice" opens page "https://google.com"
    Then "Alice" waits 3 seconds
    Then "Alice" should see element with title "Search"
    Then "Alice" types "cucumber-js" in element with title "Search"
    Then "Alice" waits 3 seconds
    Then "Alice" clicks on element with value "1" in attribute "data-view-type"
    Then "Alice" waits 3 seconds
    Then "Alice" should see text "results"
