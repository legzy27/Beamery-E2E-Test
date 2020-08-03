import TestSuite from '../PageObjects/Userregister'
describe("User Registration", function () {
    
    const register = new TestSuite()
    it('Navigate to Landing Page ', function () {
       register.userRegister()
                  

    })


    it('Click signin button and enter your email to create an account', function () {
     register.userEnterEmail()
    })

    it('Fill Personal Information and click register button', function () {
        register.userFillInfo()

    })



})