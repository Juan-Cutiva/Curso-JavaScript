function i(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
var numeroSecreto = i(0, 11);

var botonEnviar = document.getElementById('enviar');
var botonReiniciar = document.getElementById('reiniciar');

botonEnviar.addEventListener('click', recibir);
botonEnviar.addEventListener('click', resultado);
botonEnviar.addEventListener('click', print);
botonEnviar.addEventListener('click', numeroJugadorResultado);
botonReiniciar.addEventListener('click', reiniciar);

function reiniciar() {
	location.reload();
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
	} else if (recibir() < 0 || recibir() > 10) {
		const r = 'Solo se pueden ingresar numero entre el 0 y el 10, vuelve a intentar, Perdiste';
		return r;
	} else {
		const r = 'Debes ingresar un numero, no letras o símbolos';
		return r;
	}
}

// function numeroJugadorResultado() {
// 	if (resultado() === 'Debes ingresar un numero, no letras o símbolos') {
// 		const r = 'El numero que ingreso el jugador es incorrecto';
// 		return r;
// 	} else if (resultado() === 'Solo se pueden ingresar numero entre el 0 y el 10, vuelve a intentar, Perdiste') {
// 		const r = 'El numero que ingreso el jugador es incorrecto';
// 		return r;
// 	} else if (resultado() === 'Ganaste' || resultado() === 'Perdiste') {
// 		const r = `El numero Jugador del es ${recibir()}`;
// 		return r;
// 	}
// }


// La función de abajo funciona igual que la de arriba, la diferencia es que una se hizo con IF, ELSE IF, y el otro con Switch

function numeroJugadorResultado(){
	switch(resultado()){
		case "Debes ingresar un numero, no letras o símbolos":
			var r = "El numero que ingreso el jugador es incorrecto"
			return r
		case "Solo se pueden ingresar numero entre el 0 y el 10, vuelve a intentar, Perdiste":
			var r = "El numero que ingreso el jugador es incorrecto"
			return r
		case "Ganaste":
		case "Perdiste":
			var r = `El numero Jugador del es ${recibir()}`
			return r
	}
}

function styles() {
	botonEnviar.disabled = true;
	botonEnviar.style.color = '#b6bbc5';
	botonEnviar.style.backgroundColor = '#0e6077';
	botonReiniciar.style.display = 'flex';
	botonReiniciar.style.justifyContent = 'center';
}

function print() {
	if (resultado() === 'Solo se pueden ingresar numero entre el 0 y el 10, vuelve a intentar, Perdiste') {
		styles();
		const color = resultado() == 'Ganaste' ? 'bg-green-500' : 'bg-red-500';
		document.querySelector('#result').innerHTML = `
		<h1 class="w-[90%]">Solo se pueden ingresar numero entre el 0 y el 10, vuelve a intentar.</h1>
		<h1 class='w-[30%] rounded-lg ${color}'>Perdiste</h1>`;
	} else {
		styles();
		const color = resultado() == 'Ganaste' ? 'bg-green-500' : 'bg-red-500';
		document.querySelector('#result').innerHTML = `
		<h1>El numero secreto es ${numeroSecreto}</h1>
		<h1>${numeroJugadorResultado()}</h1>
		<h1 class='w-[30%] rounded-lg ${color}'>${resultado()}</h1>`;
	}
}
