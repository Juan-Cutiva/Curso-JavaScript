const prueba = {
	nombre: 'Juan',
	edad: 17,
	comidaFav: 'Pizza',
	altura: '1.70m',
	sexo: 'Masculino',
	hobbies: ['Programar👨🏽‍💻', 'Ver F1🏎️', 'Montar Bicicleta🚴🏽‍♂️', 'GYM🏋🏽'],
	direccion: {
		calle: 'Av Cali',
		ciudad: 'Bogota',
		barrio: 'Las Flores',
		numeroApto: ['514', '201', '211', '1013', '712']
	},
	lenguajeFavorito(a) {
		if (a === 'JavaScript') {
			console.log(`El lenguaje favorito de juan es: ${a}`); // El lenguaje favorito de juan es: JavaScript
		} else if (a === 'React') {
			console.log(`La librería favorita de juan es: ${a}`); // La librería favorita de juan es: React
		}
	},
	texto() {
		return `Hola soy Juan y mido ${this.altura}`;
	}
};
prueba.lenguajeFavorito('JavaScript');
prueba.lenguajeFavorito('React');

prueba.telefono = '+57 320 555 55 55';
console.log(prueba.telefono); // +57 320 555 55 55 - Esto agrega una propiedad a el objeto ya creado

prueba.juegoFavorito = () => {  // Esto agrega un método al objeto ya creado
    console.log(`El juego favorito de ${prueba.nombre} es Valorant`) /* El juego favorito de Juan es Valorant 
                                                                        undefined*/
}
prueba.juegoFavorito()
console.log(prueba.juegoFavorito()); /* El juego favorito de Juan es Valorant - Igual lo va a renderizar bien pero 
                                        cuidado por que arroja un undefined también */

// 1. Para borrar propiedades y métodos se usa la palabra reservada delete, funciona igual para ambos casos
console.log(prueba); // En este CLG aun se renderiza la propiedad telefono
delete prueba.telefono
console.log(prueba.telefono); // undefined - Esto borra la propiedad del objeto
console.log(prueba); // Aquí ya después del delete desaparece la propiedad telefono
