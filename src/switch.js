
var a = 42;

switch (true) {
  case a == 2:
    console.log(2);
    break;
  case a > 40 && a < 50:
    console.log(42);
    break;
  case a < 100:
    console.log(100);
    break;
  default:
    console.log('default');
}
