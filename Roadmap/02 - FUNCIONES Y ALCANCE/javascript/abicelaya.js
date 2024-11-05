// FUNCIONES Y ALCANCE

/* Las funciones son uno de los bloques de construcción fundamentales en JavaScript. 
Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones 
que realiza una tarea o calcula un valor, pero para que un procedimiento califique como 
función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia 
entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del 
ámbito desde el que deseas llamarla. */

let num1 = 10; // variable global

// Sin parametros ni retorno
let nombre = "Jose"; // variable global
function diHola() {
  let mensaje = "Hola,"; // variable local
  console.log(mensaje, nombre);
}
diHola(); // llamo a la función

// Con uno o varios parametros
function sumar(num1, num2) {
  let total = num1 + num2;
  console.log(total);
}
sumar(num1, 5);

// Con retorno
function multiplicar(num1, num2) {
  let total = num1 * num2;
  return total;
}
console.log(multiplicar(num1, 2));

// Funcion dentro de otra funcion
function calculadora(num1, num2) {
  function sumar(a, b) {
    return a + b;
  }

  function multiplicar(a, b) {
    return a * b;
  }

  let resultado1 = sumar(num1, num2);
  let resultado2 = multiplicar(num1, num2);

  console.log("Suma:", resultado1);
  console.log("Multiplicación:", resultado2);
}
console.log(calculadora(num1, 2));

// ------------------------------------------------------

function saludoCompleto(nombre) {
  function generarSaludo() {
    return "Hola, " + nombre + "!";
  }

  console.log(generarSaludo());
}
console.log(saludoCompleto("Juan"));

// DIFICULTAD EXTRA
/* Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
- La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
    - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
    - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
    - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
    - La función retorna el número de veces que se ha impreso el número en lugar de los textos. */

function buscarMultiplos(cadena1, cadena2) {
  let contador = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(cadena1 + cadena2);
    } else if (i % 3 === 0) {
      console.log(cadena1);
    } else if (i % 5 === 0) {
      console.log(cadena2);
    } else {
      contador++;
    }
  }
  return contador;
}

console.log(buscarMultiplos("Fizz", "Buzz"));
