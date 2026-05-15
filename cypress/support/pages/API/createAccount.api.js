const faker = require('faker-br')
const CriaUsuarioFaker = require('../../factories/usuario.factory')


class CreateAccountService {

    normalizarBody(response) {
        const body = response.body
        if (typeof body === 'string') {
            try { return JSON.parse(body) } catch (e) { return { raw: body } }
        }
        return body
    }

    obterTituloAleatorio() {
        return faker.random.arrayElement(['Mr', 'Mrs', 'Miss'])
    }

    gerarUsuarioApi() {
        const user = CriaUsuarioFaker.criarUsuario()

        return {
            name: `${user.nome} ${user.sobreNome}`,
            email: user.email,
            password: Cypress.env('defaultPassword'),

            title: this.obterTituloAleatorio(),
            birth_date: user.day,
            birth_month: user.month,
            birth_year: user.year,

            firstname: user.nome,
            lastname: user.sobreNome,

            company: user.company,
            address1: user.address,
            address2: 'Apto 10',
            country: CriaUsuarioFaker.obterPaisAleatorio(),
            zipcode: user.zipCode,
            state: user.state,
            city: user.city,
            mobile_number: user.phone

        }

    }

    createAccount(payload = this.gerarUsuarioApi()) {
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('apiBaseUrl')}/api/createAccount`,
            form: true,
            body: payload,
            failOnStatusCode: false
        }).then((response) => {
            const body = this.normalizarBody(response)
            return { response, body, payload }
        })
    }

    verifyLogin(email) {
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('apiBaseUrl')}/api/verifyLogin`,
            form: true,
            body: {
                email: email,
                password: Cypress.env('defaultPassword')
            },
            failOnStatusCode: false
        }).then((response) => {
            const body = this.normalizarBody(response)
            return { response, body }
        })
    }

    //cria e salva para usar em cenário UI
    createAccountAndStoreEnv() {
        return this.createAccount().then(({ response, body, payload }) => {
            Cypress.env('usuarioCriado', payload)
            return { response, body, payload }
        })
    }

    imprimirUsuarioApi(usuario) {
        cy.log('--- Dados do usuário para criação da conta ---')
        cy.log(`Nome: ${usuario.name}`)
        cy.log(`Email: ${usuario.email}`)
        cy.log(`Data nascimento: ${usuario.birth_date}/${usuario.birth_month}/${usuario.birth_year}`)
        cy.log(`Country: ${usuario.country}`)
        cy.log(`Telefone: ${usuario.mobile_number}`)

        // log completo no console (melhor para debug)
        console.log('Payload criação de conta:', usuario)
    }


    logarDadosValidosParaCriacaoConta() {
        const payload = this.gerarUsuarioApi()
        this.imprimirUsuarioApi(payload)
        return payload
    }

}

module.exports = new CreateAccountService()