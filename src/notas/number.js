// Tipo Entero Y Decimal

const entero = 42;
const decimal = 3.1416;
console.log(typeof entero, typeof decimal);

// Notación Científica
const cientifico = 5e3;
console.log(typeof cientifico);

// Infinitos y Nan (Not a Number)
const infinito = Infinity;
const noEsUnNumero = NaN;
console.log(typeof infinito, typeof noEsUnNumero);

// Operaciones Aritméticas

//1. Suma, Resta, Multiplicación y Division
const suma = 3 + 4;
const resta = 3 - 4;
const multiplicacion = 3 * 4;
const division = 3 / 4;

//2. Modulo y Exponenciación
const modulo = 3 % 4;
const exponenciacion = 3 ** 4;

// Precision
const resultado = 0.1 + 0.2;
resultado; //0.300000000004 tipo number
resultado.toFixed(1); // '0.3' tipo string
resultado === 0.3; //false

//Operaciones Avanzadas
const raizCuadrada = Math.sqrt(20);
const valorAbsoluto = Math.abs(-7);
const aleatorio = Math.random();

function i(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

i(0, 11); //Cualquier numero random entre 0 y 10
