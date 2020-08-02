import _ from 'lodash'

describe("User Registration", function () {
    it('Navigate to the Landing Page', function () {
        cy.visit('http://automationpractice.com/index.php')

    })
 
    it('Click signin button and enter your email to create an account', function () {
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
     

    })

    it('Fill Personal Information and click register button', function () {
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

     

    
        
        //cy.get('#account-creation_form > .account_creation > .required > #uniform-id_state > #id_state').click()
 
        cy.get('#id_state')
        .select('Alaska', {force: true})
        .invoke('val')
        .should('eq', '2')


    

        cy.wait(3000)
        
        cy.get('#postcode').type('99501')
        cy.get('#id_country').select('United States')
        cy.get('#phone_mobile').type('907-923-0427')
        cy.get('#alias').clear()
        .type('46 Mount Street')
        cy.get('#submitAccount').click()

    })


})


