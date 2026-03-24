const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/LoginPage');

Given('que el usuario abre la página de Sauce Demo', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When('inicia sesión con el usuario {string} y la contraseña {string}', async function (username, password) {
  await this.loginPage.login(username, password);
});

Then('debería ver la página de inventario', async function () {
  await this.loginPage.validateSuccessfulLogin();
});

Then('debería ver el mensaje de error {string}', async function (expectedMessage) {
  await this.loginPage.validateErrorMessage(expectedMessage);
});