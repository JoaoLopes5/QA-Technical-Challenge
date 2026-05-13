class CartPage {
    adicionaraoCarrinho(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    }
    verificarCarrinho(){
        cy.get('[data-test="shopping-cart-link"]').click()
    }
    validaritenCarrinho(){
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Backpack')
    }
    removeritenCarrinho(){
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    }
    validaritenRemovido(){
        cy.get('[data-test="inventory-item"]').should('not.exist')
    }
    continueShopping(){
        cy.get('#continue-shopping').click()
    }
}

export default new CartPage()