const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');

Given('que el usuario inicia sesión con {string} y {string}', async function (username, password) {
  this.loginPage = new LoginPage(this.page);
  this.inventoryPage = new InventoryPage(this.page);
  this.cartPage = new CartPage(this.page);

  await this.loginPage.navigate();
  await this.loginPage.login(username, password);
  await this.loginPage.validateSuccessfulLogin();
});

When('agrega un producto al carrito', async function () {
  await this.inventoryPage.addProductToCart();
});

When('navega al carrito de compras', async function () {
  await this.inventoryPage.goToCart();
});

Then('el carrito debería mostrar 1 producto', async function () {
  await this.inventoryPage.validateProductAddedToCart();
});

Then('debería visualizar el producto en el carrito', async function () {
  await this.cartPage.validateProductInCart();
});