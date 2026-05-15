# language: pt

Funcionalidade: Criação de usuário via API

    Cenário: Criar usuário com sucesso via API
      Dado eu envio a requisição para criar a conta via API
      Então a API deve retornar status code "200" e "User created!"
      E devo validar a estrutura da resposta
      E devo validar que o usuário foi criado com sucesso


