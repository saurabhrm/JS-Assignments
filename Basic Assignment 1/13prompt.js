// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let base = prompt("What is base value?");
let height = prompt("What is the height of triangle?")

let areaOfTriangle = 0.5 * base * height;

document.getElementById("answer").innerHTML=areaOfTriangle;