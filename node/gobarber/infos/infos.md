

adicionar módulo para trabalhar importação de módulo do tipo: `import express from 'express'`
~~~
yarn add sucrase nodemon -D
~~~

adicionar ao `package.json`
```json
"scripts":{
    "dev":"nodemon src/server.js"
},
```

para o nodemon entender o surcrase, criar `nodemon.json`,
assim, ao executar arquivos  .js, vai ser executado o surcrase-node
```json
{
    "execMap": {
        "js": "sucrase-node"
    }
}
```

rodar projeto com:
~~~
yarn dev
~~~


