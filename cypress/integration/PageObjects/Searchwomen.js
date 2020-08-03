class  Searchwomen {
    visitpage(){

       
        return cy.visit("http://automationpractice.com/index.php")

 }
  womentab(){
   
   cy.get('ul.sf-menu li')
    .eq(0)
    .click();

    cy.url()
    .should('include', 'id_category=3');

    return this;

     
    
  }

  twocategories(){
    cy.get('div#subcategories ul > li')
    .should('have.length', '2');
    return this

  }

  checkforfirstItem(){
    cy.get('ul.product_list > li')
    .eq(0)
    .contains('Faded Short Sleeve T-shirts');
    return this

  }

  sortbyName(){
        cy.get('select#selectProductSort')
        .select('name:asc');
        return this

}


}




export default Searchwomen;