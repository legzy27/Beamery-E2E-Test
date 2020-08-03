class  UserRegister {
    userRegister(){
     cy.visit('http://automationpractice.com/index.php')    

 }

  userEnterEmail(){
  
    function Name_Alpha_Email() {
        var text = "";
        var possible = "abcdefghijk123456";
     
        for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
     
        return text + "@gmail.com";
     }
    cy.wait(3000)
    cy.get('a.login').click()
    const randomEmail = Name_Alpha_Email()
    cy.get('#email_create').type(randomEmail)
    cy.get('#SubmitCreate').click()
    return this;

  }

  userFillInfo(){
    cy.wait(3000)
    cy.get('[type="radio"]').first().check()
    cy.get('#customer_firstname').type('Timmy')
    cy.get('#customer_lastname').type('Gordon')
    cy.wait(3000)
    cy.get('#passwd').type('Allstar27')
    cy.get('#days').select('11')
    cy.get('#months').select('April')
    cy.get('#years').select('2000')
    cy.get('#address1').type('45 Mount Street')
    cy.get('#city').type('Anchorage')
    cy.wait(3000)

    cy.get('[name="id_state"]').select('Alaska', {force: true})
    cy.get('option').contains('Alaska').then(option => {
    cy.wrap(option).contains('Alaska');
    option[0].click();
       
    })
    cy.wait(3000)
    cy.get('#postcode').type('99501')
    cy.get('#id_country').select('United States')
    cy.get('#phone_mobile').type('907-923-0427')
    cy.get('#alias').clear()
    .type('46 Mount Street')
    cy.get('#submitAccount').click()
    return this
  }





}


export default UserRegister