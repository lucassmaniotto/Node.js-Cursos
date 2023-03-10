const module1 = require('./mod1')
const sayMyName = module1.sayMyName;

console.log(sayMyName(module1.name, module1.lastName));
console.log(sayMyName('Jesse', 'Pinkman'));

console.log("--------------------");

const { Person } = require('./mod2');

const walter = new Person('Walter', 'White');
const jesse = new Person('Jesse', 'Pinkman');

console.log(walter.sayMyName());
console.log(jesse.sayMyName());

console.log("--------------------");

const multiply = require('./mod3');
console.log(multiply(3,3));

console.log("--------------------");
const path = require('path');

console.log(path.resolve(__dirname, 'app.js'));