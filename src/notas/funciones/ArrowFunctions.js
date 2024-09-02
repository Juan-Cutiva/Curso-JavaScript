const greeting = function (name) {
	return `Hi, ${name}`;
};

// Arrow function - Explicit return
const newGreeting = (name) => {
	return `Hi, ${name}`;
};

//Arrow function - Implicit return - Hace el return de manera automática
const greetingImplicit = (name) => `Hi, ${name}`;
console.log(greetingImplicit('pepe')); // "Hi, pepe"

const newGreetingImplicit = (name, lastName, age) => `Hi, I'm ${name} ${lastName} and I'm ${age} years old.`;
console.log(newGreetingImplicit('Pepe', 'Lopez', 30)); // "Hi, I'm Pepe Lopez and I'm 30 years old."

// Vinculación léxica
const fictionalCharacter = {
    name: 'Uncle Ben',
    traditionalFunction: function(message){console.log(`${this.name} says: ${message}`)},
    arrowFunction: (message) => { console.log(`${this.name} says: ${message}`) }
}

fictionalCharacter.traditionalFunction('With great power comes great responsibility.') // 'Uncle Ben says: With great power comes great responsibility.'
fictionalCharacter.arrowFunction('Beware of Doctor Octopus.') // 'undefined says: Beware of Doctor Octopus.'