import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import CreateAccount from '../../pages/API/createAccount.api'
import SignUp from '../../pages/FrontEnd/signup.page'

let result

When('eu envio a requisição para criar a conta via API', () => {
    return CreateAccount.createAccountAndStoreEnv().then((r) => {
        result = r
    })

})

Then('a API deve retornar status code "200" e "User created!"', () => {
    expect(result.response.status).to.eq(200)
    cy.log(result.response.status)
    cy.log(`Nome: ${result.payload.name}`)
    cy.log(`Nome: ${result.payload.email}`)


    const msg = result.body.message || result.body.raw
    expect(msg).to.contain('User created!')
    cy.log(msg)
})

And('devo validar que o usuário foi criado com sucesso', () => {
    return CreateAccount.verifyLogin(result.payload.email).then(({ response, body }) => {
        //valida status code
        expect(response.status).to.eq(200)

        //valida mensagem oficial da API
        const msg = body.message || body.raw
        expect(msg).to.eq('User exists!')
        cy.log(`Usuário da busca Nome: ${result.payload.name}`)
        cy.log(`Usuário da busca Email: ${result.payload.email}`)
    })

})

Given('que possuo dados válidos e dinâmicos para criação de conta', () => {
    CreateAccount.imprimirUsuarioApi(result)
})

And('devo validar a estrutura da resposta', () => {
    const body = result.body
    cy.log(JSON.stringify(result))
    expect(body).to.exist

    expect(body).to.have.property('message')
    expect(body.message).to.be.a('string')
})

And('preencho usuario e senha criados via API e clico no botão login', () => {
      const email = result.payload.email
      const pass  = result.payload.password
      SignUp.realizaLogin(email, pass)

})

Then('o login e realizado com sucesso', () => {
    const nome = `${result.payload.name}`
    cy.get('b').should('have.text', nome)
})
