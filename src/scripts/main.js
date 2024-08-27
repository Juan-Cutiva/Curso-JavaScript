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

const resultado = c === c ? `salio ${c}` : 'Error' 


function cuadrado(){
	if(c === 0){
		const r ='banano'
		return r
	}else if (c === 1){	
		const r = 'manzana'
		return r
	}else {
		const r = 'pera'
		return r
	}
}
console.log(cuadrado())


document.querySelector('#prueba').innerHTML = `
<h1 class="text-red-900 text-7xl font-extrabold">Prueba</h1>
<h1 class="text-red-900 text-7xl font-extrabold">${carro.marca + ' el cual tiene este modelo ' + carro.modelo + ' de un color ' + carro.color + 'en el cual se puede consumir esta fruta ' + frutas[2] + ` hola ${frutas[0]} ${resultado} ${cuadrado()}`}</h1>
`;

console.log('prueba');
