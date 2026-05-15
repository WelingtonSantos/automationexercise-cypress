//Essa classe representa o carrinho de compras 
//O objetivo é isolar nessa classe só a validação das informações

const TOTAL_PRICE = '.cart_total_price'
const PRICE = '.cart_price > p'
const PAGINA = '.active'

class Cart {

    validarPreco() {
        let precoCarrinho
        return cy.get('.cart_price')
            .invoke('text')
            .then(texto => texto.replace(/[^\d]/g, ''))

    }

    acessoPaginaCarrinho() {
        cy.get(PAGINA).should('have.text', 'Shopping Cart')
    }

}

export default new Cart()