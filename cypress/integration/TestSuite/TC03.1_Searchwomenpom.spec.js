import TestSuite from '../PageObjects/Searchwomen'


describe("Women Section Page", function () {

    const womensection = new TestSuite()
  

    it('Navigate to women section ', function () {
        womensection.visitpage()
        cy.wait(3000)


})
it("should open the women tab", () => {
     womensection.womentab()

})

it('should have 2 subcategories', () => {
     womensection.twocategories()   
})

it('should check for first item in the list', () => {
    womensection.checkforfirstItem()

})

it('sort by name and check first item', () => {
    womensection.sortbyName()

})


})