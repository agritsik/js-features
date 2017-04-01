/**
 * JavaScript Factory Functions vs Constructor Functions vs Classes
 *
 * Useful links:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
 * https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e
 */



/**
 * A "constructor" in JavaScript is "just" a function
 * that happens to be called with the new operator.
 *
 * Note, that ES6 classes desugar to constructor functions.
 */
function UserConstructor() {
  console.log(`I'm userConstructor ` + this);

  // in case of forgetting `new`
  if (!(this instanceof UserConstructor)) {
    return new UserConstructor();
  }
}
UserConstructor.prototype.run = function () {
  console.log('Running...');
};

var userConstructor = new UserConstructor();
userConstructor.run();



/**
 * ECMAScript 5 introduced a new method: Object.create().
 * Calling this method creates a new object
 */
const userProto = {
  run: () => console.log('Running...')
};

function userFactory(){
  console.log(`I'm userFactory` + this);
  return Object.create(userProto);
}

var userInstance = userFactory();
userInstance.run();



/**
 * ECMAScript 2015 introduced a new set of keywords implementing classes.
 * Although these constructs look like those familiar to developers of class-based languages,
 * they are not the same. JavaScript remains prototype-based.
 */
class UserClass {
  constructor() {
    console.log(`I'm UserClass` + this);
  }

  run() {
    console.log('Running...');
  };
}

var userClass = new UserClass();
userClass.run();


