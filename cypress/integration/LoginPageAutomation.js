/// <reference types="Cypress" />
import LoginPage from '../pageObjects/loginPage'
import HomePage from'../pageObjects/homePage'
import UserConsole from '../pageObjects/userConsole'
import ForgotPage from '../pageObjects/forgotPassword'

describe('Functional Test Cases',function(){
        const logos=new LoginPage()
        const home=new HomePage()
        const user=new UserConsole()
        const password=new ForgotPage()
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

    it("TC_Login_013_To verify Login button is disabled after entering only password on login page",function(){
        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
        logos.setPassword().type('NoPasssword')
        logos.selectLoginBtn().should('not.be.enabled')
        logos.selectLoginBtn().should('be.disabled')
    })

    it("TC_Login_014_To verify Login button is disabled when both email and password field are blank",function(){

        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
        logos.selectLoginBtn().should('not.be.enabled')
        logos.selectLoginBtn().should('be.disabled')
    })

    it("TC_Login_015_To verify user should be logged in after entering valid email address and valid password",function(){

        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
        logos.setEmailAddress().type('engineering@mainteny.com')
        logos.setPassword().type('Mainteny@2021')
        logos.selectLoginBtn().should('be.visible')
        logos.selectLoginBtn().click()
        cy.url().should('include','https://staging.mainteny.com/pages/dashboard')
        user.getUserName().should('contain.text','Hi Martin!')
    })

    it("TC_Login_016_To verify user should be logged out after selecting Logout option from dashboard page",function(){
        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
        logos.setEmailAddress().type('engineering@mainteny.com')
        logos.setPassword().type('Mainteny@2021')
        logos.selectLoginBtn().should('be.visible')
        logos.selectLoginBtn().click()
        cy.url().should('include','https://staging.mainteny.com/pages/dashboard')
        user.getUserName().should('contain.text','Hi Martin!')
        user.selectUser().click()
        user.selectLogOut().click()
        cy.url().should('include','login')

    })

    it("TC_Login_017_To verify Forget Password page should be displayed after selecting Forgot Password option from login page",function(){
        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
        logos.selectForgotPassword().click()
        cy.url().should('include','https://staging.mainteny.com/auth/forget-password')
        logos.getResetPasswordTitle().should('contain.text','Reset Password')


    })

    it("TC_Login_018_To verify Get Token Button is disabled when email address field is blank on Forget Password page",function(){
        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
        logos.selectForgotPassword().click()
        cy.url().should('include','https://staging.mainteny.com/auth/forget-password')
        logos.getResetPasswordTitle().should('contain.text','Reset Password')
        password.getTokenBtn().should('be.disabled')
        password.getTokenBtn().should('not.be.enabled')


    })

    it("TC_Login_019_To verify Get Token Button is enabled after entering email address in email filed on Forget Password page",function(){

        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
        logos.selectForgotPassword().click()
        cy.url().should('include','https://staging.mainteny.com/auth/forget-password')
        logos.getResetPasswordTitle().should('contain.text','Reset Password')
        password.getTokenBtn().should('be.disabled')
        password.getTokenBtn().should('not.be.enabled')
        password.forgeotPasswordEmail().type('engineering@mainteny.com')
        password.getTokenBtn().should('not.be.disabled')
        password.getTokenBtn().should('be.enabled')
    })

    it("TC_Login_020_To verify Set New Password text is displayed after entering valid email address in email field on Forget Password page",function(){

        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
        logos.selectForgotPassword().click()
        cy.url().should('include','https://staging.mainteny.com/auth/forget-password')
        logos.getResetPasswordTitle().should('contain.text','Reset Password')
        password.getTokenBtn().should('be.disabled')
        password.getTokenBtn().should('not.be.enabled')
        password.forgeotPasswordEmail().type('engineering@mainteny.com')
        password.getTokenBtn().should('not.be.disabled')
        password.getTokenBtn().should('be.enabled')
        password.getTokenBtn().click()
        logos.getResetPasswordTitle().should('contain.text','Set a new password')

    })

    it("TC_Login_021_To verify warning is displayed after entering invalid email address in email address field on Forget Page",function(){

        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
        logos.selectForgotPassword().click()
        cy.url().should('include','https://staging.mainteny.com/auth/forget-password')
        logos.getResetPasswordTitle().should('contain.text','Reset Password')
        password.getTokenBtn().should('be.disabled')
        password.getTokenBtn().should('not.be.enabled')
        password.forgeotPasswordEmail().type('email@gmail.com')
        password.getTokenBtn().should('not.be.disabled')
        password.getTokenBtn().should('be.enabled')
        password.getTokenBtn().click()
        logos.ValidateError().should('have.text','Please check if you have an account with us')


    })

    it("TC_Login_022_To verify login page is displayed after selecting Go Back To Login option from Forget Password page",function(){

        cy.visit(Cypress.env('url'))
        cy.url().should('include','login')
        logos.selectForgotPassword().click()
        cy.url().should('include','https://staging.mainteny.com/auth/forget-password')
        logos.getResetPasswordTitle().should('contain.text','Reset Password')
        password.getTokenBtn().should('be.disabled')
        password.getTokenBtn().should('not.be.enabled')
        password.goBackBtn().click()
        cy.url().should('include','login')

    })
    

})