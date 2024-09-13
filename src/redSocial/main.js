import { usersDatabase, usersTimeline } from './usersDatabase';

var botonEnviar = document.getElementById('botonEnviar');
botonEnviar.addEventListener('click', ejecutar);
var buttonEye = document.getElementById('buttonEye');
var inputPassword = document.getElementById('password');
buttonEye.addEventListener('click', seePassword);
buttonEye.addEventListener('click', changeEye);

var resultUser = '';
const img = document.getElementById('eye');

function ejecutar() {
	username();
	password();
	timeLine();
	usuarioExistente(username(), password(), resultUser);
}

function username() {
	var username = document.getElementById('username').value;
	return username;
}
function password() {
	var password = inputPassword.value;
	return Number(password);
}

function usuarioExistente(username, password, resultUser) {
	for (let i = 0; i < usersDatabase.length; i++) {
		const gender =
			usersDatabase[i].gender === 'male'
				? 'Bienvenido'
				: '' || usersDatabase[i].gender === 'female'
					? 'Bienvenida'
					: '';
		if (usersDatabase[i].username === username && usersDatabase[i].password === password) {
			document.querySelector('#text').innerHTML = `
				<h1 class="text-green-600">${gender} ${username}</h1>
				<h1 class="text-green-600">${resultUser}</h1>`;
			break;
		} else if (username === '' || password === 0 || '') {
			document.querySelector('#text').innerHTML = `
			<h1 class="text-red-600">Ingresa tu Usuario y Contraseña completos</h1>`;
			break;
		} else if ((password !== Number(password)) === true) {
			document.querySelector('#text').innerHTML = `
			<h1 class="text-red-600">Solo se pueden ingresar numeros en la Contraseña</h1>`;
		} else if (usersDatabase[i].username === username && usersDatabase[i].password !== password) {
			document.querySelector('#text').innerHTML = `
			<h1 class="text-red-600">El usuario o la contraseña son incorrectos</h1>`;
			break;
		} else if (usersDatabase[i].username !== username && usersDatabase[i].password !== password) {
			document.querySelector('#text').innerHTML = `
			<h1 class="text-red-600">Usuario no existe</h1>`;
		}
	}
	return username;
}

function timeLine() {
	for (let i = 0; i < usersTimeline.length; i++) {
		const element = usersTimeline[i].username.toLowerCase();
		if (element === usuarioExistente(username(), password()).toLowerCase()) {
			return (resultUser = usersTimeline[i].timeline);
		} else if (element !== usuarioExistente(username(), password()).toLowerCase()) {
			resultUser = 'Ten un buen dia';
		}
	}
}

function seePassword() {
	if (inputPassword.type == 'text') {
		inputPassword.type = 'password';
	} else if (inputPassword.type == 'password') {
		inputPassword.type = 'text';
	}
}

function changeEye(){
	if(inputPassword.type == 'text'){
		img.src = '/eye.svg';
	}else if (inputPassword.type == 'password'){
		img.scr = '/eye-off.svg';
	}
	console.log(inputPassword.type)
}
