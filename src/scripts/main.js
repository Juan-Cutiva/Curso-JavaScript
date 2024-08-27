let carro = {
	marca: 'Tesla',
	modelo: 'Model S',
	color: 'Rojo'
};
let frutas = ['Manzana', 'Banano', 'Uvas'];
console.log(frutas);

document.querySelector('#prueba').innerHTML= `
<h1 class="text-red-900 text-7xl font-extrabold">Prueba</h1>
<h1 class="text-red-900 text-7xl font-extrabold">${carro.marca + ' el cual tiene este modelo '+ carro.modelo + ' de un color ' + carro.color + 'en el cual se puede consumir esta fruta ' + frutas[2]}</h1>
`

console.log("prueba")   