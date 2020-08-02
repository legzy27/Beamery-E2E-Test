import UserRegistration from '../PageObjects/Home'


describe("HomePage", function () {

    const home = new UserRegistration()

    it('Testing the home page for automationpractice ', function () {
        home.visit()
        cy.wait(2000)
                

    })

    it('check for image in the header', () => {
    home.checkimageheader()
    cy.wait(1000) 

})

it("Check the contact us", () => {
     home.checkcontact()
     cy.wait(1000) 

})

it("Find the content 'Contact us'", () => {
  home.findcontent()
  cy.wait(1000)

})

it("Find the content 'Sign in'", () => {
    home.findcontentsignin()
    cy.wait(1000)
  
})

it('homepage slider should have 5 images', () => {
   home.homeslider()
   cy.wait(1000)
})

it('homepage slider description', () => {
    home.homesliderdescription()
    cy.wait(1000)

})

it("Test the logo", () => {
    home.checklogo()
    cy.wait(1000)

})

it("Should have 4 social media icons", () => {
    home.checkicons()
    
})

})
