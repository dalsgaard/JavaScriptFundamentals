
var _ = {};

_.once = function(f) {
  var func = f;
  return function() {
    if (func !== null) {
      func();
    }
    func = null;
  };
};

var g = function() {
  console.log('Hurray!');
};

var h = _.once(g);

h();
h();
