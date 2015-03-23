
var foo = {
  bar: 5,
  baz: function() {
    var that = this;
    setTimeout(function() {
      console.log(that.bar);
    }, 10);
  }
};

foo.baz();