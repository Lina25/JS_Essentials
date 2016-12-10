// b(1,15) => 16, b(55,3) => 58, b(-5, -5) => -10, typeof b() => number
function sum(a,b) {
  return(a+b);
}
// c(2,2) => 4, c(3,3) => 27, c(4,5) => 1024, typeof c() => number
function pow(a,n) {
  return Math.pow(a,n);
}
var test = pow(2,3);
alert(test);