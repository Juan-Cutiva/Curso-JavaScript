function i(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
var numeroSecreto = i(0, 11);

const numeroJugador = parseInt(prompt('Adivina el numero secreto entre 0 y  10'));
console.log(numeroJugador)

function resultado() {
	if (numeroJugador >= '0' && numeroJugador <= '10') {
		if (numeroJugador === numeroSecreto) {
			const r = 'Ganaste';
			return r;
		} else {
			const r = 'Perdiste';
			return r;
		}
	} else {
		const r = 'El numero que ingresaste no es valido, Vuelve a intentar';
		return r;
	}
}

function numeroJugadorResultado(){
    if (resultado() === 'El numero que ingresaste no es valido, Vuelve a intentar'){
        const r = 'El numero que ingreso el jugador es incorrecto'
        return r
    } else if(resultado() === 'Ganaste' || resultado() === 'Perdiste'){
        const r = `El numero Jugador es ${numeroJugador}`
        return r
    }
}

document.querySelector('#prueba').innerHTML = `
<h1>El numero secreto es ${numeroSecreto}</h1>
<h1>${numeroJugadorResultado()}</h1>
<h1>${resultado()}</h1>
`;
