
var kim = {
  name: "Kim",
  hello: function() {
    console.log("Hello, I am " + this.name);
  }
};

var foo = kim.hello;

foo();
kim.hello();