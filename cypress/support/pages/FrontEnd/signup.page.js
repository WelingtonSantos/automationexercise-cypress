// cypress/support/pages/Front End/signup.page.js
import CriaUsuarioFaker from '../../factories/usuario.factory'

const LABEL = '.signup-form h2'
const NAME = '[data-qa="signup-name"]'
const SENHA = '[data-qa="password"]'
const FIRST_NAME = '[data-qa="first_name"]'
const LAST_NAME = '[data-qa="last_name"]'
const COMPANY = '[data-qa="company"]'
const ADDRESS = '[data-qa="address"]'
const STATE = '[data-qa="state"]'
const CITY = '[data-qa="city"]'
const ZIP_CODE = '[data-qa="zipcode"]'
const MOBILE = '[data-qa="mobile_number"]'
const EMAIL = '[data-qa="signup-email"]'
const BOTAO_SIGNUP = '[data-qa="signup-button"]'
const ACCOUNT_INFORMATION_LABEL = '.col-sm-4 .login-form h2'
const FORM_NAME = '#name'
const FORM_EMAIL = '#email'
const BOTAO_CRIAR = '[data-qa="create-account"]'
const BOTAO_CONTINUE = '[data-qa="continue-button"]'
const VALIDA_USUARIO_LOGADO = '.shop-menu .navbar-nav .fa-user'

class SignUp {

  newUserSignup() {
    const usuario = CriaUsuarioFaker.criarUsuario()

    cy.get(LABEL).should('have.text', 'New User Signup!')
    cy.get(NAME).type(usuario.nome)
    cy.get(EMAIL).type(usuario.email)
    cy.get(BOTAO_SIGNUP).should('exist').click()

    cy.log(JSON.stringify(usuario))   // log mais “legível” no runner
    return cy.wrap(usuario)
  }

  enterAccountInformation(usuario) {
    cy.get(ACCOUNT_INFORMATION_LABEL).first()
      .should('have.text', 'Enter Account Information')

    //validar com os dados dinâmicos, não fixos:
    cy.get(FORM_NAME).should('have.value', usuario.nome)
    cy.get(FORM_EMAIL).should('have.value', usuario.email)

    //Preenche o resto do formulário
    cy.get(SENHA).type(usuario.senha)

    //Teste chamando direto já pegando o elemento
    cy.get('#days').select(usuario.day)
    cy.get('#months').select(usuario.month)
    cy.get('#years').select(usuario.year)

    cy.get(FIRST_NAME).type(usuario.nome)
    cy.get(LAST_NAME).type(usuario.sobreNome)
    cy.get(COMPANY).type(usuario.company)
    cy.get(ADDRESS).type(usuario.address)
    cy.get(STATE).type(usuario.state)
    cy.get(CITY).type(usuario.city)
    cy.get(ZIP_CODE).type(usuario.zipCode)
    cy.get(MOBILE).type(usuario.phone)

    cy.get(BOTAO_CRIAR).should('be.visible').click()

    this.validaContaCriada(usuario)

  }

  validaContaCriada(usuario) {
    cy.get('[data-qa="account-created"]').should('have.text', 'Account Created!')
    cy.get(BOTAO_CONTINUE).click()
  }

  validaUsuarioLogado(usuario) {
    const nomeCompleto = usuario.nome + usuario.sobreNome
    cy.get('b').should('have.text', usuario.nome)
  }


  realizaLogin(email, password) {

    const login = email
    const pass = password 
    cy.get('.login-form > h2').should('have.text', "Login to your account")
    cy.get('[data-qa="login-email"]').type(login)
    cy.get('[data-qa="login-password"]').type(pass)
    cy.get('[data-qa="login-button"]').click()
  }

}

export default new SignUp()