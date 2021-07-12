package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pages.LoginPage;

public class StepDefinitions {

    WebDriver driver;
    LoginPage loginPage;

    @Given("Open chrome browser")
    public void open_chrome_browser() {
        System.setProperty("webdriver.chrome.driver", "C:\\Drivers\\chromedriver\\chromedriver.exe");
        driver = new ChromeDriver();
        loginPage = new LoginPage(driver);
    }

    @When("Open login page")
    public void open_login_page() {
        driver.get("https://profile.w3schools.com/log-in");
    }

    @Then("Enter username {string} and password {string}")
    public void enter_username_and_password(String email, String password) {
        loginPage.Login(email, password);
    }

    @Then("Click login")
    public void click_login() throws InterruptedException {
        loginPage.ClickLogin();
        Thread.sleep(10000);
    }

    @Then("Open dashboard page")
    public void open_dashboard_page() {
        String actualUrl = driver.getCurrentUrl();
        String expectedUrl= "https://my-learning.w3schools.com/";
        Assert.assertEquals(expectedUrl,actualUrl);
    }

    @Then("Error Message appears")
    public void error_Message_appears() {
        Assert.assertTrue(driver.findElement(By.xpath(loginPage.ErrorMessage())).isDisplayed());
    }
}
