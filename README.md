
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

[x] - Endpoint de Validação de Token:
[x] - Endpoint de Informações da Conta Bancária:
[x] - Endpoint de Transações Financeiras:

## Installation

Para execusão do projecto deve executar o container dentro do docker-compose e rodar as migrations do prisma.


```bash
$ docker-compose up -d 
$ npm install
$ npm run migrate:up
```

## Running the app
  O App ira rodar na porta 3000 tendo disponível a documentação do Swagger no localhost:3000/api
  ao iniciar o projeto é rodado um Seed colocando estas contas dentro do banco de dados.

                accountNumber: 32323232,
                clientDocument: '40880449837',
                clientName: "Maikon Weber de Carvalho",
                currentBalance: 100.0
       
      
                accountNumber: 11111111,
                clientDocument: '40880449837',
                clientName: "Maikon Weber de Carvalho",
                currentBalance: 100.0
          
                accountNumber: 12395021,
                clientDocument: '40880449837',
                clientName: "Maikon Weber de Carvalho",
                currentBalance: 100.
  
  Existe um rota de authenticação para adquirir atravez do login um Token JWT e somente com ele é possível acessar a Rota de AccountDetails e BalanceTransfer. Atravez do Swagger é possível setar token e continuar a fazer as chamadas
  que estão privadas com Token.
  
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test
  - Não Implementado Nenhum Teste
```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## License

Nest is [MIT licensed](LICENSE).
