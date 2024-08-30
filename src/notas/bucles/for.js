let list = ['eat', 'sleep', 'code', 'repeat'];
for (let i = 0; i < list.length; i++) {
	console.log(list[i]);
}

// For Of
// For Of sirve para arrays y strings

let canasta = ['manzana', 'pera', 'naranja', 'uva', 'sandia'];
console.log(canasta);
for (fruta of canasta) {
	console.log(fruta);
}


// For In  ---> para objetos numerables
// Propiedades = valor

const listaDeCompras = {
    manzana : 5,
    pera : 3,
    naranja : 2,
    uva : 1,
    mango: 1 
}
var fruta
for (fruta in listaDeCompras){
    console.log(fruta);
}

// En resumen para Array y String se usa el For Of
// Para Objetos se usa el For In

// Array = let canasta = ['manzana', 'pera', 'naranja', 'uva', 'sandia'];
// Objeto = const listaDeCompras = {
//             manzana : 5,
//             pera : 3,
//             naranja : 2,
//             uva : 1,
//             mango: 1 
//             }  
