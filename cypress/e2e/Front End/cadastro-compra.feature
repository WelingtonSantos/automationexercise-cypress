# =============================================================================
# Feature: Fluxo de Cadastro, Login e Compra de Produto
#
# Descrição:
#   Automatização do fluxo completo de cadastro de usuário, login
#   e compra de um produto no site Automation Exercise.
#
# Fluxo a ser automatizado:
#   1. Acessar o site Automation Exercise
#   2. Navegar até a opção Signup / Login
#   3. Realizar um novo cadastro de usuário
#   4. Validar que o login foi realizado com sucesso
#   5. Na tela inicial:
#      - Localizar o produto "Men Tshirt"
#      - Clicar na opção "View Product"
#   6. Capturar as informações do produto:
#      - Nome do produto
#      - Valor exibido
#   7. Adicionar o produto ao carrinho
#   8. Validar a mensagem de sucesso
#   9. Acessar o carrinho
#  10. Validar:
#      - Nome do produto
#      - Valor do produto
#      - Consistência das informações com a tela anterior
#
# Autor: Welington Santos
# Data: 11/05/2026
# =============================================================================

# language: pt

@e2e
Funcionalidade: Fluxo completo de cadastro, login e compra de produto
    
  Cenário: Realizar cadastro, login e compra de um produto com sucesso
    Dado que acesso o site Automation Exercise
    Quando navego até a opção Signup / Login
    E realizo o cadastro de um novo usuário com dados válidos
    Então o usuário deve estar logado com sucesso

    Quando localizo o produto "Men Tshirt" na tela inicial
    E acesso os detalhes do produto
    Então devo capturar o nome e o valor do produto

    Quando adiciono o produto ao carrinho
    Então devo visualizar uma mensagem de sucesso

    Quando acesso a página do carrinho
    Então devo validar o nome e o valor do produto no carrinho



