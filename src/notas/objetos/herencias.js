class Animal {
	constructor(nombre, tipo) {
		this.nombre = nombre;
		this.tipo = tipo;
	}
	emitirSonido() {
		console.log('El animal hace un sonido');
	}
}

class Perro extends Animal {
	constructor(nombre, tipo, raza) {
		super(nombre, tipo);
		this.raza = raza;
	}
	emitirSonido() {
		console.log(`${this.nombre} esta ladrando`);
	}
	correr() {
		console.log(`${this.nombre} corre alegre`);
	}
}
const lucas = new Perro('Lucas', 'perro', 'french poodle');
const gaia = new Perro('Gaia', 'perro', 'pastor alemán');
lucas.correr(); // Lucas corre alegre
gaia.emitirSonido(); // Gaia esta ladrando
console.log(lucas); /*  Perro {
                            nombre: 'Lucas',
                            tipo: 'perro',
                            raza: 'french poodle',
                            __proto__: {
                                constructor: ƒ Perro(),
                                emitirSonido: ƒ emitirSonido(),
                                correr: ƒ correr()
                            }
                        } */
console.log(gaia); /*   Perro {
                            nombre: 'Gaia',
                            tipo: 'perro',
                            raza: 'pastor alemán',
                            __proto__: {
                                constructor: ƒ Perro(),
                                emitirSonido: ƒ emitirSonido(),
                                correr: ƒ correr()
                            }
                        } */
