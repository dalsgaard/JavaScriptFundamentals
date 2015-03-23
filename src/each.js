
var foo = {};

foo.each = function(list, callback) {
  for (var i = 0; i < list.length; i++) {
    callback(list[i]);
  }
};

foo.each([1,2,4,8], function (e) {
  console.log(e * e);
});

