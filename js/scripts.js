function check_getTriangle(){
var a=parseFloat(prompt("side a"));
var b=parseFloat(prompt("side b"));
var c=parseFloat(prompt("side c"));

 if(a===b && a===c && b===c){
 alert("Equilateral");
}
else if(a===b || a===c || b===c){
alert("Its is an Isosceles");
}
else if((a+b)<= c || (a+c)<=b || (b+c)<=a){
alert("its not a Triangle");
}
else{
alert("Scalene");
}
}
