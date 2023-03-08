import { name as murdock, niccals, age, sum } from './module1';
import { noodle, surname, age as age2, Person } from './module2';
import gorillazMember from './module3';

const name = noodle;
const person = new Person(name, surname, age2);
sum(2, 3);

console.log(`Nome: ${murdock}\nSobrenome: ${niccals}\nIdade: ${age}`);
console.log(`Nome: ${person.name}\nSobrenome: ${person.surname}\nIdade: ${person.age}`);
gorillazMember('Stuart (2D)', 'Harold Pot', 44).showDetails();

/* 
import { name, surname, age, sum } from './module1';

// const name = '2-D'; => Error: Identifier 'name' has already been declared

console.log(name, surname, age); => surname === undefined
console.log(sum(2, 3)); 
*/