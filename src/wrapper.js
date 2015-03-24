
var foo = {
  a: function() {
    console.log(this.c);
  },
  c: 'Foo!'
};

var create = function(proto) {
  var F = function() {};
  F.prototype = proto;
  var a = proto.a;
  proto.a = function() {
    a.call(this);
    console.log('Bar!');
  };
  return new F();
};

var bar = create(foo);
bar.a();
