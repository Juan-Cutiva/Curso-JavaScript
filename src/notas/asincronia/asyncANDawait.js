let resultadoNombres = null
async function fetchData(){
    try{
        let response = await fetch('https://rickandmortyapi.com/api/character');
        let data = await response.json();
        const element = data.results;
        for (let i = 0; i < element.length; i++) {
            let names = element[i].name;
            resultadoNombres = names
        }
    }catch(error){
        console.error('Error:', error);
    }
}
fetchData()

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (resultadoNombres === String(resultadoNombres)) {
			resolve(`La operación se realizó con éxito, Se recupero los nombres de la api`);
		} else {
			reject('La operación no se pudo realizar');
		}
	}, 1000);
});

promise
    .then((message) => console.log(message))
    .catch((error) => console.error(error));