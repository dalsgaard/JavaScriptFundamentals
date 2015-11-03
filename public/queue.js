var Queue = function () { };
Queue.prototype.size = function () {
  return this._list.length;
};
Queue.prototype.push = function (elem) {
  this._list.push(elem);
};

var LIFO = function () {
  this._list = [];
};
LIFO.prototype = new Queue();
LIFO.prototype.pull = function () {
  return this._list.pop();
};

var FIFO = function () {
  this._list = [];
};
FIFO.prototype = new Queue();
FIFO.prototype.pull = function () {
  return this._list.shift();
};

var lifo = new LIFO();
var fifo = new FIFO();
