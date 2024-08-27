//PRIMITIVOS

//string
let nombre = 'Juan';
console.log(typeof nombre);

//number
let edad = 17;
console.log(typeof edad);

//boolean
if (edad > 18) {
	console.log('Es  mayor de edad');
	console.log(typeof true);
} else {
	console.log('Es menor de edad');
	console.log(typeof false);
}

//null
let noHayValor = null;
console.log(typeof noHayValor);

//undefined
let noDefinido = undefined;
console.log(typeof noDefinido);

//symbol
let simboloUnico = Symbol('único');
console.log(typeof simboloUnico);

//bigint
let numeroGrande = 2n;
console.log(typeof numeroGrande);

/* ------------------------------------------------------------------------*/

// COMPLEJOS

// object
let carro = {
	marca: 'Tesla',
	modelo: 'Model S',
	color: 'Rojo'
};
console.log(typeof carro);

// array
let frutas = ['Manzana', 'Banano', 'Uvas'];
console.log(typeof frutas);

// function
function operacion(a, b) {
	return a * b;
}

operacion(4, 2);
console.log(typeof operacion);