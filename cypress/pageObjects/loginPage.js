class LoginPage{

selectLogo(){

    return cy.get(".logo")
}

selectDemoNavigation(){

    return cy.get('.blue-button')
}

selectDemoButton(){

    return cy.get('.demo')
}

setEmailAddress(){

    return cy.get(':nth-child(2) > .nb-form-field-limited-width > .nb-form-control-container > .input-full-width')
}

setPassword(){

    return cy.get(':nth-child(3) > .nb-form-field-limited-width > .nb-form-control-container > .input-full-width')
}
selectLoginBtn(){

    return cy.get(':nth-child(5) > .appearance-filled')
}

ValidateError(){

    return cy.get('.error')
}

}

export default LoginPage;