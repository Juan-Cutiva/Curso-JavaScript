// Estos métodos iteran sobre el Array
// Estos métodos NO modifican el Array original (Inmutable)

// find()
{
	const multiplosDe5 = [5, 10, 15, 20, 25];
	const primerNumeroMayorA10 = multiplosDe5.find((numero) => numero > 10);
	console.log(multiplosDe5); // [ 5, 10, 15, 20, 25 ]
	console.log(primerNumeroMayorA10); // 15
}

// findIndex()
{
	const numerosAleatorios = [6, 14, 27, 56, 40];
	const indiceDelNumero = numerosAleatorios.findIndex((numero) => numero > 50);
	console.log(numerosAleatorios); // [ 6, 14, 27, 56, 40 ]
	console.log(indiceDelNumero); /* 3, aca nos dio el indice del numero que cumple con la funcion, 
                                    y ese numero es el 56 y este esta en el indice 3 del array */
}
