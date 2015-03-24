
var create = function(proto) {
  var F = function() {};
  F.prototype = proto;
  return new F();
};

document.addEventListener('DOMContentLoaded', function() {

  var canvas = document.getElementById('tutorial');
  var ctx = canvas.getContext('2d');

  var c = create(ctx);

  c.fillStyle = "rgb(200,0,0)";
  c.lineWidth = 5;
  c.strokeStyle = 'black';
  c.moveTo(50, 50);
  c.lineTo(100, 100);
  c.stroke();

  c.beginPath();
  c.moveTo(150, 150);
  c.strokeStyle = 'red';
  c.lineTo(100, 400);
  c.stroke();

});