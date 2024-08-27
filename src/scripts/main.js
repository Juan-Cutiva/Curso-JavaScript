let carro = {
	marca: 'Tesla',
	modelo: 'Model S',
	color: 'Rojo'
};
let frutas = ['Manzana', 'Banano', 'Uvas'];
console.log(frutas);

function i(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
var c = i(0, 3);
console.log(c);

const resultado = c === 0 ? 'salio 0' : '' || c === 1 ? 'salio 1' : '' || c === 2 ? 'salio 2' : '';

document.querySelector('#prueba').innerHTML = `
<h1 class="text-red-900 text-7xl font-extrabold">Prueba</h1>
<h1 class="text-red-900 text-7xl font-extrabold">${carro.marca + ' el cual tiene este modelo ' + carro.modelo + ' de un color ' + carro.color + 'en el cual se puede consumir esta fruta ' + frutas[2] + ` hola ${frutas[0]} ${resultado}`}</h1>
`;

console.log('prueba');
