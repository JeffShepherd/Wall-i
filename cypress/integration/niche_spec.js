describe('Home page', () => {

  beforeEach(() => {
    cy.fixture('random.json')
    .then(randomData => {
      cy.intercept(
        'GET',
        `https://api.unsplash.com/photos/random/?client_id=${Cypress.env('KEY')}&orientation=squarish`,
        { 
          statusCode: 200,
          body: randomData
        }
      )
    })
    cy.visit('http://localhost:3000/')
  })

  it('Show a hero photo on load', () => {
    cy.get('img[id=uYA3q_83I5U]').should('be.visible')
  })

  it('Shows have a favorites link', () => {
    cy.get('p').contains('favorites')
  })

  it('Should reflect a form with a search button', () => {
    cy.get('form').children().should('have.length', 2)
  })

})