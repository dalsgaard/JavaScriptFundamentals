
var foo = {
  bar: 5,
  baz: function() {
    setTimeout(function() {
      console.log(this.bar);
    }.bind(this), 10);
  }
};

foo.baz();