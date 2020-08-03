import TestSuite from '../PageObjects/Userlogin'
describe("User login", function () {
    const login = new TestSuite()
    it('User navigate to home ', function () {
        login.loginCredentails()
        cy.wait(2000)             

    })

})