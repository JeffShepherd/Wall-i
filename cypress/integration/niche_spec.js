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

  it('Should have a favorites button', () => {
    cy.get('.random-favorite-button')
      .contains('❤')
  })

  it('Should reflect a form with a search button', () => {
    cy.get('form')
      .children()
      .should('have.length', 2)
  })

  it('Should update the URL when clicking favorites', () => {
    cy.get('.favorite-link')
      .click()
      .url().should('eq', 'http://localhost:3000/favorites')
  })

  it('Should be able to favorite the landing page photo', () => {
    cy.get('button[id=uYA3q_83I5U]')
      .click()
    cy.get('.favorite-link')
      .click()
    cy.get('.card')
      .find('img')
      .should('have.attr', 'alt')
      .should('include', 'man in black suit jacket beside man in black suit')
  })

  it('Should show the photographer\'s name on the landing page photo', () => {
    cy.get('.photographer')
      .contains('Jonathan Petit')
  })

  it('Should have an icon that downloads the photo', () => {
    cy.get('.download-button')
     .should('have.attr', 'href')
      .should('include', 'https://unsplash.com/photos/uYA3q_83I5U/download?force=true')
  })

  it('Should have a button that displays another random photo', () => {
    cy.fixture('random2.json')
    .then(random2Data => {
      cy.intercept(
        'GET',
        `https://api.unsplash.com/photos/random/?client_id=${Cypress.env('KEY')}&orientation=squarish`,
        { 
          statusCode: 200,
          body: random2Data
        }
      )
    })

    cy.get('.get-random-button')
      .click()
    cy.get('img[id=9X8j4ppcUPI]')
      .should('be.visible')
  })

})


describe('Searching and favoriting', () => {
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
    cy.fixture('favorites.json')
    .then(favoritesData => {
      cy.intercept(
        'GET',
        `https://api.unsplash.com/search/photos/?client_id=${Cypress.env('KEY')}&query=fish&orientation=portrait`,
        { 
          statusCode: 200,
          body: favoritesData
        }
      )
    })
    cy.visit('http://localhost:3000/')
    cy.get('.search-input')
      .type('fish{enter}')
  })

  it('Should display a card for each result that the search request returns', () => {
    cy.get('.card-container')
      .children()
      .should('have.length', 10)
  })

  it('Should be able to favorite a photo from a search and view it in the favorites section', () => {
    cy.get('button[id=giBrgSp9KW4]')
      .click()
    cy.get('.favorite-link')
      .click()
    cy.get('.card')
      .find('img')
      .should('have.attr', 'alt')
      .should('include', 'orange and white fish in fish tank')
  })

  it('Should be able to favorite more than one photo', () => {
    cy.get('button[id=giBrgSp9KW4]')
      .click()
    cy.get('button[id=1AjxqINfBYs]')
      .click()
    cy.get('.favorite-link')
      .click()
    cy.get('.card')
      .find('img')
      .should('have.attr', 'alt')
      .should('include', 'underwater photography of white jellyfish')
  })

  it('Should be able to unfavorite a photo', () => {
    cy.get('button[id=giBrgSp9KW4]')
      .click()
    cy.get('.favorite-link')
      .click()
    cy.get('button[id=giBrgSp9KW4]')
      .click()
    cy.get('.card')
      .should('not.exist')
    cy.get('.favorites-message')
      .contains('no favorites added yet')
  })

  it('Should be able to download a photo from a favorited photo in favorites view', () => {
    cy.get('button[id=giBrgSp9KW4]')
      .click()
    cy.get('.favorite-link')
      .click()
    cy.get('.download-button-card')
      .should('have.attr', 'href')
      .should('include', 'https://unsplash.com/photos/giBrgSp9KW4/download?force=true')
  })

  it('Should be able to view the photographer from a favorited photo in favorites view', () => {
    cy.get('button[id=giBrgSp9KW4]')
      .click()
    cy.get('.favorite-link')
      .click()
    cy.get('.photographer-card')
      .contains('Niklas Du')
  })

})


describe('Sad paths', () => {

  it('Should show an error message when the random photo API request fails', () => {
    cy.intercept({
      method: 'GET',
      url: `https://api.unsplash.com/photos/random/?client_id=${Cypress.env('KEY')}&orientation=squarish`
    },
      {
        statusCode: 500,
        body:''
      });
    cy.visit('http://localhost:3000/')
    cy.get('.error-message')
      .contains('An error has occured. Please try again later.')
  })

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
  })

  it('Should show an error message when the searc API request fails', () => {

    cy.intercept({
      method: 'GET',
      url: `https://api.unsplash.com/search/photos/?client_id=${Cypress.env('KEY')}&query=fish&orientation=portrait`
    },
      {
        statusCode: 500,
        body:''
      });

    cy.visit('http://localhost:3000/')
    cy.get('.search-input')
    .type('fish{enter}')

    cy.get('.error-message')
      .contains('An error has occured. Please try again later.')
  })

  it('Should inform the user when nothing matches their search criteria', () => {

    cy.intercept({
      method: 'GET',
      url: `https://api.unsplash.com/search/photos/?client_id=${Cypress.env('KEY')}&query=wfwfe2332&orientation=portrait`
    },
      {
        statusCode: 200,
        body:{
          "total": 0,
          "total_pages": 0,
          "results": []
      }
      });

    cy.visit('http://localhost:3000/')
    cy.get('.search-input')
    .type('wfwfe2332{enter}')

    cy.get('.search-message')
      .contains('No results for this search. Please try a different topic.')
  })

})