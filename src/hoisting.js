
var a = 7;

function foo() {
  a = 5;
  console.log(a);
  if (false) {
    //var a;
  }
}

foo();
console.log(a);
