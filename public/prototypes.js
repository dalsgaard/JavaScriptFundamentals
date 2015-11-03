var Foo = function(name) {
  this._name = name;
};
Foo.prototype.bar = function () {
  console.log('Hellooo ' + this._name);
};

var Bar = function(name) {
  if (name) {
    this._name = name;
  }
};
var foo = new Foo('foo');
Bar.prototype = foo;

var b1 = new Bar('bar');
b1.bar();
var b2 = new Bar();
b2.bar();
