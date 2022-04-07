function Animal(name) {
  this.name = name
}

Animal.prototype.printName = function () {
  console.log(this.name)
}

let duck = new Animal('duck')
duck.printName()
