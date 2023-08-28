describe('Login Backmarket with HTML fomr', () => {
  beforeEach(() => { cy.visit("https://preprod.backmarket.fr/fr-fr/register") })
  it('Login failed because wrong credentials', () => {
    cy.get('span').contains('Refuse').click()

    // get type 2 inputs
    cy.get('input[id=signin-email]').type('alexandre.luis.dev@gmail.com')
    cy.get('input[id=signin-password]').type('IntoTheWild200!{enter}')


    // error visible
    cy.get('.text-red-700')
    .should('be.visible')
    .and('contain', 'Saisissez un e-mail et un mot de passe valides.')

    // same url
    cy.url().should('include', 'register')
  })

  it('Login successfull', () => {
    cy.get('span').contains('Refuse').click()

    // get type 2 inputs
    cy.get('input[id=signin-email]').type('alexandre.luis.dev@gmail.com')
    cy.get('input[id=signin-password]').type('IntoTheWild2000!{enter}')
    
    // url contain dashboard
    cy.url().should('include', 'dashboard')
  })
})