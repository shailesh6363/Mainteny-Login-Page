/// <reference types="Cypress" />


describe('Functional Test Cases',function(){

    it("TC_Login_001_To verify Login Page is displayed",function(){

        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')


    })

})