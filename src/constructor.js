
var Foo = function Foo() {};
var Bar = function Bar() {};

var foo = new Foo();
foo.constructor = Bar;
console.log(foo.constructor);
console.log(foo instanceof Bar);
