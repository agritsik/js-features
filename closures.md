# Closures

## Lexical Scope

Lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Nested functions have access to variables declared in their outer scope.

```javascript
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }
  displayName();    
}
init();
```

When you invoke a function that defines local variables, these variables are saved on the **scope object**.

This concept of scope object is very different from, say, C or C++, where local variables are stored on stack. In JavaScript, scope objects are allocated in heap instead (or at least they behave like this), so they might stay allocated even if function already returned. 

## Closures

**Closure** is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

When the function is invoked, new scope object is created, which keeps local variables as well as its argument values. This new scope object inherits from the scope object referenced by the function being invoked.

When function is invoked, current scope chain is not copied for this function: the scope chain is just augmented with new scope object, and when any scope object in the chain is modified by any function, this change is immediately observable by all functions that have this scope object in their scope chains.

## Module pattern

JavaScript does not provide a native way of doing this, but it is possible to emulate private methods using closures.

Private methods aren't just useful for restricting access to code: they also provide a powerful way of managing your global namespace, keeping non-essential methods from cluttering up the public interface to your code.

```javascriot
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};

var counter1 = makeCounter();
var counter2 = makeCounter();
counter1.increment();
alert(counter1.value()); /* Alerts 1 */
alert(counter2.value()); /* Alerts 0 */
```

## Useful links
1. https://developer.mozilla.org/en/docs/Web/JavaScript/Closures
1. https://github.com/agritsik/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch5.md
1. https://dmitryfrank.com/articles/js_closures

