const usersDatabase = [
	{ username: 'andres', password: 123 },
	{ username: 'caro', password: 456 },
	{ username: 'mariana', password: 789 }
];
const usersTimeline = [
	{ username: 'Estefany', timeline: 'Me encanta Javascript!' },
	{ username: 'Oscar', timeline: 'Developer es lo mejor!' },
	{ username: 'Mariana', timeline: 'A mi me gusta más el café que el té' },
	{ username: 'Andres', timeline: 'Yo hoy no quiero trabajar' }
];

var botonEnviar = document.getElementById('botonEnviar');
botonEnviar.addEventListener('click', ejecutar);

function ejecutar() {
	username();
	password();
	usuarioExistente(username(), password())
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
		if(usersDatabase[i].username === username && usersDatabase[i].password === password){
			document.querySelector('#text').innerHTML = `
				<h1 class="text-green-600">Tu username es ${username}</h1>
				<h1 class="text-green-600">Tu password es ${password}</h1>`;
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
	}
}
