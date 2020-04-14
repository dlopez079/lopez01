//Create line through the first canvas
var canvas1 = document.getElementById("canvas1"); //find the <canvas> element on DOM
var ctx = canvas1.getContext("2d");  // You need a drawing object for the canvas.  The getContext() is a built-in HTML object, with properties and methods for drawing
ctx.moveTo(0,0);  //Starting point for line.  The upper-left corner of the canvas has the coordinates (0,0)
ctx.lineTo(300,150);  //End point for line.
ctx.stroke();  // To actually draw the line, you must use one of the "ink" methods, like stroke().

//Create rectangle in second canvas
var canvas2 = document.getElementById("canvas2"); //find the <canvas> element on DOM
var ctx = canvas2.getContext("2d"); // You need a drawing object for the canvas.  The getContext() is a built-in HTML object, with properties and methods for drawing
ctx.fillStyle = "#FF0000" // Set the fill style of the drawing object to the color red
ctx.fillRect(0, 0, 150, 75) // The fillStyle property can be a CSS color, a gradient, or a pattern. The default fillStyle is black. The fillRect(x,y,width,height) method draws a rectangle, filled with the fill style, on the canvas


//Create a circle in third canvas
var canvas3 = document.getElementById("canvas3"); //find the <canvas> element on DOM
var ctx = canvas3.getContext("2d"); // You need a drawing object for the canvas.  The getContext() is a built-in HTML object, with properties and methods for drawing
ctx.beginPath(); //begins a path
ctx.arc(95, 50, 40, 0, 2 * Math.PI); //arc(x,y,r,startangle,endangle) - creates an arc/curve. To create a circle with arc(): Set start angle to 0 and end angle to 2*Math.PI. The x and y parameters define the x- and y-coordinates of the center of the circle. The r parameter defines the radius of the circle.
ctx.stroke(); //To actually draw the line, you must use one of the "ink" methods, like stroke().