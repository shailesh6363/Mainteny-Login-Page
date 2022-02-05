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

}

export default LoginPage;