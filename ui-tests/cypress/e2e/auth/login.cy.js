import LoginPage from '../../pages/LoginPage'
import users from '../../fixtures/users.json'

describe('Fluxo de Login', () => {
  beforeEach(() => {
    LoginPage.visit()
  });

  users.forEach((user) => {

    it('Deve realizar o login com sucesso', () => {
      
      LoginPage.login(
        user.username,
        user.password
      )

      if (user.expected === 'success') {
        LoginPage.validateSuccessfulLogin()
      }
      else if(user.expected === 'blocked'){
        LoginPage.validateBlockedUser()
      }

    })
  })
  it('Deve exibir mensagem de erro com dados errados', () => {
      LoginPage.login('Teste','Teste')
      LoginPage.validateWrongAuth()
    });

})