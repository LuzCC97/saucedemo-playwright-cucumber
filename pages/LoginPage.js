require('dotenv').config();
const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
  }

 async navigate() {
   await this.page.goto(process.env.BASE_URL);
 }

//Aquí vive el cómo se hace el login

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async validateSuccessfulLogin() {
    await expect(this.page).toHaveURL(/inventory/);
  }

  async validateErrorMessage(expectedMessage) {
    await expect(this.page.locator(this.errorMessage)).toHaveText(expectedMessage);
  }
}

module.exports = LoginPage;