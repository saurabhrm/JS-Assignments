// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let getRadius = prompt("What is Radius?");

// calculate the area of circle 

let areaOfCircle = Math.PI.toFixed(2) * getRadius * getRadius;

document.getElementById("circle1").innerHTML=`Area of a Circle is = ${areaOfCircle}`;

// calculate the circumference of a circle 

let c = 2 * Math.PI.toFixed(2) * getRadius;
document.getElementById("circle2").innerHTML=`Circumference of a Circle is = ${c}`;
