describe('Flujo de Login - Automation Exercise', () => {

  it('Permite a un usuario loguearse', () => {

    const user = {
      email: "guzman.cristian@gmailcom",
      password: "Password123!",
    };

    cy.visit('https://automationexercise.com/');
    cy.contains('Signup / Login').click();

    cy.get('input[data-qa="login-email"]').type(user.email);
    cy.get('input[data-qa="login-password"]').type(user.password);
    cy.get('button[data-qa="login-button"]').click();

    cy.contains('Logged in as').should('be.visible');
  });

});