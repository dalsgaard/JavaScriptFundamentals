
var proto = {};
proto.a = 7;

var Foo = function() {};
Foo.prototype = proto;

var foo = new Foo();

var Baz = function() {};
Baz.prototype.b = 42;

Foo.prototype = new Baz();
Foo.prototype.a = 99;
Foo.prototype.b = 0;

var bar = new Foo();

delete Foo.prototype.b;

console.log(foo.a);
console.log(bar.a);
console.log(bar.b);

console.log(bar instanceof Baz);
