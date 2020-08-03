it('User log in account page', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.contains('a', 'Sign in').click()
    cy.get('#email').type('example@netguru.com')
    cy.get("#passwd").type('password{enter}')
    cy.wait(2000)
    cy.title().should('include', 'My account')
  })