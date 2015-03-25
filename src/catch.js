
function foo() {
  try {
    //throw 'foo';
    console.log('Foo!');
    return 42;
  } catch (e) {
    console.dir(e);
  } finally {
    console.log('Done!');
    throw 'bar';
  }
}

var a = foo();
console.log(a);
