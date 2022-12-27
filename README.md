# Teste técnico - Cashforce

- Frontend feito com: Vue.JS
- Backend feito com: Express.JS e Sequelize (mysql2)

## Breve descrição sobre o projeto:

Este projeto é uma API em Node utilizando o framework Express e o ORM Sequelize para se conectar ao banco de dados MySQL.
O banco de dados possui um total de 8 tabelas, sendo as três principais: buyers, providers e orders.

A tabela buyers armazena informações sobre os sacados (compradores) da nota fiscal,
enquanto a tabela providers armazena informações sobre os cedentes (fornecedores) da nota fiscal
A tabela orders armazena informações sobre as notas fiscais emitidas, incluindo informações sobre os sacados e cedentes,
data de emissão, valor e arquivos anexados.

## Como rodar o projeto:

- Na raiz do projeto rode o comando `docker-compose up -d`
- Após a inicialização dos containers, aguarde pelo menos 15 segundos para que o projeto esteja no ar
- Entre em [http://localhost:8080](http://localhost:8080) para visualizar o `frontend`
- Entre em [http://localhost:3001/orders](http://localhost:3001/orders) para visualizar o `backend`
- Aproveite :)

## Curiosidades durante o desenvolvimento:

- Antes deste teste técnico ainda não tinha tido nenhum contato com Vue.JS
- Aprendi Vue.JS por meio de um vídeo de 1 hora do youtube, este vídeo: [https://youtu.be/cSa-SMVMGsE](https://youtu.be/cSa-SMVMGsE) caso tenham curiosidade
- Concretizei meus conhecimentos nos relacionamentos entre tabelas (camada Model) do Sequelize
- Concretizei ainda mais meus conhecimentos em Docker (docker-compose)
- Entendi como funciona um Single File Component
