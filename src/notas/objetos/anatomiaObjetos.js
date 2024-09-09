/* 
Los objetos son una estructura de datos la cual es:
    key : value
    propiedad : valor

Como se crea un objeto:
nombreObjeto {
    propiedad1 : valor1 ,
    propiedad2 : valor2 ,
	métodos
}
*/

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
	lenguajeFavorito: function (a) {
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
console.log(prueba.edad); // 17
console.log(prueba.hobbies); // ['Programar👨🏽‍💻', 'Ver F1🏎️', 'Montar Bicicleta🚴🏽‍♂️', 'GYM🏋🏽']

const reduce = prueba.direccion;
const resultado = `Juan vive en la ciudad de ${reduce.ciudad} en la ${reduce.calle} en el barrio ${reduce.barrio} en el Apartamento ${reduce.numeroApto[3]}`;
console.log(resultado); // Juan vive en la ciudad de Bogota en la Av Cali en el barrio Las Flores en el Apartamento 1013

console.log(prueba.direccion.numeroApto[2]); // 211
prueba.lenguajeFavorito('JavaScript');
prueba.lenguajeFavorito('React');
console.log(prueba.texto()); // Hola soy Juan y mido 1.70m
