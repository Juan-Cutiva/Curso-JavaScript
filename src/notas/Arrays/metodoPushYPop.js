// Métodos que modifican el Array original (Mutabilidad)

// push()
{
	const paises = ['USA', 'Canada', 'Reino Unido'];
	const newPaises = paises.push('Francia', 'Alemania');
	console.log(paises); // [ 'USA', 'Canada', 'Reino Unido', 'Francia', 'Alemania' ]
	console.log(newPaises); // 5
}

// pop()
{
	const paises = ['USA', 'Canada', 'Reino Unido'];
	const paisEliminado = paises.pop();
	console.log(paises); // [ 'USA', 'Canada' ]
	console.log(paisEliminado); // Reino Unido
}
