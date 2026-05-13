import { faker } from '@faker-js/faker'

import LoginPage from '../../pages/LoginPage'
import ProductsPage from '../../pages/ProductsPage'
import CheckoutPage from '../../pages/CheckoutPage'
import CartPage from '../../pages/CartPage'

describe('Fluxo de checkout completo', () => {

  beforeEach(() => {

    LoginPage.visit()

    LoginPage.login(
      'standard_user',
      'secret_sauce'
    )
    CartPage.adicionaraoCarrinho()

    CartPage.verificarCarrinho()

    CheckoutPage.clickCheckout()

  })

  it('Deve finalizar compra com sucesso', () => {

    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const postalCode = faker.location.zipCode()

    CheckoutPage.fillCheckoutInformation(
    firstName,
    lastName,
    postalCode
    )

    CheckoutPage.clickContinue()

    CheckoutPage.clickFinish()

    CheckoutPage.validateSuccessMessage()

  })
  it('Deve exibir erro ao deixar nome vazio', () => {
    const firstName = ''
    const lastName = faker.person.lastName()
    const postalCode = faker.location.zipCode()

    CheckoutPage.fillCheckoutInformation(
    firstName,
    lastName,
    postalCode
    )
    CheckoutPage.clickContinue()
    CheckoutPage.validateErrorMessage(
      'Error: First Name is required'
    )
  });

})