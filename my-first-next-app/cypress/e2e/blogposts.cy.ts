describe('Blog Posts Page with Mock Data', () => {
  beforeEach(() => {
    // Intercept the API call and provide mock data
    // cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', {
    //   fixture: 'posts.json',
    // }).as('getPosts');

    cy.visit('/06-e2e-cypress-async-RSC');
  });

  it('should display blog posts from mock data', () => {
    // cy.wait('@getPosts');
    cy.contains('qui est esse').should('exist');
  });
});
