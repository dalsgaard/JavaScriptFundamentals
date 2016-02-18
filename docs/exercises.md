# Exercises

## Functional Programming

### forEach

Takes a list and a callback as parameters, and calls the callback once
for every element in the list.

```js
function forEach(list, callback) {

}
forEach([1, 2, 3, 4], function (element) {

});
```

### map

Takes a list and a callback as parameters, and returns a new list containing
the results of calling the callback for every element in the list.

```js
function map(list, callback) {

}
var list = map([1, 2, 3, 4], function (element) {
  var res;
  // assign to res.
  return res;
});
```

### negate

Takes a function as a parameter, and returns a function that negates the result
of calling the original function (logical not).

```js
function negate(f) {
  return function (p) {

  };
}

function even(a) {
  return a % 2 === 0;
}

var odd = negate(even);

odd(3); // => true
```

### once

Takes a function as a parameter, and returns a function that makes sure that
the original function is only called once.

```js
function once(f) {
  // remember closures?
  return function () {

  }
}
var f = once(function () {
  console.log('You will see this only once!');
});
f();
f();
```

### memorize

Takes a function as a parameter, and returns a function that makes sure that
the original function is only called once and that returns the original result
every time.

```js
function memorize(f) {
  // remember closures?
  return function () {

  }
}
var f = memorize(function () {
  return Date.now();
});
console.log(f());
console.log(f());
```
