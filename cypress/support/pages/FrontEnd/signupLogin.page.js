//Classe de acesso principal
const SIGNUP_LOGIN = '[href="/login"]'

class SignupLogin{

    clicaNoSignupLoginMenu(){
        return cy.get('.shop-menu .nav ').find('[href="/login"]')
        //return cy.get(SIGNUP_LOGIN)
        .should('be.visible')
        .click()
    }

}

export default new SignupLogin()