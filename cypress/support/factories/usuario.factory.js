//Implementação de uma factory para criação de dados dinamicos
//com o uso da libary faker.

const faker = require('faker-br');

class CriaUsuarioFaker {

  criarUsuario() {
    const dataNacimento = this.gerarDataNascimentoComFaker()
    return {
      nome: faker.name.firstName(),
      sobreNome: faker.name.lastName(),
      email: faker.internet.email(),
      senha: '123456',

      day: dataNacimento.dia,
      month: dataNacimento.mes,
      year: dataNacimento.ano,

      company: faker.company.companyName(),
      address: faker.address.streetName(),
      state: faker.address.state(),
      city: faker.address.city(),
      zipCode: faker.address.zipCode(),
      phone: faker.phone.phoneNumber()
    }

  }


  gerarDataNascimentoComFaker() {
    const data = faker.date.between(
      new Date(1980, 0, 1),   // 01/01/1980
      new Date(2000, 11, 31)  // 31/12/2000
    )

    return {
      dia: data.getDate().toString(),
      mes: this.obterNomeMes((data.getMonth() + 1).toString()),
      ano: data.getFullYear().toString()
    }
  }

  obterNomeMes(mesNumero) {
    const meses = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]

    return meses[mesNumero - 1]
  }
  obterPaisAleatorio() {
    const paises = [
      'India',
      'Canada',
      'United States',
      'Australia',
      'Israel',
      'New Zealand',
      'Singapore'
    ]

    return faker.random.arrayElement(paises)
  }


}

export default new CriaUsuarioFaker()
