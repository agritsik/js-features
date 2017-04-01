/**
 * Inheritance and the prototype chain
 *
 * Useful links:
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 * http://stackoverflow.com/a/9959753
 */


/**
 * __proto__ is the actual object that is used in the lookup chain to resolve methods,
 * prototype is the object that is used to build __proto__ when you create an object with new
 */
function ParentConstructor() {
}
var myParent = new ParentConstructor();

// 1. object doesn't have prototype
console.log(myParent.prototype == undefined);
// 2. function constructor puts prototype object to the object.__proto__
console.log(myParent.__proto__ == ParentConstructor.prototype);


function ChildConstructor() {
}
ChildConstructor.prototype =  Object.create(ParentConstructor.prototype);
ChildConstructor.prototype.constructor = ChildConstructor;

var myChild = new ChildConstructor();
console.log(myChild.__proto__ == ChildConstructor.prototype);