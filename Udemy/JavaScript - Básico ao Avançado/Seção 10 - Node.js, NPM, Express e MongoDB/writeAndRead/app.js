const path = require('path');
const filePath = path.resolve(__dirname, 'app.json');
/* const write = require('./write'); */
const read = require('./read');

/* 
    const people = [
        { name: 'John', age: 20, city: 'New York' },
        { name: 'Mary', age: 30, city: 'London' },
        { name: 'Pierre', age: 40, city: 'Paris' },
        { name: 'Kimiko', age: 50, city: 'Tokyo'},
        { name: 'Paulo', age: 60, city: 'Rio de Janeiro'}
    ]

    const peopleJSON = JSON.stringify(people, '', 2);

    write(filePath, peopleJSON); 
*/

async function readFile(path) {
    const data = await read(path);
    renderData(data);
}

function renderData(data) {
    const people = JSON.parse(data);
    people.forEach(person => {
        console.log(`Nome: ${person.name}\nIdade: ${person.age}\nCidade: ${person.city}\n`);
    });
}

readFile(filePath);