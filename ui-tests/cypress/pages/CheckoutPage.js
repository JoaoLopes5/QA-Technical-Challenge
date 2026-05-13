class CheckoutPage {

    validateErrorMessage(message) {

  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', message)

}

  clickCheckout() {

    cy.get('[data-test="checkout"]')
      .click()

  }

  fillFirstName(firstName) {
    if(firstName){
    cy.get('[data-test="firstName"]')
    .type(firstName)
    }

  }

  fillLastName(lastName) {

    cy.get('[data-test="lastName"]')
      .type(lastName)

  }

  fillPostalCode(postalCode) {

    cy.get('[data-test="postalCode"]')
      .type(postalCode)

  }

  clickContinue() {

    cy.get('[data-test="continue"]')
      .click()

  }

  clickFinish() {

    cy.get('[data-test="finish"]')
      .click()

  }

  fillCheckoutInformation(
    firstName,
    lastName,
    postalCode
  ) {

    this.fillFirstName(firstName)
    this.fillLastName(lastName)
    this.fillPostalCode(postalCode)

  }

  validateSuccessMessage() {

    cy.get('.complete-header')
      .should(
        'contain',
        'Thank you for your order!'
      )

  }

  validateErrorMessage(message) {

    cy.get('[data-test="error"]')
      .should('contain', message)

  }

}

export default new CheckoutPage()