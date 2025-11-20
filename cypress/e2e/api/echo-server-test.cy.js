
describe('Echo Server API Requests', () => {
	// define the base URL for the API
    const BASE_URL = 'https://echo-serv.tbxnet.com/v1'
    // define a limit for the request time in milliseconds
    const max_duration = 3000
    // define request text
    const request_text = 'Testing echo server GET request'
    
    // Test GET request

  it('GET /qa/test1 - Debe devolver datos válidos', () => {

    cy.request({
      method: 'GET',
      url: 'https://echo-serv.tbxnet.com/v1/qa/test1'
    }).then((response) => {

      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('status').and.eq('SUCCESS');
      expect(response.duration).to.be.lessThan(2000);
    });

  });

 // Test POST request
  it('POST /qa/test - Debe enviar y recibir un body válido', () => {

    const payload = {
      name: "Tester",
      price: 30,
    };

    cy.request({
      method: 'POST',
      url: 'https://echo-serv.tbxnet.com/v1/qa/test',
      body: payload,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {

      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('echo');
      expect(response.body.echo.name).to.eq(payload.name);
      expect(response.duration).to.be.lessThan(2000);
    });

  });

});
