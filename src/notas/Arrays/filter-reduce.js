// Estos métodos iteran sobre el Array
// Estos métodos NO modifican el Array original (Inmutable)

// filter()
{
	const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	const numerosPares = numeros.filter((numero) => numero % 2 === 0);
	console.log(numerosPares); // [ 0, 2, 4, 6, 8, 10 ]
	const numerosImpares = numeros.filter((numero) => numero % 2 !== 0);
	console.log(numerosImpares); // [ 1, 3, 5, 7, 9, 11 ]
}

// reduce() caso 1
{
	const numerosReducidos = [1, 2, 3, 4, 5];
	const suma = numerosReducidos.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
	console.log(numerosReducidos); // [ 1, 2, 3, 4, 5 ]
	console.log(suma); // 15
}

// reduce() caso 2
{
	const palabras = ['Hola', 'Banano', 'Bugatti', 'GitHub', 'Juan', 'Bugatti', 'Hola'];
	const palabraFrecuente = palabras.reduce((acumulador, valorActual) => {
		if (acumulador[valorActual]) {
			acumulador[valorActual]++;
		} else {
			acumulador[valorActual] = 1;
		}
		return acumulador;
	}, {});
	console.log(palabraFrecuente); // { Hola: 2, Banano: 1, Bugatti: 2, GitHub: 1, Juan: 1 }
}
