class Personas {
    constructor(nombre, edad, direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`)
    }
}

const persona1 = new Personas('Juan', 17, 'Av Cali')
console.log(persona1);/* Persona {
                            nombre: 'Juan',
                            edad: 17,
                            direccion: 'Av Cali',
                            __proto__: {
                                constructor: ƒ Persona(),
                                saludar: ƒ saludar()
                            }
                        } */
console.log(persona1.saludar()); // Hola mi nombre es Juan y tengo 17

const persona2 = new Personas('Miguel', 16, 'Av tintal')
console.log(persona2.saludar()) // Hola mi nombre es Miguel y tengo 16
console.log(persona2);/* Persona {
                            nombre: 'Miguel',
                            edad: 16,
                            direccion: 'Av tintal',
                            __proto__: {
                                constructor: ƒ Persona(),
                                saludar: ƒ saludar()
                            }
                        } */
