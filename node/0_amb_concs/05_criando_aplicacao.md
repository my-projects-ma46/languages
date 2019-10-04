


criar package.json
~~~
yarn init -y
~~~

para adicionar dependencia express
~~~
yarn add express
~~~

outras pessoas podem instalar as dependências apenas com `$ yarn`, que são salvas no `package.json`.

ponto de entrada da aplicação 
> index.js


Para não precisar fechar e abrir aplicação toda vez, flag -D = modo desenvolvimento
~~~
yarn add nodemon -D
~~~
Depois adicionar em *package.json*
```json
"scripts": {
    "dev": "nodemon index.js
},
```