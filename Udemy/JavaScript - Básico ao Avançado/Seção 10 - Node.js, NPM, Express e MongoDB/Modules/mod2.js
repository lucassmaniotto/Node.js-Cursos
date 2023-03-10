class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    sayMyName() {
        return this.name === 'Walter' && this.lastName === 'White' ? 'Heisenberg' : `${this.name} ${this.lastName}`;
    }
}

exports.Person = Person;