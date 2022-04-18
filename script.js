// Prior to ES6, to create a class - use prototypes similar to this:

// function Animal(name) {
//   this.name = name
// }

// Animal.prototype.printName = function () {
//   console.log(this.name)
// }

// let duck = new Animal('duck')
// duck.printName()

// ES6 class keyword

class Animal {
  constructor(name) {
    this.name = name
  }

  printName() {
    console.log(this.name)
  }
}

let duck = new Animal('duck')
duck.printName()

console.log(typeof Animal)
