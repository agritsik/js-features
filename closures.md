# Closures

++Closure++ is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

When any JavaScript code is executing, it needs some place to store its local variables. Let's call this place as a ++scope object++ (some refer to it as a LexicalEnvironment). For example, when you invoke some function, and function defines local variables, these variables are saved on the scope object. You can think of it as a regular JavaScript object, with the notable difference that you can't refer to the whole object directly. You can only modify its properties, but you can't refer to the scope object itself.

This concept of scope object is very different from, say, C or C++, where local variables are stored on stack. In JavaScript, scope objects are allocated in heap instead (or at least they behave like this), so they might stay allocated even if function already returned. More on that later.

As you might expect, scope object might have parent. When the code tries to access some variable, interpreter looks for the property of current scope object. If the property doesn't exist, interpreter moves to the parent scope object, and looks there. And so on, until the value is found, or there's no more parent. Let's call this sequence of scope objects as a ++scope chain++.

```
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

## Useful links
https://developer.mozilla.org/en/docs/Web/JavaScript/Closures
https://github.com/agritsik/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch5.md
https://dmitryfrank.com/articles/js_closures

