// importar objeto express
const express = require('express');

// instanciar aplicação
const server = express();

// usar json no body da requisição
server.use(express.json());

// Query params: ?teste=1 <br>
// Route params: /users/1 <br>
// Request body: {...}

const users = ['João', 'Joana', 'Pedro'];

// enviar e recebendo parametros do back <=> front

// middlerware global
server.use((req, res, next) => {
    console.log(`Método: ${req.method}; URL: ${req.url}`);
    // return next();
    next();
    console.log('finalizou');
});

// middler local
function checkUserExists(req, res, next) {
    if(!req.body.name) {
        return res.status(400).json({error:'User name is required'});
    }
    next();
}

function checkUserIndex(req, res, next) {
    const user = users[req.params.index];
    if(!user) {
        return res.status(400).json({error:'User does not exist'});
    }
    req.user = user;
    next();
}

// rota para todos os usuários
server.get('/users', (req, res) => {
    return res.json(users);
});

// rota para pegar um usuário
server.get('/users/:index', checkUserIndex, (req, res) => {
    // Route params. -> /:
    return res.json(req.user);


    // // pega param. da query -> server.get('/users'
    // // http://localhost:3000/users?name=Joao
    // const name = req.query.name;
    // return res.json( {message:`Ola ${name}!`} );
});

// adicionar um usuário
server.post('/users', checkUserExists, (req, res) => {
    const { name } = req.body;
    users.push(name);
    
    return res.json(users);
});

// alterar usuário
server.put('/users/:index', checkUserIndex, checkUserExists, (req, res) => {
    const { name } = req.body;
    const { index } = req.params;

    users[index] = name;

    return res.json(users);

});

// deletar usuário
server.delete('/users/:index', checkUserIndex, (req, res) => {
    const { index } = req.params;
    users.splice(index, 1);
    return res.send();
});

// escutar porta
server.listen(3000);



