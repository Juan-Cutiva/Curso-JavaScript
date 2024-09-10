function Persona(nombre, apellido, edad) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
}

const juan = new Persona('Juan', 'Cutiva', 17);
console.log(juan);   /* Persona {
                            nombre: 'Juan',
                            apellido: 'Cutiva',
                            edad: 17,
                        } */
console.log(juan.edad); // 17

const miguel = new Persona('Miguel', 'Hernandez', 16);
console.log(miguel); /* Persona {
                            nombre: 'Miguel',
                            apellido: 'Hernandez',
                            edad: 16,
                        } */
console.log(miguel.nombre); // Miguel

Persona.prototype.telefono = '+57 320 555 5555'; /* Asi se le asigna una nueva propiedad al constructor, pero no directamente,
                                                    Sino al Prototype del constructor la cual permite compartir y/o 
                                                    heredar propiedades y/o métodos, pero de igual manera cuando un nuevo 
                                                    objeto se este creando apartir del constructor, este va a poder 
                                                    acceder a las propiedades del prototype, en este caso cualquier nuevo
                                                    objeto va a poder acceder a 'telefono' */

console.log(miguel); /* Persona {
                            nombre: 'Miguel',
                            apellido: 'Hernandez',
                            edad: 16,
                            __proto__: {
                                telefono: '+57 320 555 5555',
                                constructor: ƒ Persona()
                            }
                        } */
console.log(`El telefono de ${miguel.nombre} es ${miguel.telefono}`); // El telefono de Miguel es +57 320 555 5555
console.log(`El telefono de ${juan.nombre} es ${juan.telefono}`); // El telefono de Juan es +57 320 555 5555

miguel.nacionalidad = 'Colombiana'; // Asi se le asigna una nueva propiedad a un solo objeto en especifico
console.log(`Miguel es de nacionalidad ${miguel.nacionalidad}`); // Miguel es de nacionalidad Colombiana

// Para agregar un método a la función constructora
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}  y tengo ${this.edad}`)
}

// Asi se puede llamar el método
juan.saludar(); // Hola, me llamo Juan Cutiva  y tengo 17
miguel.saludar(); // Hola, me llamo Miguel Hernandez  y tengo 16

console.log(miguel); /* Persona {
                            nombre: 'Miguel',
                            apellido: 'Hernandez',
                            edad: 16,
                            __proto__: {
                                telefono: '+57 320 555 5555',
                                saludar: ƒ (),
                                constructor: ƒ Persona()
                            }
                        } */