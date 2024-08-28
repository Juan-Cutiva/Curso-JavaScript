function i(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
var numeroSecreto = i(0, 11);

const numeroJugador = parseInt(prompt('Adivina el numero secreto entre 0 y  10'));
console.log(numeroJugador);

function resultado() {
	if (numeroJugador >= '0' && numeroJugador <= '10') {
		if (numeroJugador === numeroSecreto) {
			const r = 'Ganaste';
			return r;
		} else {
			const r = 'Perdiste';
			return r;
		}
	} else if (numeroJugador <= '0' || numeroJugador >= '10') {
		const r = 'Solo se pueden ingresar numero entre el 0 y el 10, vuelve a intentar, Perdiste';
		return r;
	} else {
		const r = 'Debes ingresar un numero, no letras o símbolos';
		return r;
	}
}

function numeroJugadorResultado() {
	if (resultado() === 'Debes ingresar un numero, no letras o símbolos') {
		const r = 'El numero que ingreso el jugador es incorrecto';
		return r;
	} else if (resultado() === 'Solo se pueden ingresar numero entre el 0 y el 10, vuelve a intentar, Perdiste') {
		const r = 'El numero que ingreso el jugador es incorrecto';
		return r;
	} else if (resultado() === 'Ganaste' || resultado() === 'Perdiste') {
		const r = `El numero Jugador es ${numeroJugador}`;
		return r;
	}
}

document.querySelector('#prueba').innerHTML = `
<h1>El numero secreto es ${numeroSecreto}</h1>
<h1>${numeroJugadorResultado()}</h1>
<h1>${resultado()}</h1>
`;
