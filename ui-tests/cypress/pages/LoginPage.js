class LoginPage{
    visit(){
        cy.visit('/')
    }
    login(username, password){
    cy.get('[data-test="username"]').clear().type(username)
    cy.get('[data-test="password"]').clear().type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    }
    validateSuccessfulLogin() {
    cy.url().should('include', '/inventory.html')
  }
    validateBlockedUser(){
    cy.get('[data-test="error"]').should('contain','Sorry, this user has been locked out.')
    }
    validateWrongAuth(){
    cy.get('[data-test="error"]').should('contain',' Username and password do not match any user in this service')
    }
}

export default new LoginPage()