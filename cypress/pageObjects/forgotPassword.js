class ForgotPage{

    getTokenBtn(){

        return cy.get('form.ng-untouched > :nth-child(3) > .appearance-filled')
    }
}

export default ForgotPage;