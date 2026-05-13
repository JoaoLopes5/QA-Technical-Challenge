import CartPage from '../../pages/CartPage'
import LoginPage from '../../pages/LoginPage'


describe('Responsividade', () => {

  const devices = [
    'iphone-x',
    'ipad-2',
    'macbook-15'
  ]

  devices.forEach((device) => {

    it(`Deve validar responsividade no ${device}`, () => {

      cy.viewport(device)

      LoginPage.visit()

      LoginPage.login(
        'standard_user',
        'secret_sauce'
      )

      CartPage.adicionaraoCarrinho(
        'sauce-labs-backpack'
      )

      cy.get('.shopping_cart_badge')
        .should('be.visible')

    })

  })

})