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

    it("TC_Login_002_To verify Mainteny home page is launched after selecting Mainteny logo from login page navigation bar",function(){

       
        cy.visit(Cypress.env('url'))
        logos.selectLogo().click()
        cy.title().should('include',"Empowering service technicians")
    })

    it("TC_Login_003_To verify Login Page is displayed after selecting Login option from Mainteny home page navigation bar",function(){

        
        cy.visit(Cypress.env('url'))
        logos.selectLogo().click()
        cy.title().should('include',"Empowering service technicians")
        home.selectLogin().click()
        cy.url().should('include','login')

    })

    it("TC_Login_004_To verify Demo Page is displayed after selecting Try Demo option from Login Page navigation bar",function(){

        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
        logos.selectDemoNavigation().click()
        cy.url().should('include','dashboard')
        cy.go('back')
        cy.url().should('include','login')

    })
    it("TC_Login_005_To verify Demo Page is displayed after selecting Try Demo option from Login Page",function(){

        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
        logos.selectDemoButton().click()
        cy.url().should('include','dashboard')
        cy.go('back')
        cy.url().should('include','login')
    })

    it("TC_Login_006_To verify User is not logged in after entering valid email address and invalid password on Login Page",function(){

        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
        logos.setEmailAddress().type('engineering@mainteny.com')
        logos.setPassword().type('Mainteny@2021')
        logos.selectLoginBtn().should('be.visible')
        logos.selectLoginBtn().click()
        cy.url().should('not.include','https://app.mainteny.com/pages/dashboard')
    })

})