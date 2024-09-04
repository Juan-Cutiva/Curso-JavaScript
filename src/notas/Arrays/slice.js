// Estos métodos iteran sobre el Array
// Estos métodos NO modifican el Array original (Inmutable)

// slice()
{
	const animales = ['Hormiga🐜', 'Bisonte🦬', 'Camello🐫', 'Pato🦆', 'Elefante🐘'];
	const animalesElegidos = animales.slice(1, 4);
	const newAnimalesElegidos = animales.slice(-2);
	const animalesElegidosNegativos = animales.slice(1, -1);
    const copiaAnimales = animales.slice()
    /*-------------------------------------------------------------------------------------------------------------*/
	console.log(animales); // [ 'Hormiga,🐜', 'Bisonte🦬', 'Camello🐫', 'Pato🦆', 'Elefante🐘' ]

	console.log(animalesElegidos); // [ 'Bisonte🦬', 'Camello🐫', 'Pato🦆' ]

	console.log(newAnimalesElegidos); /* [ 'Pato🦆', 'Elefante🐘' ] - Comienza a contar desde el ultimo indice y le 
                                        asigna a el ultimo indice el valor de -1 y asi en adelante, ...-3 -2 -1*/

	console.log(animalesElegidosNegativos); // [ 'Bisonte🦬', 'Camello🐫', 'Pato🦆' ]

    console.log(copiaAnimales) // [ 'Hormiga🐜', 'Bisonte🦬', 'Camello🐫', 'Pato🦆', 'Elefante🐘' ]
}