// Schönfinkelisation

function add(a, b) {
  return a + b;
}

function curry(func, a) {
  return function(b) {
    return func(a, b);
  };
}

var add3 = curry(add, 3);

console.log(add3(4));
