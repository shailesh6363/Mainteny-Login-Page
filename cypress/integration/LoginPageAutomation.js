/// <reference types="Cypress" />
import LoginPage from '../pageObjects/loginPage'
import HomePage from'../pageObjects/homePage'

describe('Functional Test Cases',function(){
        const logos=new LoginPage()
        const home=new HomePage()
    it("TC_Login_001_To verify Login Page is displayed",function(){

        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
})

    it("TC_Login_002_To verify Maintany home page is launched after selecting Maintany logo from login page navigation bar",function(){

       
        cy.visit(Cypress.env('url'))
        logos.selectLogo().click()
        cy.title().should('include',"Empowering service technicians")
    })

    it("TC_Login_003_To verify Login Page is displayed after selecting Login option from Maintany home page navigation bar",function(){

        
        cy.visit(Cypress.env('url'))
        logos.selectLogo().click()
        cy.title().should('include',"Empowering service technicians")
        home.selectLogin().click()
        cy.url().should('include','login')

    })


})