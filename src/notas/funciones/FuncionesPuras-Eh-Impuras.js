// Funciones puras

// Efectos Colaterales -> Side Effects
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulación del DOM
// 6. Obtener la hora actual

// Pura
function sum(a, b) {
	return a + b;
}

// Impura
function sum(a, b) {
	console.log(`A: ${a}`); // 'A: 60'
	return a + b;
}

sum(12 + 48);

// Esta es impura ya que modifica una variable global
let total = 0;

function sumWithSideEffect(a) {
	return (total += a);
}

// Función pura
function square(x) {
	return x * x;
}

function addTen(y) {
	return y + 10;
}

const number = 5;
const finalResult = addTen(square(number));
console.log(finalResult); // 35
