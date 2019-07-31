
/*
https://www.w3schools.com/js/js_strings.asp
Referência completo: https://www.w3schools.com/jsref/jsref_obj_string.asp

*/
print = console.log

// String Length

var nome = "maria";
console.log(nome + " tem " + nome.length + " letras");

// strings também podem ser objetos

var x = "John";
var y = new String("John");
console.log(x == y);
console.log(x === y);

// typeof x will return string
// typeof y will return object

print('\nindex');
// index de uma substring

var str = "um barco no mar se choca com outro barco";
print(str.indexOf("barco"));

// último index de substring
print(str.lastIndexOf("barco"));

// index também recebe parâmetro de onde começar a procurar
print(str.indexOf("barco", 8));
print(str.lastIndexOf("barco", 10));

print('\nsearch');

print(str.search('barco'));

/*
The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
*/

//=======================

print('\nExtraindo partes de uma string');

/*
slice(start, end)
substring(start, end) // cannot accept negative indexes
substr(start, length)
*/

var frutas = "maçã_uva_pera";
var uva = frutas.slice(5,8);
print(uva);
// print(frutas);
var pera = frutas.slice(-4);
print(pera);

var maca = frutas.substr(0, 4);
print(maca);

//=====================
print("\nTrocando conteúdo de strings");

var frase = "visite Manaus e Manaus";
print(frase.replace('Manaus','Macapá'));

/*
replace retorna uma string, não altera a string original
replace só troca a primeira substring que achar, e é case sensitive,
para trocar sem case sensitive, usar a flag /i
*/
novaFrase = frase.replace(/manaus/i,'Cuiabá');
print(novaFrase);

// Upppe e Lower
var msg = "Olá Mundo!";
print(msg.toUpperCase());
print(msg.toLowerCase());

// Concatenar strings
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
print(text3);

// remover espaços em branco dos dois lados (não remove espaços no meio)
var msg = "      olá    mundo               ";
print('[' + msg.trim() + ']');
/*
// trim não é suportado por Internet Explorer 8 ou anteriores,
// mas pode ser feito o seguinte
if (!String.prototype.trim) { // caso não houver trim
    String.prototype.trim = function () { // adicinar método a classe String
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}
*/

// extrair caracteres
/*
charAt(position)
charCodeAt(position)
    The method returns a UTF-16 code (an integer between 0 and 65535).
Property access [ ] // ECMAScript 5 (2009)
    Obs:
    It does not work in Internet Explorer 7 or earlier
    It makes strings look like arrays (but they are not)
    If no character is found, [ ] returns undefined, while charAt() returns an empty string.
    It is read only. str[0] = "A" gives no error (but does not work!)
*/
var msg = "maria";
print("\npegando caracteres de " + msg);
print(msg.charAt(2));
print(msg.charCodeAt(2));
print(msg[2]);

// separar string com split(), convertendo para array
var msg = "banana";
print("\nSplit de " + msg);
print(msg.split('n'));
print(msg.split());
print(msg.split(""));
