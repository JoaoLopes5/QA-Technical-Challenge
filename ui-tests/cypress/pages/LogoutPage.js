import LoginPage from './LoginPage'

class LogoutPage {

  openMenu() {
    cy.get('#react-burger-menu-btn').click()
  }

  clickLogout() {
    cy.get('#logout_sidebar_link').click()
  }

  logout() {
    this.openMenu()
    this.clickLogout()
  }

  validateLogout() {
    cy.url().should('eq', 'https://www.saucedemo.com/')
  }

}

export default new LogoutPage()