DUPLA: Vinícius Zandonai e João P. T. Florêncio

# trabalhonode
Aqui está o texto `README.md` para um repositório GitHub explicando o código fornecido. O código estabelece uma relação 1 para N entre autores e livros usando Node.js, Express, e Sequelize para interagir com um banco de dados.

```markdown
# Sistema de Gestão de Autores e Livros

Este projeto implementa uma API RESTful(cliente-servidor) para gerenciar autores e livros, onde cada autor pode ter vários livros (relação 1:N). A API permite realizar operações CRUD (Create, Read, Update, Delete) (POST, GET, PUT e DELETE) *respectivamente* para ambas as entidades. 

## Configuração

### Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Configure o banco de dados em `banco.js` e execute as migrações necessárias.

### Execução

Inicie o servidor:
```sh
npm start
```

O servidor estará disponível na porta 3000.

## Rotas da API

### Autores

#### GET /autors/
Retorna uma lista de todos os autores.
```sh
http://localhost:3000/autors/
```
![image](https://github.com/Jpedro8899/trabalhonode/assets/160235276/350601f9-a262-4aac-b3bb-ed1af86738b5)


#### GET /autors/:id
Retorna detalhes de um autor específico, incluindo seus livros.
```sh
http://localhost:3000/autors/1
```
![image](https://github.com/Jpedro8899/trabalhonode/assets/160235276/0d7e569f-9489-4f70-b852-ab1e900e27bb)


#### POST /autors/
Cria um novo autor.
```sh
http://localhost:3000/autors/ |"json"|  '{"nome": "Nome do Autor"}'
```
![image](https://github.com/Jpedro8899/trabalhonode/assets/160235276/4abad67c-67f4-4118-8ef1-f1fe862abc79)


#### PUT /autors/:id
Atualiza as informações de um autor existente.
```sh
http://localhost:3000/autors/1 |"json"| '{"nome": "Novo Nome"}'
```
![image](https://github.com/Jpedro8899/trabalhonode/assets/160235276/1a99b8eb-4ee1-485a-bea1-268c407a5349)


#### DELETE /autors/:id
Exclui um autor.
```sh
http://localhost:3000/autors/1
```
![image](https://github.com/Jpedro8899/trabalhonode/assets/160235276/4abd93f2-8616-4ab6-9f55-4245b9483a4a)


### Livros

#### GET /livros/
Retorna uma lista de todos os livros.
```sh
http://localhost:3000/livros/
```
![image](https://github.com/Jpedro8899/trabalhonode/assets/160235276/82eb783f-fd55-418e-a440-80ce82bc9f9f)


#### GET /livros/:id
Retorna detalhes de um livro específico, incluindo o autor.
```sh
http://localhost:3000/livros/1
```
![image](https://github.com/Jpedro8899/trabalhonode/assets/160235276/71dc5223-c661-4267-9ceb-c0c24d96e192)


#### POST /livros/
Cria um novo livro.
```sh
http://localhost:3000/livros/ |"json"| '{"titulo": "Título do Livro", "autorId": 1}'
```
![image](https://github.com/Jpedro8899/trabalhonode/assets/160235276/85697914-da05-45fb-856e-a26bbb267cb6)


#### PUT /livros/:autorId
Atualiza as informações de um livro existente.
```sh
http://localhost:3000/livros/1 |"json"| '{"titulo": "Novo Título", "autorId": 1}'
```
![image](https://github.com/Jpedro8899/trabalhonode/assets/160235276/5396d486-4b45-4540-8ead-6492c3bd764a)


#### DELETE /livros/:id
Exclui um livro.
```sh
http://localhost:3000/livros/1
```
![image](https://github.com/Jpedro8899/trabalhonode/assets/160235276/1cdefb70-f78d-496f-bad0-d7b2a3d97634)


## Descrição dos Métodos

### Autores

- **GET /autors/**: Recupera todos os autores da base de dados.
- **GET /autors/:id**: Recupera um autor específico pelo ID, incluindo os livros associados.
- **POST /autors/**: Cria um novo autor na base de dados.
- **PUT /autors/:id**: Atualiza os dados de um autor existente pelo ID.
- **DELETE /autors/:id**: Remove um autor da base de dados pelo ID.

### Livros

- **GET /livros/**: Recupera todos os livros da base de dados.
- **GET /livros/:id**: Recupera um livro específico pelo ID, incluindo o autor associado.
- **POST /livros/**: Cria um novo livro na base de dados.
- **PUT /livros/:autorId**: Atualiza os dados de um livro existente pelo autorId.
- **DELETE /livros/:id**: Remove um livro da base de dados pelo ID.

### Relacionamentos

- **GET /autors/:id**: Inclui os livros associados ao autor especificado.
- **GET /livros/:id**: Inclui o autor associado ao livro especificado.

## Middleware

O middleware da aplicação define os cabeçalhos de CORS para permitir solicitações de qualquer origem. Ou seja, é o express.js permitindo as requisições e respostas

## Sincronização do Banco de Dados

A sincronização do banco de dados é realizada automaticamente ao iniciar a aplicação, conectando ao banco de dados configurado. O sequelize permite que apenas com o banco criado, as tabelas possam ser implementadas sem maiores problemas.

```

Este `README.md` deve fornecer uma explicação clara sobre o propósito do projeto, como configurá-lo, as rotas disponíveis na API, e detalhes sobre como cada método funciona.
