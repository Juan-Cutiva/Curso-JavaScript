// Capacidades que tienen las funciones al igual que otros objetos

// Pasar funciones como argumento  -> CallBack
function a() {}
function b(a) {}
b(a);

// Ejemplo CallBack
function a(p1) {
	return p1 * 3;
}

function b(p1) {
	return p1 * 7;
}

function c(p1, p2, f) {
	return f(p1) + p1 - p2;
}

console.log(`${a(4)}`);       // 12
console.log(`${b(4)}`);       // 28
console.log(`${c(4, 1, a)}`); // 15
console.log(`${c(4, 1, b)}`); // 31

// Retornar funciones
function a() {
	function b() {}
	return b;
}

// Asignar funciones a variables -> Expresión de función
const a = function () {};

// Tener propiedades y métodos
function a() {}
const obj = {};
a.call(abj);

// Anidar funciones -> Nested Functions
function a() {
	function b() {
		function c() {}
		c();
	}
	b();
}
a();

// Almacenar funciones en objetos
const rocket = {
	name: 'Falcon9',
	launchMessage: function launchMessage() {
		console.log('Rocket launched 🚀');
	}
};
rocket.launchMessage();
