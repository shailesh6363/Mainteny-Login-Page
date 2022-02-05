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

    it("TC_Login_007_To verify User is not logged in after entering Invalid email address and valid password on Login Page",function(){

        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
        logos.setEmailAddress().type('engineering@mainteny.com')
        logos.setPassword().type('mainteny@2022')
        logos.selectLoginBtn().should('be.visible')
        logos.selectLoginBtn().click()
        cy.url().should('not.include','https://app.mainteny.com/pages/dashboard')
    })
    it("TC_Login_008_To verify User is not logged in after entering Invalid email address and Invalid password on Login Page",function(){

        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
        logos.setEmailAddress().type('email@gmail.com')
        logos.setPassword().type('NoPassword')
        logos.selectLoginBtn().should('be.visible')
        logos.selectLoginBtn().click()
        cy.url().should('not.include','https://app.mainteny.com/pages/dashboard')
    })

    it("TC_Login_009_To verify warning is displayed after entering valid email address and invalid password on Login Page",function(){

        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
        logos.setEmailAddress().type('engineering@mainteny.com')
        logos.setPassword().type('Mainteny@2021w')
        logos.selectLoginBtn().should('be.visible')
        logos.selectLoginBtn().click()
        logos.ValidateError().should('have.text','Bad username or password')
        
    })

    it("TC_Login_0010_To verify warning is displayed after entering Invalid email address and Valid password on Login Page",function(){

        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
        logos.setEmailAddress().type('email@gmail.com')
        logos.setPassword().type('mainteny@2022')
        logos.selectLoginBtn().should('be.visible')
        logos.selectLoginBtn().click()
        logos.ValidateError().should('have.text','Bad username or password')
        
    })

    it("TC_Login_0011_To verify warning is displayed after entering Invalid email address and Valid password on Login Page",function(){

        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
        logos.setEmailAddress().type('email@gmail.com')
        logos.setPassword().type('NoPasssword')
        logos.selectLoginBtn().should('be.visible')
        logos.selectLoginBtn().click()
        logos.ValidateError().should('have.text','Bad username or password')
        
    })

    it("TC_Login_012_To verify Login button is disabled after entering only email address on login page",function(){
        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
        logos.setEmailAddress().type('email@gmail.com')
        logos.selectLoginBtn().should('not.be.enabled')
        logos.selectLoginBtn().should('be.disabled')
    })

})