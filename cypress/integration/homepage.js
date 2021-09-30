const GLOBAL_CONSTANTS = require('../../src/GlobalConstants');

// Testing the landing page
describe("renders the home page", () => {
  beforeEach(() => {
    cy.visit('/', { timeout: 30000 })
  });
  // Testing rendered elements to the DOM
  it("renders correctly", () => {
    cy.get("#middlePanel").should("exist");
    cy.get("#information-container").should("exist");
    cy.get("#title").should("exist");
  });
  // Testing the GET request
  it('cy.request() - make a get request', () => {
    // https://on.cypress.io/request
    cy.request(GLOBAL_CONSTANTS.GENERAL_COMPANY_INFORMATION_PATH)
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
  })
  // Testing the navigation through the app using the upper navigation bar
  it('cy.go() - use the navigation buttons to test the routing', () => {
    cy.get('#History').click()
    cy.location('pathname').should('eq', '/history')
    cy.go('back')
    cy.get('#Crew').click()
    cy.location('pathname').should('eq', '/crew')
    cy.go('back')
    cy.get('#Flights').click()
    cy.location('pathname').should('eq', '/flights')  
  })
});

