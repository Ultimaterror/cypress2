describe('Inscription Backmarket with HTML fomr', () => {
  beforeEach(() => { cy.visit("https://preprod.backmarket.fr/fr-fr/register") })
  it('Inscription failed because password', () => {
    cy.get('span').contains('Refuse').click()

    // get type 4 inputs
    cy.get('input[id=firstName]').type('a')
    cy.get('input[id=lastName]').type('a')
    cy.get('input[id=signup-email]').type('alexandre.luis.dev99@gmail.com')
    cy.get('input[id=signup-password]').type('IntoTheWild{enter}')

    // error visible
    cy.get('.border-danger')

    // same url
    cy.url().should('include', 'register')
  })

  it('Inscription successfull', () => {
    cy.get('span').contains('Refuse').click()

    // get type 4 inputs
    cy.get('input[id=firstName]').type('a')
    cy.get('input[id=lastName]').type('a')
    cy.get('input[id=signup-email]').type('alexandre.luis.dev9999@gmail.com')
    cy.get('input[id=signup-password]').type('IntoTheWild2000!{enter}')

    // url contain dashboard
    cy.url().should('include', 'dashboard')
  })
})