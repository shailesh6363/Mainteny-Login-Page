class ForgotPage{

    getTokenBtn(){

        return cy.get('form.ng-untouched > :nth-child(3) > .appearance-filled')
    }

    forgeotPasswordEmail(){

        return cy.get('.input-full-width')
    }

    goBackBtn(){

        return cy.get('.back > .text')
    }
}

export default ForgotPage;