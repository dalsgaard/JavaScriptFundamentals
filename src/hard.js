
function foo() {
  console.log(this.a);
}

var bar = { a: 5 };
var baz = function() {
  foo.call(bar);
};

bar.foo = baz;

bar.foo();

setTimeout(bar.foo, 50);