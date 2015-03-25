
var foo = {
  a: 1,
  b: 2,
  c:3
};

for (var p in foo) {
  console.log(p, foo[p]);
}

var bar = [1,2,3,4];
bar.a = 8;
for (var k in bar) {
  if (bar.hasOwnProperty(k)) {
    console.log(k, bar[k]);
  }
}

var baz = Object.create(foo);
baz.d = 5;
baz.a = 6;
for (var q in baz) {
  console.log(q, baz[q]);
}
