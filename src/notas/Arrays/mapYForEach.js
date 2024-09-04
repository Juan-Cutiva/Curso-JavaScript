// Estos métodos iteran sobre el Array
// Estos métodos NO modifican el Array original (Inmutable)

// map()
{
	const numeros = [1, 2, 3, 4, 5];
	const numerosAlCuadrado = numeros.map((num) => num * num);
	console.log(numeros); // [ 1, 2, 3, 4, 5 ]
	console.log(numerosAlCuadrado); // [ 1, 4, 9, 16, 25 ]
}

// forEach()
{
	const colores = ['Rojo', 'Rosado', 'Azul'];
	const iterarColores = colores.forEach((color) => console.log(color)); /*Rojo Rosado Azul*/
	console.log(colores); // [ 'Rojo', 'Rosado', 'Azul' ]
	console.log(iterarColores); // undefined, regresa undefined ya que no devuelve un Array
}

// Ejercicio: Fahrenheit a Celsius convección ( map() )
{
	const temperaturasFahrenheit = [32, 212, -0.4, -40, 212];
	const temperaturasCelsius = temperaturasFahrenheit.map( (temperatura) => (5 / 9) * (temperatura - 32) );
	console.log('Temperatura en Fahrenheit:', temperaturasFahrenheit); // Temperatura en Fahrenheit: [ 32, 212, 0, -40, 212 ]
	console.log('Temperatura en Celsius:', temperaturasCelsius); // Temperatura en Celsius: [ 0, 100, -18, -40, 100 ]
}

// Ejercicio: Sumas los elementos en un Array
{
    const numeros = [1, 2, 3, 4, 5];
    let suma = 0
    numeros.forEach(numero => suma += numero);
    console.log('Array de Numeros:', numeros); // Array de Numeros: [ 1, 2, 3, 4, 5 ]
    console.log('Suma de Numeros:', suma); // Suma de Numeros: 15
}