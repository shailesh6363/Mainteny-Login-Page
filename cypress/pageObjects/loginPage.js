class LoginPage{

selectLogo(){

    return cy.get(".logo")
}

selectDemoNavigation(){

    return cy.get('.blue-button')
}


}

export default LoginPage;