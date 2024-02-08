
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
