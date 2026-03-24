const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = '#first-name';
    this.lastNameInput = '#last-name';
    this.postalCodeInput = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
    this.completeHeader = '.complete-header';
  }

  async fillCheckoutInformation(firstName, lastName, postalCode) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
  }

  async clickContinue() {
    await this.page.click(this.continueButton);
  }

  async clickFinish() {
    await this.page.click(this.finishButton);
  }

  async validateOrderCompleted() {
    await expect(this.page.locator(this.completeHeader)).toHaveText('Thank you for your order!');
  }
}

module.exports = CheckoutPage;