
// Método GET para pegar usuário e retornar para o front-end
// http://localhost:3000/users/1
// retorna :
/*
{
  "message": "Nome do usuário Maria"
}
*/

// importar objeto express
const express = require('express');

// instanciar aplicação
const server = express();

// Query params: ?teste=1 <br>
// Route params: /users/1 <br>
// Request body: {...}

const users = ['João', 'Maria', 'Pedro'];

// enviar e recebendo parametros do back <=> front
server.get('/users/:index', (req, res) => {
    // Route params.
    const { index } = req.params;
    return res.json({message:`Nome do usuário: ${users[index]}`});


    // // pega param. da query -> server.get('/users'
    // const nome = req.query.nome;
    // return res.json( {message:`Ola ${nome}!`} );
});



// escutar porta
server.listen(3000);



