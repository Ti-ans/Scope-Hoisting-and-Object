function sumFunc(a = 1, b = 3) {
    return a + b
}

let sayHello = function() {
    return 'Hello World'
}

var mobil = ['a', 'b', 'c']
var buah = new Array('a', 'b', 'c')

const a = 10
let b = 5

a = 15
b = 10

// object literal
var person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    perkenalan: function() {
        return 'Hello my name is ${this.firstName} ${this.lastName}'
    }
}

let mobil = {}
mobil.nama = 'BMW'
mobil.warna = 'Biru'

// new keyword
const person = new Object()
person.firstName = 'John'
person.lastName = 'Doe'

// accessing object properties
console.log(person.age);
console.log(person["firstName"]);
console.log(person.perkenalan());