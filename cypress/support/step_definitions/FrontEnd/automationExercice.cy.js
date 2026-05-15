// cypress/support/step_definitions/signup.steps.js
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import  SignupLogin  from '../../pages/FrontEnd/signupLogin.page'
import  SignUp from  '../../pages/FrontEnd/signup.page'
import FeatureItems from '../../pages/FrontEnd/featureItens.page'
import AddToCart from '../../pages/FrontEnd/addToCart.page'
import Cart from '../../pages/FrontEnd/cart.page'

let usuario  // guarda o usuário gerado para o próximo step 
let precoProduto // guardar o preço para comparação
let nomeProduto //guardar o nome para comparação

Given('que acesso o site Automation Exercise', () => {
  cy.visit('/')
})

When('navego até a opção Signup / Login', () => {
  SignupLogin.clicaNoSignupLoginMenu()
})

And('realizo o cadastro de um novo usuário com dados válidos', () => {
  SignUp.newUserSignup().then((user) => {
      usuario = user
      SignUp.enterAccountInformation(usuario)
  })
  
})

Then('o usuário deve estar logado com sucesso', () => {
   SignUp.validaUsuarioLogado(usuario)
})

When('localizo o produto "Men Tshirt" na tela inicial', () => {
   FeatureItems.verificaProdutoDesejado()
})

And('acesso os detalhes do produto', () => {
    AddToCart.detalhesDoProduto()
    AddToCart.preencheInformacoesCliente(usuario)
})

Then('devo capturar o nome e o valor do produto', () => {
     AddToCart.capturaInformacoesDoProduto().then((preco) => {
        precoProduto = preco
        cy.log(`Preço do produto: ${precoProduto}`)
     })
})

When('adiciono o produto ao carrinho', () => {
  AddToCart.adicionoAoCarrinho()
})

Then('devo visualizar uma mensagem de sucesso', () => {
    AddToCart.validoMensagemDeSucesso()
})

When('acesso a página do carrinho', () => {
    Cart.acessoPaginaCarrinho()
})

Then('devo validar o nome e o valor do produto no carrinho', () => {
   Cart.validarPreco().then((precoCarinho) => {
      expect(precoCarinho).to.eq(precoProduto)
   })
})

And('preencho usuario e senha e clico no botão login', () => {
      SignUp.realizaLogin(usuario)

})