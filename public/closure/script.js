
function makeClosure () {
  var a = 0;
  var closure = function (b) {
    a += b;
    return a;
  };
  return closure;
}

var closure = makeClosure();
console.log(closure(7));
console.log(closure(5));

function makeClosures () {
  var a = 0;
  var add1 = function () {
    a += 1;
    return a;
  };
  var add2 = function () {
    a += 2;
    return a;
  };
  return [add1, add2];
}

var closures = makeClosures();
var add1 = closures[0];
var add2 = closures[1];

console.log(add1());
console.log(add2());
console.log(add1());
