/*
EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 */

// -------------- Arrays --------------

// Creacion
let frutas = ["manzana", "pera", "uva"]; // Array de strings
console.log(frutas.length); // 3

// Inserción
frutas.push("banana"); // Añade un elemento al final del array
console.log(frutas); // [ 'manzana', 'pera', 'uva', 'banana' ]

// Borrado
let indiceBorrar = 1; // Indice del elemento a borrar
let elementoBorrado = frutas.splice(indiceBorrar, 1); // Borra el elemento en el índice especificado y devuelve un array con el elemento borrado
console.log(frutas); // [ 'manzana', 'uva', 'banana' ]
console.log(elementoBorrado); // [ 'pera' ]

// Actualización
let indiceActualizar = 2; // Indice del elemento a actualizar
let nuevoValor = "melon"; // Nuevo valor para el elemento
frutas[indiceActualizar] = nuevoValor;
console.log(frutas); // [ 'manzana', 'uva','melon' ]

// Ordenación
frutas.sort(); // Ordena el array de manera alfabética
console.log(frutas); // [ 'banana', 'manzana','melon', 'uva' ]

// -------------- Objetos --------------

// Creación
let persona = { nombre: "Juan", edad: 25, ciudad: "Montevideo" };
console.log(persona.edad); // 25

// Actualización
persona.edad = 26;
console.log(persona.edad); // 26

// Inserción
persona.trabajo = "Desarrollador";
console.log(persona); // { nombre: 'Juan', edad: 26, ciudad: 'Montevideo', trabajo: 'Desarrollador' }

// Borrado
delete persona.edad;
console.log(persona); // { nombre: 'Juan', ciudad: 'Montevideo', trabajo: 'Desarrollador' }

/* DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar, y a continuación
 *   los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más de 11 dígitos.
 *   (o el número de dígitos que quieras)
 * - También se debe proponer una operación de finalización del programa.
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let agenda = [
  { nombre: "Juan", telefono: "1234567890" },
  { nombre: "Maria", telefono: "9876543210" },
];

function mostrarMenu() {
  console.log("\n--- Agenda de Contactos ---");
  console.log("1. Buscar contacto");
  console.log("2. Agregar contacto");
  console.log("3. Actualizar contacto");
  console.log("4. Eliminar contacto");
  console.log("5. Salir");
  rl.question("Elige una opción: ", (respuesta) => {
    const opcion = parseInt(respuesta);
    ejecutarOpcion(opcion);
  });
}

function ejecutarOpcion(opcion) {
  switch (opcion) {
    case 1:
      rl.question(
        "Escribe el nombre del contacto que buscas: ",
        (respuesta) => {
          let nombre = respuesta.toLowerCase();
          let buscarNombre = agenda.find(
            (contacto) => contacto.nombre.toLowerCase() === nombre
          );
          if (buscarNombre === undefined) {
            console.log("No se encontró el contacto.");
          } else {
            console.log(
              `Contacto encontrado: ${buscarNombre.nombre} - ${buscarNombre.telefono}`
            );
          }
          mostrarMenu();
        }
      );
      break;
    case 2:
      rl.question("Escribe el nombre: ", (nombre) => {
        rl.question("Escribe el telefono: ", (telefono) => {
          if (telefono.length <= 11) {
            let nuevoContacto = { nombre, telefono };
            agenda.push(nuevoContacto);
            console.log(
              "Contato agregado correctamente: " + nombre + " - " + telefono
            );
            console.log(agenda);
          } else {
            console.log("El número de teléfono debe tener 11 dígitos.");
            mostrarMenu();
          }
        });
        mostrarMenu();
      });
      break;
    case 3:
      rl.question(
        "Escribe el nombre del contacto que deseas actualizar: ",
        (respuesta) => {
          let nombre = respuesta.toLowerCase();
          let contactoEncontrado = agenda.find(
            (contacto) => contacto.nombre.toLowerCase() === nombre
          );
          if (contactoEncontrado === undefined) {
            console.log("No se encontró el contacto.");
          } else {
            rl.question("Escribe el nuevo telefono: ", (telefonoNuevo) => {
              if (telefonoNuevo.length <= 11) {
                contactoEncontrado.telefono = telefonoNuevo;

                console.log(
                  "Contato actualizado correctamente: " +
                    nombre +
                    " - " +
                    telefonoNuevo
                );
              } else {
                console.log("El número de teléfono debe tener 11 dígitos.");
                mostrarMenu();
              }
            });
          }
          mostrarMenu();
        }
      );
      break;
    case 4:
      rl.question(
        "Escribe el nombre del contacto que quieres eliminar: ",
        (respuesta) => {
          let nombre = respuesta.toLowerCase();
          let contactoEncontrado = agenda.find(
            (contacto) => contacto.nombre.toLowerCase() === nombre
          );
          if (contactoEncontrado === undefined) {
            console.log("No se encontró el contacto.");
          } else {
            agenda.splice(agenda.indexOf(contactoEncontrado), 1);
            console.log("Contacto eliminado.");
            console.log(agenda);
          }
          mostrarMenu();
        }
      );
      break;
    case 5:
      console.log("Saliendo de la agenda.");
      rl.close();
      break;
    default:
      console.log("Opción no válida. Elige una opción del 1 al 5.");
      mostrarMenu();
      break;
  }
}

mostrarMenu();
