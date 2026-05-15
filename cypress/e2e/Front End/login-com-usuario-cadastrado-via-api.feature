# language: pt

Funcionalidade: login com usuario cadastrado via api
    Cenário: Realizar cadastro de usuário via api e realizar login com sucesso no site
    Dado eu envio a requisição para criar a conta via API
    Então a API deve retornar status code "200" e "User created!"
    E devo validar que o usuário foi criado com sucesso

    Quando que acesso o site Automation Exercise
    E navego até a opção Signup / Login
    E preencho usuario e senha criados via API e clico no botão login
    Então o login e realizado com sucesso

