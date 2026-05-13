import LoginPage from '../../pages/LoginPage'
import ProductsPage from '../../pages/ProductsPage'

describe('Ordenação de produtos', () => {

  beforeEach(() => {

    LoginPage.visit()

    LoginPage.login(
      'standard_user',
      'secret_sauce'
    )

  })

  it('Deve ordenar produtos de A-Z', () => {

    ProductsPage.selectSortOption('az')

    const productNames = []

    ProductsPage.getProductNames()
      .each(($el) => {

        productNames.push($el.text())

      })
      .then(() => {

        const sortedNames = [...productNames]
          .sort()

        expect(productNames)
          .to.deep.equal(sortedNames)

      })

  })
  
  it('Deve ordenar por preço menor para o maior', () => {

  ProductsPage.selectSortOption('lohi')

  const productPrices = []

  ProductsPage.getProductPrices()
    .each(($el) => {

      const price = Number(
        $el.text().replace('$', '')
      )

      productPrices.push(price)

    })
    .then(() => {

      const sortedPrices = [...productPrices]
        .sort((a, b) => a - b)

      expect(productPrices)
        .to.deep.equal(sortedPrices)

    })

})

})