let string = 'Este es un string';
let string2 = 'Este es un string mas largo';
var result = string.length + string2.length;
if (result === 44) {
	console.log('el resultado es igual a 44');
} else if (result > 30) {
	console.log('el resultado es mayor de 30');
} else if (result < 30) {
	console.log('el resultado es menor a 30');
}
console.log(string.length);
console.log(string.toUpperCase());
console.log(string.substring(0, 4).toLowerCase());
