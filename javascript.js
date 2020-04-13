//Script for canvas1
var canvas1 = document.getElementById('canvas1');
var ctx1 = canvas1.getContext('2d');
ctx1.moveTo(0, 0);
ctx1.lineTo(100, 200);
ctx1.stroke();
console.log(ctx1);

//Script for canvas2
var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');
ctx2.beginPath();
ctx2.arc(95, 50, 40, 0, 2 * Math.PI);
ctx2.stroke();
console.log(ctx2);

//Script for specialCanvas
var specialCanvas = document.getElementById('specialCanvas');
var ctx3 = specialCanvas.getContext('2d');
ctx3.font = "30px Arial";
ctx3.strokeText("Hello World", 10, 30);
console.log(ctx3);

//Script for canvas4
var canvas4 = document.getElementById('canvas4');
var ctx4 = canvas4.getContext('2d');

// Create gradient
var grd = ctx4.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx4.fillStyle = grd;
ctx4.fillRect(10, 10, 150, 80);
console.log(ctx4);