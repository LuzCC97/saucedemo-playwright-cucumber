const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItem = '.cart_item';
    this.checkoutButton = '#checkout';
  }

  async validateProductInCart() {
    await expect(this.page.locator(this.cartItem)).toBeVisible();
  }

  async clickCheckout() {
    await this.page.click(this.checkoutButton);
  }
}

module.exports = CartPage;