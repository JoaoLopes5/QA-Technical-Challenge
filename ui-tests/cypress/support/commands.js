Cypress.Commands.add('login', (username, password) => {
  cy.get('[data-test="username"]').clear().type(username)
  cy.get('[data-test="password"]').clear().type(password)
  cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('logout',() => {
  cy.login('standard_user','secret_sauce')
  cy.get('#react-burger-menu-btn').click()
  cy.get('[data-test="logout-sidebar-link"]').click()
})