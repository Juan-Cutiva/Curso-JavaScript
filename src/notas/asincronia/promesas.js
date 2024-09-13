// Estados de las promesas
/* 
1. Pendiente (pending)
Esta en pendiente por que se va a empezar a generar el promesa
*/
/* 
2. Cumplida (fulfilled)
Este es cuando la promesa se resuelva
*/
/* 
3. Rechazada (rejected)
Es cuando la promesa se no resolvió
*/

// Tipos de callback en las promesas

/* 
1. Resolve
Es cuando la promesa se resuelve de manera satisfactoria
*/
/* 
2. Reject
Es cuando la promesa no se puede resolver
*/

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		let operationSuccessful = true;
		if (operationSuccessful) {
			resolve('La operación se realizó con éxito');
		} else {
			reject('La operación no se pudo realizar');
		}
	}, 2000);
});

promise
    .then((message) => console.log(message))
    .catch((error) => console.error(error));