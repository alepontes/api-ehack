
Complemento ao desafio Mastertech Landing Page

A API cadastra, lista e exclui itens 


API precisa do MongoDB local
Por padrão a API espera que o mongo rode na porta 27017, a porta pode ser alterada em db_config.js, let port

A API roda por padrão na porta 3000, a porta pode ser alterada em config.js, let port. Isso não é recomendável, todo FrontEnd espera a porta 3000.

Para rodar a API:
npm install ou yarn na pasta do projeto
mongod para "rodar" o mongo
node index para "rodar" a API



REQUESTS

*[GET]/
Retorna: {"api":"Bem vindo a API Ehack"}

[POST]/admin
Para cadastrar itens

[DELETE]/admin/:id_item
Deleta um item pelo ID

*[DELETE]/admin/simtenhocerteza
Deleta TODOS os itens

[GET]/[client/
Lista todas os itens

[GET]/client/:id_item
Lista um item por ID

*Request que não são feitas pelo fronend