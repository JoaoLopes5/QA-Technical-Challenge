import LoginPage from '../../pages/LoginPage'
import LogoutPage from '../../pages/LogoutPage'

describe('Logout', () => {

  it('Deve realizar logout com sucesso', () => {

    LoginPage.visit()

    LoginPage.login(
      'standard_user',
      'secret_sauce'
    )

    LogoutPage.logout()

    LogoutPage.validateLogout()

  })

})