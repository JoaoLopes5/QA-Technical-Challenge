import CartPage from '../../pages/CartPage'
import LoginPage from '../../pages/LoginPage'
import ProductsDetailsPage from '../../pages/ProductsDetailsPage'

describe('Navegação', () => {

  beforeEach(() => {

    LoginPage.visit()

    LoginPage.login(
      'standard_user',
      'secret_sauce'
    )

  })

it('Deve navegar para o carrinho', () => {

    CartPage.verificarCarrinho()

    cy.url()
      .should('include', '/cart.html')

  })

it('Deve voltar para a página de produtos', () => {

  CartPage.verificarCarrinho()

  CartPage.continueShopping()

  cy.url()
    .should('include', '/inventory.html')

})

it('Deve acessar detalhes do produto', () => {

  ProductsDetailsPage.productDetais()

  cy.url()
    .should('include', '/inventory-item.html')

})

it('Deve voltar para produtos', () => {

  ProductsDetailsPage.productDetais()

  ProductsDetailsPage.goBack()

  cy.url()
    .should('include', '/inventory.html')

})

})