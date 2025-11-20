describe('Registro de usuario - Automation Exercise', () => {

  it('Crear un nuevo usuario', () => {

    const user = {
      name: "cristianguzman",
      email: `cristianguzman_${Date.now()}@test.com`,
      password: "Password123!",
	  firstname: "Cristian";
	  lastname: "Guzman";
	  address: "Callefalsa 123"
	  state: "Mendoza"
	  city: "Maipu"
	  zipcode: "5513"
	  mobilenumber: "123123123"
    };
// Visito la página de registro
    cy.visit('https://automationexercise.com/');

//clic en link signup
    cy.contains('Signup / Login').click();
//	ingreso usuario
    cy.get('input[data-qa="signup-name"]').type(user.name);
//	ingreso email
    cy.get('input[data-qa="signup-email"]').type(user.email);
//	clic en boton signup
    cy.get('button[data-qa="signup-button"]').click();
// selecciono genero
    cy.get('#id_gender1').click();
	
//ingreso password	
    cy.get('#password').type(user.password);
	
//ingreso fecha nacimiento
    cy.get('#days').select('10');
    cy.get('#months').select('April');
    cy.get('#years').select('1990');
	
//selecciono checkboxes
    cy.get('#newsletter').check();
    cy.get('#optin').check();

//completo direccion
cy.get('input[data-qa="first_name"]').type(user.firstname);  //First name *
cy.get('input[data-qa="last_name"]').type(user.lastname);  //Last name *
cy.get('input[data-qa="address"]').type(user.address);  //Address * 
cy.get('#country').select('Australia'); //country * ......
cy.get('input[data-qa="state"]').type(user.state);  //state * 
cy.get('input[data-qa="city"]').type(user.city);  //city * 
cy.get('input[data-qa="zipcode"]').type(user.zipcode);  //zipcode * 
cy.get('input[data-qa="mobile_number"]').type(user.mobilenumber); //mobile number * 






    cy.get('button[data-qa="create-account"]').click();

    cy.contains('Account Created').should('be.visible');
  });

});