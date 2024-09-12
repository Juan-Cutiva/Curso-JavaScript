const usersDatabase = [
	{ username: 'andres', password: 123, gender: 'male' },
	{ username: 'caro', password: 456, gender: 'female' },
	{ username: 'mariana', password: 789, gender: 'female' }
];
const usersTimeline = [
	{ username: 'Estefany', timeline: 'Me encanta Javascript!' },
	{ username: 'Oscar', timeline: 'Developer es lo mejor!' },
	{ username: 'Mariana', timeline: 'A mi me gusta más el café que el té' },
	{ username: 'Andres', timeline: 'Yo hoy no quiero trabajar' }
];

var botonEnviar = document.getElementById('botonEnviar');
botonEnviar.addEventListener('click', ejecutar);

var resultUser = ''

function ejecutar() {
	username();
	password();
	usuarioExistente(username(), password())
	timeLine()
}

function username() {
	var username = document.getElementById('username').value;
	return username;
}
function password() {
	var password = document.getElementById('password').value;
	return Number(password);
}


function usuarioExistente(username, password){
	for (let i = 0; i < usersDatabase.length; i++) {
		const gender = usersDatabase[i].gender === 'male' ? 'Bienvenido' : '' || usersDatabase[i].gender === 'female' ? 'Bienvenida' : ''
		if(usersDatabase[i].username === username && usersDatabase[i].password === password){
			document.querySelector('#text').innerHTML = `
				<h1 class="text-green-600">${gender} ${username}</h1>
				<h1 class="text-green-600">${timeLine}</h1>`;
			break;
		}
		else if (username === '' || password === 0 || ''){
			document.querySelector('#text').innerHTML = `
			<h1 class="text-red-600">Ingresa tu Usuario y Contraseña completos</h1>`;
			break;
		}
		else if ((password !== Number(password)) === true){
			document.querySelector('#text').innerHTML = `
			<h1 class="text-red-600">Solo se pueden ingresar numeros en la Contraseña</h1>`;
		}
		else if(usersDatabase[i].username === username && usersDatabase[i].password !== password){
			document.querySelector('#text').innerHTML = `
			<h1 class="text-red-600">El usuario o la contraseña son incorrectos</h1>`;
			break;
		}
		else if(usersDatabase[i].username !== username && usersDatabase[i].password !== password){
			document.querySelector('#text').innerHTML = `
			<h1 class="text-red-600">Usuario no existe</h1>`;
		}
	} return username
}

function timeLine(){
	for (let i = 0; i < usersTimeline.length; i++) {
		const element = usersTimeline[i].username.toLowerCase();
		if (element == usuarioExistente(username(), password()).toLowerCase()){
			console.log('a');
			return usersTimeline[i].timeline
		}
	}
}