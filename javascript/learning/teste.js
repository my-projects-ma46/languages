
/*
https://www.w3schools.com/js/js_arrays.asp



*/

print = console.log;

var frutas = ["manga", "banana", "abacate"];

// loop em arrays
const tamanho = frutas.length;
// iterativo
var i;
for(i = 0; i < tamanho; i++) {
    print('gosto de ' + frutas[i]);
}

// com Array.forEach()
// aplica a função em cada elemento

function funcao(fruta) {
    print('gosto de ' + fruta);
}
print('');
frutas.forEach(funcao);

// adicionando elementos

frutas.push("uva");
print(frutas);
frutas[frutas.length] = "melancia";
print(frutas);

// para verificar se é array
print(Array.isArray(frutas));
/*
para browsers antigos
function isArray(x) {
  return x.constructor.toString().indexOf("Array") > -1;
}

ou

frutas instanceof Array;   // retorna true
*/


// toString transforma array em string com elementos separados por vírgula
// com join pode escolher o separador
var fruits = ["Banana", "Orange", "Apple", "Mango"];
print(fruits.toString());
// var nums = [1,3,6,8];
// print(nums.join('-'));

// vamos tirar o último elemento do array e imprimr
print(fruits.pop());
print(fruits);

// push insere elemento no final do array

// shift retira o primeiro elemento e retorna-o
var nums = [1,3,6,9];
print(nums.shift());
print(nums);
// unshift insere elemento no começo, retorna o elemento inserido
nums.unshift(2);
print(nums);

// para mudar um valor
nums[0] = 7;

// para ver o tamanho
print('tamanho: ' + nums.length);

var index = 1;
var del = nums[index];
print('\n\n\n' + nums); // veja que foi usado o método toString implicitamente
print('vamos deletar o valor ' + del);
delete fruits[index];
print(nums);


// splice
// pode ser usado para adicionar novos elementos
// pode ser usado para remover itens sem deixar buracos
/*
The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
The splice() method returns an array with the deleted items:
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
print('\n\n\nUsando splice no array ' + fruits);
fruits.splice(2, 2, "Lemon", "Kiwi");
print(fruits);

// concat: concatenando arrays
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
print('\n\n\nconcatenando arrays\n' + myGirls.concat(myBoys));

// splice
// retira um trecho do array, não altera o original
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
print('\n\n\nslice de ' + fruits);
print(fruits.slice(1, 3));


// sort: ordena array de strings
// altera o array original
print('\n\n\n' + fruits + ' em ordem alfabética:');
fruits.sort();
print(fruits);
// reverse reverte o array

// para ordenar array com números:
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
print('\nnúmeros ordenados: ' + points);
/* na função que é passada:
If the result is negative a is sorted before b.
If the result is positive b is sorted before a.
If the result is 0 no changes are done with the sort order of the two values.
*/

// para misturar os valores do array
points.sort(function(a, b){return 0.5 - Math.random()});
print('\n\narray bagunçado: ' + points);

// achar o maior valor  
var i;
var max = points[0];
// ou var max = -Infinity;

for(i = 0; i<points.length; i++) {
  if(points[i] > max) {
    max = points[i];
  }
} 
print('\nMaior valor: ' + max);

// maior valor com Math.max
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
// para menor valor, usar Math.min


// ordenar array de objetos
var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
cars.sort(function(a, b){return a.year - b.year});

// para comparar e ordenar por string:
cars.sort(function(a, b){
  var x = a.type.toLowerCase();
  var y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});

// Iteration
// percorrendo elementos do array e aplicando uma alteração
print('\n\n\nVamos passar todas as strings para minúsculo');
var nomes = ['Maria', 'JoSé', 'PEDRO'];
print('antes: ' + nomes);
function funcao(value, index, array) {
  array[index] = value.toLowerCase();
}
nomes.forEach(funcao);
print('depois: ' + nomes);

// Array.map()
// aplica ação sobre elementos de um array e retorna uma cópia do array
// não altera o original
var nums = [1,2,3,4];
var times = 2;
print('Multiplicando o array ' + nums + 'por ' + times);
print(nums.map( function(value, index, array) {return value * times} ));
// the index and array parameters can be omitted:

// para filtrar elentos de um array de acordo com um parâmetro
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
// index e array podem ser omitidos


// Array.reduce() reduz elementos de um array de acordo com uma função
// é aplicado da esquerda -> direita, usar reduceRight() para dir->esq
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value, index, array) { // index e array opcional
  return total + value;
}

// Array.every() verifica se todos os valores passam um teste
// já Array.some() testa se algum valor passa
var numbers = [12, 4, 9, 25, 15];
function myFunction(value, index, array) {
  return value > 18;
}
var allOver18 = numbers.every(myFunction);
print(allOver18);

// Array.indexOf(item, start) procura um valor no array e retorna,
// retorna -1 se não achou o item, start é opcional e indica onde começar a
// procurar, valor negativo se posiciona do final
// Array.lastIndexOf() procura um valor, e retorna o index do útimo item encontrado

// arr.find() retorna o primeiro valor que passa no teste
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
print(first);