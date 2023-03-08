export default (name, surname, age) => {
    return {
        name: name,
        surname: surname,
        age: age,

        showDetails() {
            console.log(`Nome: ${this.name}\nSobrenome: ${this.surname}\nIdade: ${this.age}`);
        }
    }
}

/* 
export default function createGorillazMember(name, surname, age) {
    return {
        name: name,
        surname: surname,
        age: age,

        showDetails() {
            console.log(`Nome: ${this.name}\nSobrenome: ${this.surname}\nIdade: ${this.age}`);
        }
    }
}
*/