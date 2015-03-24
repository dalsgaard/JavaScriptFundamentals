
var foo = {
  a: 5
};

var Bar = function() {};
Bar.prototype = foo;

var bar = new Bar();
bar.a = 7;

console.log(bar.a);
console.log(bar.hasOwnProperty('a'));
