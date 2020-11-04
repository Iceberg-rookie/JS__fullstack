Person.prototype.lastName = 'Liu'

function Person(name) {
  this.name = name
}

var person = new Person('zhipeng')
// console.log(person.lastName);

// person.lastName = 'Wang' // 没有改动原型属性，只是在自己的对象中添加了lastName属性
// console.log(person.lastName);
// console.log(person);


// delete Person.prototype.lastName
// console.log(Person.prototype.lastName);


// function Bus() {

// }

// Car.prototype = {
//   constructor: Bus
// }
function Car() {

}
var car = new Car()

console.log(Car.prototype);  // function Car() {}
// constructor 指向的是Car(),目的是让Car()构造出来的对象想要找到它自己的来历时能找到
// car.constructor
console.log(car.constructor);