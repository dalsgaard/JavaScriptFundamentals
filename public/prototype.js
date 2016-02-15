var Foo = function() {};
Foo.prototype.baz = 5;

var Bar = function() {};
Bar.prototype = new Foo();

var bar = new Bar();
console.log(bar.baz);
