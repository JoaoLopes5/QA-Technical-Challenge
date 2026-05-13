class ProductsPage {

  selectSortOption(value) {

    cy.get('[data-test="product-sort-container"]')
      .select(value)

  }

  getProductNames() {

    return cy.get('.inventory_item_name')

  }

  getProductPrices() {

    return cy.get('.inventory_item_price')

  }

}

export default new ProductsPage()