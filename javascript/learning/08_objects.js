
/*
https://www.w3schools.com/js/js_objects.asp
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes

*/

// exemplo
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    fullName : function() {
        console.log("My full name is " + this.firstName + " " + this.lastName);
    },
    changeAge : function(newAge) {
        this.age = newAge;
    }
    
};

//You can access object properties in two ways:
var x = person.firstName
var y = person["firstName"]

console.log(x)
console.log(y)

//>> John
//>> John

/*
Object Methods
Objects can also have methods.

Methods are actions that can be performed on objects.

Methods are stored in properties as function definitions.
*/

person.fullName();
person.changeAge(70);
console.log("My age is " + person.age);

// Outra forma de declarar Classes e instanciar objetos

class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calculaArea() {
        return this.largura * this.altura;
    }

    get area() {
        return this.calculaArea();
    }
}

var quadrado = new Retangulo(5, 5);

console.log("área do quadrado = " + quadrado.area);

/*
Métodos estáticos 
São chamados sem ter sido instansiados

*/

class Ponto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distancia(ponto1, ponto2) {
        const dx = ponto2.x - ponto1.x;
        const dy = ponto2.y - ponto1.y;
        
        return Math.sqrt(dx**2 + dy**2);
    }
}

const ponto1 = new Ponto(1, 1);
const ponto2 = new Ponto(1, 4);

console.log("Distancia entre os pontos: " + Ponto.distancia(ponto1, ponto2) + '\n');

// ===============
// herança

class Animal { 
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(this.nome + ' emite um barulho.');
    }
}

class Cachorro extends Animal {
    // sobrescrita de métodos
    falar() {
        console.log(this.nome + ' está latindo.');
    }
}

var d = new Cachorro('Mat');
d.falar();


// Chamada da classe pai com superSeção
// A palavra-chave (keyword) super é utilizada para chamar funções que pertencem ao pai do objeto.

class Gato {
   constructor(nome) {
      this.nome = nome;
   }

   falar() {
      console.log(this.nome + ' faça barulho.');
   }
}

class Leao extends Gato {
   falar() {
      super.falar();
      console.log(this.nome + ' roars.');
   }
}

var l = new Leao('Fuzzy');
l.falar();
