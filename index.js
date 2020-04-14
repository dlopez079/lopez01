//Create line through the first canvas
var canvas1 = document.getElementById("canvas1");
var ctx = canvas1.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(300,150);
ctx.stroke();