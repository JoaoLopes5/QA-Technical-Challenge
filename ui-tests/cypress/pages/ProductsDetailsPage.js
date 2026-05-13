class ProductDetailsPage{
    productDetais(){
        cy.contains('.inventory_item_name', 'Sauce Labs Backpack').click()
    }

     goBack() {
    cy.get('[data-test="back-to-products"]').click()
  }

}
export default new ProductDetailsPage()