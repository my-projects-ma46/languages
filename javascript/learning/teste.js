
print = console.log;


// var fs = require('fs');
// var arqJogadores = fs.readFileSync('arq.txt').toString().split("\n");

// for (i in arqJogadores) {
//     print(arqJogadores[i]);
// }

function copiarLista(lista) {
    return JSON.parse( JSON.stringify( lista ) );
}

function foo(x) {
    // let a = copiarLista(listas)
    // a[onde] += oque;
    print(x);
}

var a = [1,2,3,4,5];
var b = 7;
var c = [[1,2,3], [7,8]];
// a[1].push(4);
// foo(a[1].concat([4]));

// foo(c[1]);
print(b);

// var x = [1,2,3,4,5];
// var y = x.slice(0);
// x.push(77);
// console.log(x); // [1,2,3,4,5,77]
// console.log(y); // [1,2,3,4,5]
