class ForgotPage{

    getTokenBtn(){

        return cy.get('form.ng-untouched > :nth-child(3) > .appearance-filled')
    }

    forgeotPasswordEmail(){

        return cy.get('.input-full-width')
    }
}

export default ForgotPage;