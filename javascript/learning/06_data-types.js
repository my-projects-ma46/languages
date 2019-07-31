
/*
https://www.w3schools.com/js/js_datatypes.asp

Object properties are written as name:value pairs, separated by commas.

Example
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

*/

function falar (pessoa) {
    console.log("Meu nome é " + pessoa.nome)
}

var pessoa = {nome:"Maria", idade:20, func:falar};

pessoa.func(pessoa)