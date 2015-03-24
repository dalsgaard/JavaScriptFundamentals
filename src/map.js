var _ = {};

_.map = function(list, callback) {
  var newList = [];
  for (var i = 0; i < list.length; i++) {
    newList[i] = callback(list[i]);
  }
  return newList;
};

var list = [1, 3, 6, 9];

var callback = function(a) {
  return a * 2;
};

var res = _.map(list, callback);

console.dir(res);