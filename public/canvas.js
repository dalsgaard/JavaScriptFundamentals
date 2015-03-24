
document.addEventListener('DOMContentLoaded', function() {

  var canvas = document.getElementById('tutorial');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = "rgb(200,0,0)";
  ctx.lineWidth = 5;
  ctx.strokeStyle = 'black';
  ctx.moveTo(50, 50);
  ctx.lineTo(100, 100);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.strokeStyle = 'red';
  ctx.lineTo(100, 400);
  ctx.stroke();

});