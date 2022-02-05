class HomePage{

    selectLogin(){

        return cy.get('.menu > [href="https://app.mainteny.com"]')
    }
}



export default HomePage;