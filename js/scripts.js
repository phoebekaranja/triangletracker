function getTriangle(){
var a = parseFloat(prompt("Enter the length side a"));
var b = parseFloat(prompt("Enter the height side b"));
var c = parseFloat(prompt("Enter the hypotenuse c"));
var determine = function(a, b, c){
if (a === b && b === c && a === c){
  alert("Equilateral Triange");
    }
else if ((a === b && b === a) (a != c && b !== C));
alert("Isosceles");
}
 determine();
 if(a===b && a===c && b===c){
alert("Equilateral");
}
else if(a===b || a===c || b===c){
alert(" Its is an Isosceles");
}
else if((a+b)<= c || (a+c)<=b || (b+c)<=a) {
alert("its not a Triangle");
}
else
alert("Scalene");
}
}
getTriangle();


​
​
