const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

Given('que el usuario ha iniciado sesión con {string} y {string}', async function (username, password) {
  this.loginPage = new LoginPage(this.page);
  this.inventoryPage = new InventoryPage(this.page);
  this.cartPage = new CartPage(this.page);
  this.checkoutPage = new CheckoutPage(this.page);

  await this.loginPage.navigate();
  await this.loginPage.login(username, password);
  await this.loginPage.validateSuccessfulLogin();
});

Given('agrega un producto y navega al carrito', async function () {
  await this.inventoryPage.addProductToCart();
  await this.inventoryPage.validateProductAddedToCart();
  await this.inventoryPage.goToCart();
});

When('inicia el proceso de checkout', async function () {
  await this.cartPage.validateProductInCart();
  await this.cartPage.clickCheckout();
});

When('completa sus datos con {string}, {string} y {string}', async function (firstName, lastName, postalCode) {
  await this.checkoutPage.fillCheckoutInformation(firstName, lastName, postalCode);
  await this.checkoutPage.clickContinue();
});

When('finaliza la compra', async function () {
  await this.checkoutPage.clickFinish();
});

Then('debería ver el mensaje de confirmación de compra', async function () {
  await this.checkoutPage.validateOrderCompleted();
});