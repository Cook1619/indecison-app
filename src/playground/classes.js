
class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name
        this.age = age
    }
    getGreeting(){
        return `Hi ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old!`
    }
}

const me = new Person('Tim', 30);

console.log(me.getGreeting(), me.getDescription())

const other =  new Person('Bill', 23);

console.log(other.getGreeting(), other.getDescription())
