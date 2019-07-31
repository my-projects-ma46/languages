
/*
https://www.w3schools.com/js/js_numbers.asp

Todo número em javascript é em ponto flutuante de 64-bit

Valor               Expoente	        Sinal
52 bits (0 - 51) 	11 bits (52 - 62)	1 bit (63)

*/

print = console.log

// inteiros são guardados até 15 dígitos

var x = 999999999999999; // 15 dígitos (999 trilhões etc.)
//      999999999999999
var y = 9999999999999999; // 16 dígitos (9 quadrilhões etc.)
//      10000000000000000
print(x);
print(y);

// para decimais é 17, mas nem sempre é 100% correto
var x = 0.2 + 0.1;         // x vai dar 0.30000000000000004
print(x);
// então podemos fazer
var x = (0.2 * 10 + 0.1 * 10) / 10;       // x = 0.3
print(x);

// comportamento de strins e números
var x = 10;
var y = 20;
var z = "The result is: " + x + y; // 1020
print(z);

var x = 10;
var y = 20;
var z = "30";
var result = x + y + z; // 3030
print(result);

var x = "100";
var y = "10";
var z = x / y;
// z will be 10
// funciona para * e -, exceto + (concatena)
print(z);

var x = 100 / "Apple";
print(isNaN(x));

print(-2 / 0);

// 0xAF8, 0x para valor na base exadecimal
// alguns interpretadores javascript entendem 07 como octogonal

// para trocar de base
var x = 5;
print('\nvalor original: ' + x);
print('na base 2: ' + x.toString(2));

// métodos

// exponencial (retorna string)
// sem o parâmetro, o valor é arredondado
var x = 100;
print(x.toExponential()); // 1e+2

/*
toFixed()
retorna uma string arredondado em um valor de casas decimais
var x = 9.656;
x.toFixed(0);           // 10
x.toFixed(2);           // 9.66
x.toFixed(4);           // 9.6560
x.toFixed(6);           // 9.656000
*/

/*
toPrecision()
retorna uma string com determinado tamanho

var x = 9.656;
x.toPrecision();        // 9.656
x.toPrecision(2);       // 9.7
x.toPrecision(4);       // 9.656
x.toPrecision(6);       // 9.65600
*/

/* Converting Variables to Numbers

Method	        Description
Number()	    Returns a number, converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	    Parses its argument and returns an integer

Number(true);          // 1
Number(false);         // 0
Number("10");          // 10
Number("  10");        // 10
Number("10  ");        // 10
Number(" 10  ");       // 10
Number("10.33");       // 10.33
Number("10,33");       // NaN
Number("10 33");       // NaN 
Number("John");        // NaN

NaN é retornado caso não consiga passar para number

*/

// para datas
print(Number(new Date("2017-09-30")));    // returns 1506729600000
// The Number() method above returns the number of milliseconds since 1.1.1970.

parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 
// o mesmo para parseFloat, mas com float
// If the number cannot be converted, NaN (Not a Number) is returned.

/*
Number              Properties
Property	        Description
MAX_VALUE	        Returns the largest number possible in JavaScript
MIN_VALUE	        Returns the smallest number possible in JavaScript
POSITIVE_INFINITY	Represents infinity (returned on overflow)
NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
NaN	                Represents a "Not-a-Number" value
*/
print("maior número possível: " + Number.MAX_VALUE);

