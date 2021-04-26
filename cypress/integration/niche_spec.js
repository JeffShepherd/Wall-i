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

  it('Should show a hero photo on load', () => {
    cy.get('img[id=uYA3q_83I5U]')
      .should('be.visible')
      .should('have.attr', 'src')
      .should('include', 'https://images.unsplash.com/photo-1616952801670-d33ab59d45bc?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMjQ5MjF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTkzODc3NjE&ixlib=rb-1.2.1&q=85')
  })

  it('Should have a favorites link', () => {
    cy.get('p').contains('favorites')
  })

  it('Should reflect a form with a search button', () => {
    cy.get('form').children().should('have.length', 2)
  })

  it('Should update the URL when clicking favorites', () => {
    cy.get('.favorite-link').click()
      .url().should('eq', 'http://localhost:3000/favorites')
  })

})


// describe('Sad paths', () => {

//   beforeEach(() => {
//     cy.fixture('random.json')
//     .then(randomData => {
//       cy.intercept(
//         'GET',
//         `https://api.unsplash.com/photos/random/?client_id=${Cypress.env('KEY')}&orientation=squarish`,
//         { 
//           statusCode: 200,
//           body: randomData
//         }
//       )
//     })
//     cy.visit('http://localhost:3000/')
//   })

// })