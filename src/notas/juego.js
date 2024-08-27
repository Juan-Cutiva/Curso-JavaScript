function i(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
};
var numeroSecreto = i(0, 11);

const numeroJugador = parseInt(prompt('Adivina el numero secreto entre 0 y  10'));

if(numeroJugador >= '0' && numeroJugador <= '10'){
    console.log(`Este fue el numero que escogiste  ${numeroJugador}`)
    if(numeroJugador === numeroSecreto){
        console.log('Ganaste')
    }else{
        console.log('Perdiste')
    }
}else{
    console.log('El numero que ingresaste no es valido, Vuelve a intentar')
}