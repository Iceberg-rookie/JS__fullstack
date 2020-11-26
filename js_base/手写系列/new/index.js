Person.prototype.say = function() {
  console.log('hahaha');
}
function Person (name, age) {
  this.name = name
  this.age = age
}

let person = new Person('小敏', '18')
// console.log(person);
person.say()

// function myNew() {
//   let obj = {}

//   return obj
// }

// let person = myNew(Person, '小敏')
// console.log(person);