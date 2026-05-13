describe('Lighthouse Audit', () => {

  it('Deve validar acessibilidade da página de login', () => {

    cy.visit('/')

    cy.lighthouse({

      accessibility: 80,
      performance: 50,
      seo: 50,
      'best-practices': 50

    })

  })

})