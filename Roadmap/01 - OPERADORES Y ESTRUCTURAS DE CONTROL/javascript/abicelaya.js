// Ejemplos utilizando todos los tipos de operadores de JavaScript

// Operador de asignación: asigna un valor a su operando izquierdo basándose en el valor de su operando derecho.
let num1 = 4;
let num2 = 3;

// Operador de comparación: compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (true) o falsa (false).
console.log(num1 == num2); // false
console.log(num1 != num2); // true
console.log(num1 > num2); // true
console.log(num1 <= num2); // false

// Operadores aritméticos
console.log(num1 + num2); // suma
console.log(num2 - num1); // resta
console.log(num2 * num1); // multiplicación
console.log(num2 / num1); // división
console.log(num2++); // incremento
console.log(num2--); // decremento

// Operador condicional (Ternario)
let edad = 16;
let edadParaBeber = edad >= 18 ? "Puedes beber" : "No puedes beber";
console.log(edadParaBeber);

// Operador condicional
if (edad >= 18) {
  console.log("Puedes beber");
} else {
  console.log("No puedes beber");
}

// Operadores lógicos
let resultado1 = num1 > num2 && num1 > 1;
console.log(resultado1); // true y true = true

let resultado2 = num1 > num2 || num1 == 1;
console.log(resultado2); // true y false = true

// Operadores de cadena (concatenación)
let cadena1 = "hola";
let cadena2 = " que tal";
console.log(cadena1 + cadena2); //
console.log(cadena1 + " JavaScript");

/*
    Crea un programa que imprima por consola todos los números comprendidos
    entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
*/

for (let i = 10; i <= 55; i++) {
  if (i % 2 == 0 && i != 16 && i % 3 != 0) {
    console.log(i);
  }
}
