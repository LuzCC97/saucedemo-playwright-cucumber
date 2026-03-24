const { expect } = require('@playwright/test');

class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addBackpackButton = '#add-to-cart-sauce-labs-backpack';
    this.cartIcon = '.shopping_cart_link';
    this.cartBadge = '.shopping_cart_badge';
  }

  async addProductToCart() {
    await this.page.click(this.addBackpackButton);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }

  async validateProductAddedToCart() {
    await expect(this.page.locator(this.cartBadge)).toHaveText('1');
  }
}

module.exports = InventoryPage;