// Estos métodos iteran sobre el Array
// Estos métodos NO modifican el Array original (Inmutable)

// 1. Copia de un Array
{
	const arrayOriginal = [1, 2, 3, 4, 5];
	const copiaArray = [...arrayOriginal];
	console.log(arrayOriginal); // [ 1, 2, 3, 4, 5 ]
	console.log(copiaArray); // [ 1, 2, 3, 4, 5 ]
}

// 2. Combinar Arrays
{
	const array1 = [1, 2, 3];
	const array2 = [4, 5, 6];
	const arrayCombinado = [...array1, ...array2];
	console.log(array1); // [ 1, 2, 3 ]
	console.log(array2); // [ 4, 5, 6 ]
	console.log(arrayCombinado); // [ 1, 2, 3, 4, 5, 6 ]
}
// 3. Crear arrays con elementos adicionales
{
	const arrayBase = [1, 2, 3];
	const arrayConElementosAdicionales = [...arrayBase, 4, 5, 6];
	console.log(arrayBase); // [ 1, 2, 3 ]
	console.log(arrayConElementosAdicionales); // [ 1, 2, 3, 4, 5, 6 ]
}

// 4. Pasar elementos a funciones
{
	function suma(a, b, c) {
		return a + b + c;
	}

	const numeros = [1, 2, 3];
	const resultado = suma(...numeros);
	console.log(resultado);
}
