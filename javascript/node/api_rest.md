

# Como funciona 

Fluxo da requisição -> resposta
- Requisição do cliente
- Retorna através de estrutura de dados
- Cliente recebe resposta e processa

Rotas utilizam métods HTTP
```
GET http://minhaapi.com/users
POST http://minhaapi.com/users
PUT http://minhaapi.com/users/1
DELETE http://minhaapi.com/users/1
```


# Benefícios
Múltiplos clientes, mesmo backend
Comunicação padronizada, e com serviços externos

# Conteúdo da aquisição

Buscar usuário
~~~
GET http://app.com/company/1/users?page=2
~~~
- Rota: company, users
- Param: 1
- Query params: ?page=2

Criar usuário
~~~
POST htto://app.com/company/1/users
~~~

Body (PUST/PUT)
```
{
    "user":{
        "name":"marcelo",
        "aprendendo":["React Native", "NodeJS"]
    }
}
```

Headers
```
{
    "Locale":"pt_BR"
}
```

# HTTP Codes
Resposta do backend para o frontend

- 1xx: informação
- 2xx: sucesso
    - 200 SUCCESS
    - 201 CREATED
- 3xx: redirection
    - 301 MOVED PERMANENTLY
    - 302 MOVED
- 4xx: Erro cliente
    - 400 BAD REQUEST
    - 401 UNAUTHORIZED
    - 404 NOT FOUND
- 5xx: Erro do servidor
    - 500 INTERNAL SERVER ERROR



