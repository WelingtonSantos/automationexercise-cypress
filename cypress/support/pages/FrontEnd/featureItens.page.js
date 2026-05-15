//Essa classe representa a página após o usuário logado.
// onde ele vai selecionar o produto desejado e adicionar ao carriho de compras 

const FORM_FEATURE = '.features_items > .title'
const MEN_TSHIRT = ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > p'
const BOTAO_ADD_TO_CART = ':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a'
const VIEW_PRODUCT = ':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a'
const VALOR = ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > h2'

class FeatureItems{

    verificaProdutoDesejado(){

        cy.get(FORM_FEATURE).should('have.text', 'Features Items')
        cy.get(MEN_TSHIRT).should('have.text', 'Men Tshirt')
        cy.get(VIEW_PRODUCT).click()

    }

}

export default new FeatureItems()