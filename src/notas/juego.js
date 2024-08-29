function i(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
var numeroSecreto = i(0, 11);
console.log(numeroSecreto);

var botonEnviar = document.getElementById('enviar');
var botonReiniciar = document.getElementById('reiniciar')

botonEnviar.addEventListener('click', recibir);
botonEnviar.addEventListener('click', resultado);
botonEnviar.addEventListener('click', h);
botonEnviar.addEventListener('click', numeroJugadorResultado);
botonReiniciar.addEventListener('click', reiniciar)

function reiniciar(){
	location.reload()
}

function recibir() {
	var numeroJugador = document.getElementById('texto').value;
	const r = numeroJugador;
	return Number(r);
}

function resultado() {
	if (recibir() >= 0 && recibir() <= 10) {
		if (recibir() == numeroSecreto) {
			const r = 'Ganaste';
			return r;
		} else {
			const r = 'Perdiste';
			return r;
		}
	} else if (recibir() <= 0 || recibir() >= 10) {
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
	} else if (
		resultado() === 'Solo se pueden ingresar numero entre el 0 y el 10, vuelve a intentar, Perdiste'
	) {
		const r = 'El numero que ingreso el jugador es incorrecto';
		return r;
	} else if (resultado() === 'Ganaste' || resultado() === 'Perdiste') {
		const r = `El numero Jugador del es ${recibir()}`;
		return r;
	}
}


function h() {
	const color = resultado() == "Ganaste" ? 'bg-green-500' : 'bg-red-500'
	botonReiniciar.style.display="flex"
	botonReiniciar.style.justifyContent="center"
	console.log(resultado());
	console.log(numeroJugadorResultado());
	document.querySelector('#result').innerHTML = `
<h1>El numero secreto es ${numeroSecreto}</h1>
<h1>${numeroJugadorResultado()}</h1>
<h1 class='w-[30%] rounded-lg ${color}'>${resultado()}</h1>`;
}
