// Prior to ES6, to create a class - use prototypes similar to this:

// function Animal(name) {
//   this.name = name
// }

// Animal.prototype.printName = function () {
//   console.log(this.name)
// }

// let duck = new Animal('duck')
// duck.printName()

// ------------------------

// ES6 'CLASS' KEYWORD

// class Animal {
//   constructor(name) {
//     this.name = name
//   }

//   printName() {
//     console.log(this.name)
//   }
// }

// let duck = new Animal('duck')
// duck.printName()

// console.log(typeof Animal)

// ------------------------

// 'EXTENDS' KEYWORD

class Parent {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}
// assume you needed to create a subclass named Child that extends the functionality available in the Parent class:

class Child extends Parent {
  constructor(name) {
    super(name)
  }

  getMessage() {
    return 'Hello ' + super.getName()
  }
}

let someone = new Child('person')
console.log(someone.getMessage())
