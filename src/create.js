
var foo = {
  a: function() {
    console.log('Foo!');
  }
};

var create = function(proto) {
  var F = function() {};
  F.prototype = proto;
  return new F();
};

var bar = create(foo);