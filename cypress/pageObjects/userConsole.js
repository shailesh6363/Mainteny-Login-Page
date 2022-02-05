class UserConsole{

    getUserName(){

        return cy.get('.user-name')
    }


    selectUser(){

        return cy.get('.user-action')
    }

    selectLogOut(){

        return cy.get('.context-menu > .menu-items > .menu-item > .ng-star-inserted')
    }

    
}

export default UserConsole;