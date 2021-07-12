package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    @FindBy(how = How.ID, using = "modalusername")
    public WebElement txtUsername;

    @FindBy(how = How.NAME, using = "current-password")
    public WebElement txtPpassword;

    @FindBy(how = How.XPATH, using = "//*[@id=\"root\"]/div/div/div[4]/div/div/div[4]/div[1]/button")
    public WebElement btnLogin;

    public String errorMessage = "//*[@id=\"root\"]/div/div/div[4]/div/div/div[3]";

    public void Login(String userName, String password)
    {
        txtUsername.sendKeys(userName);
        txtPpassword.sendKeys(password);
    }

    public void ClickLogin()
    {
        btnLogin.click();
    }

    public String ErrorMessage() {
        return errorMessage;
    }
}
