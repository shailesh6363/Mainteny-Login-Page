/// <reference types="Cypress" />
import LoginPage from '../pageObjects/loginPage'

describe('Functional Test Cases',function(){

    it("TC_Login_001_To verify Login Page is displayed",function(){

        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
})

    it("TC_Login_002_To verify Maintany home page is launched after selecting Maintany logo from login page navigation bar",function(){

        const logos=new LoginPage()
        cy.visit(Cypress.env('url'))
        logos.selectLogo().click()
        cy.title().should('include',"Empowering service technicians")
    })


})