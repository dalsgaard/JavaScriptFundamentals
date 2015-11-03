console.log('forEach');
function forEach(list, callback) {
  for (var i = 0; i < list.length; i++) {
    callback(list[i]);
  }
}
forEach([1, 2, 3, 4], function (element) {
  console.log(element);
});
console.log('map');
function map(list, callback) {
  var res = [];
  forEach(list, function (e) {
    res.push(callback(e));
  });
  return res;
}
var list = map([1, 2, 3, 4], function (element) {
  return element * 2;
});
console.log(list);

console.log('negate');
function negate(f) {
  return function () {
    return !f.apply(undefined, arguments)
  };
}
var n = negate(function (a, b) {
  return a == b;
});
console.log(n('foo', 'foo'));

console.log('once');
function once(f) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      f();
    }
  }
}
var f = once(function () {
  console.log('You will see this only once!');
});
f();
f();

console.log('memorize');
function memorize(f) {
  var data;
  return function () {
    data = data ? data : f();
    return data;
  }
}
var f = memorize(function () {
  return Date.now();
});
console.log(f());
console.log(f());
