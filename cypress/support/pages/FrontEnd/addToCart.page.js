//Essa classe será para adicionar o produto ao carrinho e validar o preço selecionado.

const NAME = '#name'
const EMAIL = '#email'
const REVIEW = '[name="review"]'
const AVAILABILITY = '.product-information > :nth-child(6)'
const CONDITION = '.product-information > :nth-child(7)'
const BRAND = '.product-information > :nth-child(8)'
const BOTAO_ADD_TO_CART = ':nth-child(5) > .btn'
const BOTAO_SUBIMIT = '#button-review'
const MODAL_CONTENT = '.modal-body > :nth-child(1)'

class AddToCart {

    detalhesDoProduto() {
        cy.get(AVAILABILITY).should('have.text', 'Availability: In Stock')
        cy.get(CONDITION).should('have.text', 'Condition: New')
        cy.get(BRAND).should('have.text', 'Brand: H&M')
    }

    preencheInformacoesCliente(usuario) {
        cy.get(NAME).type(usuario.nome)
        cy.get(EMAIL).type(usuario.email)
        cy.get(REVIEW).type("Teste automação desafio Accenture")

    }

    capturaInformacoesDoProduto() {
        let precoProduto
        return cy.get(':nth-child(5) > span')
            .invoke('text')
            .then(texto => texto.replace(/[^\d]/g, ''))
        }



    adicionoAoCarrinho() {

       cy.get(BOTAO_ADD_TO_CART).click()

    }

    validoMensagemDeSucesso() {
       cy.get(MODAL_CONTENT).should('have.text', 'Your product has been added to cart.')
      cy.get('u').should('exist').click()
    }

}


export default new AddToCart()