const name = 'Walter';
const lastName = 'White';

const sayMyName = (name, lastName) => name === 'Walter' && lastName === 'White' ? 'Heisenberg' : `${name} ${lastName}`;

module.exports = { 
    name, 
    lastName, 
    sayMyName 
};

// console.log(module);