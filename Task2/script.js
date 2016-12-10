var x1 = 2;
var y1 = 8;
var x2 = parseInt(prompt("enter x2"));
var y2 = parseInt(prompt("enter y2"));
var result;
var xdiff = x2 - x1;
var ydiff = y2 - y1;
var result = Math.sqrt((xdiff * xdiff) + (ydiff * ydiff));
alert("The distance between points A(2,8) and B( "  + x2 + "," + y2 + ") is " + result);
