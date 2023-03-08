/* 
const name = 'Lucas'
const obj = { name }
const newObj = { ...obj }

console.log(`Esse objeto ${newObj.name} foi convertido pelo Babel! ʕ•́ᴥ•̀ʔっ`) */

class Person {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }
}

const lucas = new Person('Lucas', 'Smaniotto')

console.log(`Esse objeto ${lucas.name.toLowerCase()} foi convertido pelo Babel! ʕ•́ᴥ•̀ʔっ`)