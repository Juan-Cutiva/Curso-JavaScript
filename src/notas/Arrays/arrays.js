// Como crear un Array?

// 1. new Array() or Array()
const newArray = new Array('Manzana', 'Banano', 'Naranja', 1, 2, 3);
console.log(newArray); // [ 'Manzana', 'Banano', 'Naranja', 1, 2, 3 ]

const array = Array('Uva', 'Pera', 'Sandia', 4, 5, 6);
console.log(array); // [ 'Uva', 'Pera', 'Sandia', 4, 5, 6 ]

const arrayNumber = Array(12);
console.log(arrayNumber); // [ <12 empty items> ] Cuidado con esta forma de crear Array's

// 2. Syntax's literal de un Array
const arrayLiteral = ['Limón', 'Durazno', 'Fresa', 7, 8, 9];
console.log(arrayLiteral); // [ 'Limón', 'Durazno', 'Fresa', 7, 8, 9 ]

const newArrayNumber = [12];
console.log(newArrayNumber); // [ 12 ] Aca no genera ningún error

const arrayVacio = [];
console.log(arrayVacio); // []

// Los Arrays permiten guardar datos mixtos
const arrayMixto = [
	'Manzana',
	1,
	true,
	null,
	undefined,
	{ nombre: 'Juan', edad: 25 },
	[1, 2, 3],
	{
		nombre: 'Juan',
		funcion: function (mensaje) {
			console.log(`Mi nombre es ${this.nombre}, ${mensaje}`);
		} //Mi nombre es Juan, Y estoy estudiando para ser un Front-End Developer
	}
];
const result = arrayMixto[7].funcion('Y estoy estudiando para ser un Front-End Developer');
console.log(arrayMixto); /*[
                            'Manzana',
                            1,
                            true,
                            null,
                            undefined,
                            { nombre: 'Juan', edad: 25 },
                            [ 1, 2, 3 ],
                            { nombre: 'Juan', funcion: [Function: funcion] }
                        ] */

// Propiedad Length
const arrayLength = ['Manzana', 'Banano', 'Naranja'];
const numeroDeFrutas = arrayLength.length;
console.log(numeroDeFrutas); // 3

// Mutabilidad
const arrayMutabilidad = ['Manzana', 'Banano', 'Naranja'];
arrayMutabilidad.push('Papaya');
console.log(arrayMutabilidad); // [ 'Manzana', 'Banano', 'Naranja', 'Papaya' ]

// Inmutabilidad
const arrayInmutabilidad = ['Manzana', 'Banano', 'Naranja'];
const agregarArray = arrayInmutabilidad.concat(['Limón', 'Kiwi']);
console.log(agregarArray); // [ 'Manzana', 'Banano', 'Naranja', 'Limón', 'Kiwi' ]

// Chequeo de un Array con Array.isArray()
const arrayChequeo = ['Manzana', 'Banano', 'Naranja'];
const isArray = Array.isArray(arrayChequeo)
console.log(isArray) // true

// Ejercicio practico: suma de todos los elementos en un Array
const arraySuma = [1, 2, 3, 4, 5];
let sum = 0

for (let i = 0; i < arraySuma.length; i++) {
	sum += arraySuma[i];
}
console.log(sum) // 15