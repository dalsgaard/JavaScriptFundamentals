
function filter(list, callback) {
  var a = [];
  for (var i = 0; i < list.length; i++) {
    var e = list[i];
    var b = callback(e);
    if (b) {
      a.push(e);
    }
  }
  return a;
}

function negate(f) {
  return function (p) {
    return !f(p);
  };
}

function even(a) {
  return a % 2 === 0;
}

var odd = negate(even);

var l = filter([1,2,3,4,5,6], negate(even));
console.log(l);
