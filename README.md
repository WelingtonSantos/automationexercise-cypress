
# automationexercise-cypress
Projeto de automação E2E utilizando Cypress e BDD aplicado ao site Automation Exercise.
=======
# Automação de Testes com Cypress – Automation Exercise

Projeto de automação de testes E2E utilizando **Cypress**, **Cucumber (BDD)** e **Page Object Model**, desenvolvido como exercício prático para aprendizado e consolidação de boas práticas em automação de testes web.

O sistema alvo utilizado nos testes é o site:
 https://automationexercise.com

---

## Objetivos do Projeto

Automatizar cenários E2E reais
Praticar BDD com Cucumber
Aplicar Page Object Model
Trabalhar com dados dinâmicos (Faker)
Comparar dados capturados da UI (ex: preços de produtos)
Consolidar conceitos de sincronização do Cypress

---

## Tecnologias Utilizadas

**Node.js**
**Cypress**
**Cypress Cucumber Preprocessor**
**JavaScript (CommonJS)**
**faker-br** (geração de dados dinâmicos)
**BDD (Gherkin)**

---

## Estrutura do Projeto

```text
cypress/
 ├── support/
 │   ├── pages/
 |   |   |___API/
 |   |   |   |__ createAccount.api.js
 │   │   ├── FrontEnd/
 │   │   │   ├── signup.page.js
 │   │   │   ├── signupLogin.page.js
 │   │   │   ├── cart.page.js
 │   ├── factories/
 │   │   └── criaUsuario.faker.js
 │   ├── step_definitions/
 |   |   |__ API/
 |   |   |   |__ createAccount.cy.js
 │   │   └── Front End/
 │   │       └── automationExercice.cy.js
 │   ├── e2e.js
 │   └── commands.js
 ├── fixtures/
 └── integration/

 ## Configurar o arquivo cypress.env com os dados 

 {
  "apiBaseUrl": "https://automationexercise.com",
  "defaultPassword": "123456"
}

##  Executando o Projeto

### Pré-requisitos
- Node.js instalado (versão LTS recomendada)
- NPM (instalado junto com o Node.js)
- Git (opcional, para clonar o repositório)

---

### Instalar as dependências do projeto

Na raiz do projeto, execute:

npm install

